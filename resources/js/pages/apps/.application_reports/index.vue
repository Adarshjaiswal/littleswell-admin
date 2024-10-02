<script setup>
import { JobApplicationReport } from '@/views/apps/jobapplication/useJobApplication';
import axios from 'axios';
import { RouterLink } from 'vue-router';
import * as XLSX from 'xlsx';

const JobApplicationStore = JobApplicationReport()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const current_page = ref(1)
const totalapplication = ref(0)
const applications = ref([])
const errormessage = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage.value)
// const isUserInfoAddDialogVisible = ref(false)
// const user_id = ref('')
// const job_id = ref('')
// const user_name = ref('')
// const sex = ref('')
// const mother_toungue = ref('')
// const marital_status = ref('')
// const blood_group = ref('')
// const department = ref('')
// const designation = ref('')
// const uan = ref('')
// const qualification = ref('')
// const bank_name = ref('')
// const bank_acc_number = ref('')
// const ifsc = ref('')
// const doj = ref('')
// const Id = ref('')
const application_id = ref('')
const annual_salary = ref('')
const job_location = ref('')
const ConfirmationDialogVisible = ref(false)
const dateRange = ref('')
const skills = ref('')
const skill_id = ref([])
// const status = ref(false)
const items = ['Accepted', 'Rejected', 'Pending']
const report_status = ref([])
const designationSerch = ref('')
const states = ref([])
const selectedStates = ref([]) // Array to hold selected state IDs
const cities = ref([])
const location = ref([])
let isLoading = ref(false)


// Function to generate an employee ID
const generateEmployeeID = () => {
  const randomSuffix = Math.floor(Math.random() * 900000) + 100000; // Random 6-digit number
  return `EMP${randomSuffix}`;
};

// Format date function
const formatDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',

  };

  return new Date(dateString).toLocaleString('en-US', options);
};

// 👉 Fetching Roles
const fetchApplication = (currentPage, rowPerPage) => {
  isLoading.value = true;
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
    startDate: dateRange.value.substring(0, 10),
    endDate: dateRange.value.substring(14),
    skill_id: skill_id.value,
    report_status: report_status.value,
    designationSerch: designationSerch.value,
    location: location.value,
  };

  JobApplicationStore.fetchApplication(pageQueryParam, rowPerPage, params)
    .then(response => {
      applications.value = response.data.AppliedJobs_data;
      current_page.value = response.data.pagination.current_page
      // console.log("==",response.data.total);
      totalPage.value = response.data.pagination.last_page;
      totalapplication.value = response.data.pagination.total;
      if (response.status === 200) {
        successmessage.value = true;
      } else {
        errormessage.value = true;
      }
    })
    .catch(error => {
      errormessage.value = true;
    }).finally(()=>isLoading.value = false);
}
watchEffect(() => {
  fetchApplication(paginationRef.value, rowPerPage.value);
});

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = roles.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = roles.value.length + (currentPage.value - 1) * rowPerPage.value

  return `${firstIndex}-${lastIndex} of ${totalroles.value}`
})



const updateStatus = async (applicationId, newStatus) => {
  try {
    const response = await axios.put(`/api/web/application/update-status/${applicationId}`, { status: newStatus });

    if (response.status === 200) {
      // Update the status in the applications array or re-fetch the data
      fetchApplication(paginationRef.value, rowPerPage.value); // You may need to modify this
      successmessage.value = true; // Show a success message
    } else {
      // Handle the error case
      errormessage.value = true; // Show an error message
    }
  } catch (error) {
    console.error(error);
    errormessage.value = true; // Show an error message
  }
};

// Function to handle the "Agree" button click in the confirmation dialog
const handleAgreeClick = () => {
  updateStatus(application_id.value, 'Rejected'); // Change 'Accepted' to the desired new status
  ConfirmationDialogVisible.value = false; // Close the confirmation dialog
};

const download_application_report = () => {
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
    startDate: dateRange.value.substring(0, 10),
    endDate: dateRange.value.substring(14),
    skill_id: skill_id.value,
    report_status: report_status.value,
    designationSerch: designationSerch.value,
    location: location.value,
  };
  axios.get('/api/web/download-job-application-report',{params})
    .then(response => {
      // let data = response.data.AppliedJobs_data;
      let data = response.data.AppliedJobs_data;
      // console.log("=====",data);
      downloadExcel(data);
    })
    .catch(error => {
      console.error('Error fetching skills:', error);
    });

}
const downloadExcel = (data) => {
      const workbook = XLSX.utils.book_new();
      const sheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1');

      const buffer = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
      const blob = new Blob([buffer], { type: 'application/octet-stream' });
      const filename = 'application_report.xlsx';

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

onMounted(() => {
  axios.get('/api/web/job/get-skills')
    .then(response => {
      skills.value = response.data.skills_data.map(skill => ({
        id: skill.id,
        title: skill.skill_title
      }));
      // console.log(skills);
    })
    .catch(error => {
      console.error('Error fetching skills:', error);
    });

  // Get state api
  axios.get('/api/web/job/get-states')
    .then(response => {
      states.value = response.data.states_data.map(state => ({
        id: state.id,
        name: state.name
      }));
      // console.log(states.value); // Check the states array here
    })
    .catch(error => {
      console.error('Error fetching states:', error);
    });

});

// Watch for changes in selected states
watch(selectedStates, () => {
  if (selectedStates.value.length > 0) {
    // Make an API call to fetch cities based on selected states
    axios.get('/api/web/job/get-cities-by-states', {
      params: {
        selected_states: selectedStates.value,
      }
    })
      .then(response => {
        //  cities.value = response.data.cities;
        cities.value = response.data.cities.map(city => ({
          id: city.id,
          name: city.name
        }));

        // console.log('Fetched cities:', cities.value);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });
  } else {
    cities.value = [];
  }
});

</script>


<template>
  <section>
    <VRow>
      <!-- Reject Confirmation Dialog Box  -->
      <VDialog v-model="ConfirmationDialogVisible" persistent class="v-dialog-sm">
        <!-- Dialog Activator -->


        <!-- Dialog Content -->
        <VCard title="">
          <DialogCloseBtn variant="text" size="small" @click="ConfirmationDialogVisible = false" />

          <VCardText>
            <h1>Are you sure?</h1>
          </VCardText>

          <VCardText class="d-flex justify-end gap-2">
            <VBtn color="secondary" variant="tonal" @click="ConfirmationDialogVisible = false">
              Disagree
            </VBtn>
            <VBtn color="error" @click="handleAgreeClick">
              Agree
            </VBtn>
          </VCardText>
        </VCard>
      </VDialog>
      <!-- Success snackbar -->
      <VSnackbar v-model="errormessage" location="top end" variant="flat" color="error">
        Some Error Occured :(
      </VSnackbar>
      <!-- Error snackbar -->
      <VSnackbar v-model="successmessage" location="top end" variant="flat" color="success">
        Request Sucessful :)
      </VSnackbar>

      <VCol cols="12">
        <VCard title="Job Applications">
          <VDivider />
          <VCardText class="">
            <!-- 👉 Export button -->
            <VBtn @click="download_application_report()" variant="tonal" color="primary" prepend-icon="bx-arrow-from-bottom" class="mb-5">
                Export
              </VBtn>

              <!-- Code For Filters -->
            <VRow>
              <VCol cols="12" md="4">
                <AppDateTimePicker v-model="dateRange" label="Choose Date" :config="{ mode: 'range' }"
                />
              </VCol>

              <!-- 👉 Search  -->
              <VCol cols="12" md="4">
                <VTextField v-model="searchQuery" placeholder="Search By Name"  class="" />
              </VCol>


              <VCol cols="12" md="4">
                <VSelect v-model="skill_id" chips multiple clearable label="Select Skill" :rules="[requiredValidator]" :items="skills"
                  item-value="id" item-text="title"  />
              </VCol>

              <VCol cols="12" md="4">
                <VSelect v-model="report_status" chips multiple clearable :items="items"  label="Report status" />
              </VCol>

              <VCol cols="12" md="4">
                <VTextField v-model="designationSerch" placeholder="Search By Designation"  class="" />
              </VCol>
              <VCol cols="12" md="4">
                <VAutocomplete v-model="selectedStates" :items="states" :menu-props="{ maxHeight: '400' }"
                  label="Select State" item-title="name" item-value="id" multiple chips />
              </VCol>

              <!-- 👉 Cities -->
              <VCol cols="12" md="4">
                <VAutocomplete v-model="location" :items="cities" :menu-props="{ maxHeight: '200' }" label="Select City"
                  item-title="name" item-value="id" chips multiple clearable />
              </VCol>

            </VRow>

          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap"  height="27rem" fixed-header>
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col" style="inline-size: 48px;">
                  SR. No.
                </th>
                <th scope="col">
                  USER ID
                </th>
                <th scope="col">
                  JOB TITLE
                </th>
                <th scope="col">
                  USER NAME
                </th>
                <th scope="col">
                  job Skill
                </th>
                <th scope="col">
                  Job Location
                </th>
                <th scope="col">
                  Designation
                </th>
                <th scope="col">
                  STATUS
                </th>
                <th scope="col">
                  APPLIED DATE
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr v-for="(application, index) in applications" :key="application.id">

                <!-- 👉 Checkbox -->
                <td>
                  <span class="text-capitalize text-base"> {{(current_page-1)*10 + index + 1 }}</span>
                </td>
                <td>

                  <span class="text-capitalize text-base">{{ application.emp_id ? application.emp_id : `TEMP/${application.user_id}` }}</span>
                </td>
                <!-- 👉 Job Title -->
                <td>

                  <span class="text-capitalize text-base">{{ application.job_title }}</span>
                </td>

                <!-- 👉 user name -->
                <td>
                  <RouterLink :to="{ name: 'apps-user-view-id', params: { id: application.user_id } }"><span
                      class="text-capitalize text-base">{{ application.user_name }}</span></RouterLink>
                </td>
                <!-- 👉 user name -->
                <td>
                  <span class="text-capitalize text-base"> {{ application.skill_title }}</span>
                </td>
                <td>
                  <span class="text-capitalize text-base"> {{ application.location }}</span>
                </td>
                <td>
                  <span class="text-capitalize text-base"> {{ application.designation }}</span>
                </td>
                <td>
                  <span class="text-capitalize text-base">{{ application.status }}</span>
                </td>
                <!-- 👉 CREATED DATE -->
                <td class="text-capitalize text-high-emphasis">
                  <span class="text-base">{{ application.created_at }}</span>
                </td>

                <!-- 👉 Actions -->
                <!-- <td class="text-center" style="inline-size: 80px;">
                  <RouterLink :to="{ name: 'apps-jobapplication-view-id', params: { id: application.id } }"
                    v-if="application.status === 'Accepted'" prepend-icon="bx-show">
                    View Detail
                  </RouterLink>
                  <VBtn variant="text" class="me-4" prepend-icon="bx-check-double"
                    v-else-if="application.status === 'Pending'"
                    @click="openAddDialog(application.user_id, application.job_id, application.user_name, application.id)">
                    Accept
                  </VBtn>
                  <VBtn variant="text" class="me-4" prepend-icon="bx-x" v-if="application.status === 'Pending'"
                    @click="openConfirmationDialog(application.id)">
                    Reject
                  </VBtn>
                  <RouterLink :to="{ name: 'apps-jobapplication-view-id', params: { id: application.id } }"
                    v-if="application.status === 'Rejected'" prepend-icon="bx-show">
                    View Detail
                  </RouterLink>

                </td> -->
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!applications.length">
              <tr>
                <td v-if="isLoading" colspan="11" class="text-center text-body-1 ">
                  <VProgressCircular
                    :size="60"
                    color="primary"
                    indeterminate
                    class="my-5"
                  />
                </td>
                <td v-else colspan="11" class="text-center text-body-1 ">
                  No data available
                </td>
              </tr>
            </tfoot>
          </VTable>

          <VDivider />

          <!-- SECTION Pagination -->


          <VCardText class="d-flex flex-wrap justify-end gap-4 pa-2">

            <!-- 👉 Rows per page -->
            <div class="d-flex align-center" style="inline-size: 171px;">
              <span class="text-no-wrap text-sm me-3">Rows per page:</span>
              <VSelect v-model="rowPerPage" density="compact" class="per-page-select" variant="plain"
                :items="[10, 20, 30, 50]" />
            </div>
            <!-- 👉 Total data in table-->
            <div class="d-flex align-center">
              <span class="text-sm text-no-wrap me-3">Total Data: {{ totalapplication }}</span>
            </div>

            <!-- 👉 Pagination and pagination meta -->
            <div class="d-flex align-center">
              <VPagination v-model="paginationRef" :length="totalPage" color="primary" prev-icon="mdi-chevron-left"
                next-icon="mdi-chevron-right" first-icon="mdi-chevron-double-left" last-icon="mdi-chevron-double-right" />


            </div>


          </VCardText>
          <!-- !SECTION -->
        </VCard>
      </VCol>
    </VRow>

  </section>
</template>



<style lang="scss">
.app-user-search-filter {
  inline-size: 385px;
}

.text-capitalize {
  text-transform: capitalize;
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}

.per-page-select {
  margin-block: auto;

  .v-field__input {
    align-items: center;
    padding: 2px;
    font-size: 14px;
  }

  .v-field__append-inner {
    align-items: center;
    padding: 0;
    margin-inline-start: -2.5rem;

    .v-icon {
      margin-inline-start: 0 !important;
    }
  }
}

.date_input {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #D0D5DA;
  border-radius: 6px;
  color: inherit;
  inline-size: 100%;
  letter-spacing: .009375em;
  min-block-size: var(--v-input-control-height, 56px);
  opacity: var(--v-high-emphasis-opacity);
  padding-block: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0)) var(--v-field-padding-bottom, 6px);
  padding-block: 0;
  padding-inline: 10px;
  padding-inline-end: var(--v-field-padding-end);
  padding-inline-start: var(--v-field-padding-start);
}
</style>@/views/apps/JobApplication/useJobApplication@/views/apps/JobApplication/useJobApplication