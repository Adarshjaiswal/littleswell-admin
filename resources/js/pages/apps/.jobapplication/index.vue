<script setup>
import { JobApplication } from '@/views/apps/jobapplication/useJobApplication';
import axios from 'axios';
import { RouterLink } from 'vue-router';

const JobApplicationStore = JobApplication()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalapplication = ref(0)
const applications = ref([])
const errormessage = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage.value)
const isUserInfoAddDialogVisible = ref(false)
const user_id = ref('')
const job_id = ref('')
const user_name = ref('')
const sex = ref('')
const mother_toungue = ref('')
const marital_status = ref('')
const blood_group = ref('')
const department = ref('')
const designation = ref('')
const uan = ref('')
const qualification = ref('')
const bank_name = ref('')
const bank_acc_number = ref('')
const ifsc = ref('')
const doj = ref('')
const Id = ref('')
const application_id = ref('')
const annual_salary = ref('')
const job_location = ref('')
const ConfirmationDialogVisible = ref(false)

// Function to generate an employee ID
const generateEmployeeID = () => {
  const randomSuffix = Math.floor(Math.random() * 900000) + 100000; // Random 6-digit number
  return `EMP${randomSuffix}`;
};

const AddEmployee = async () => {

  try {
    const empId = generateEmployeeID();
    const id = Id.value
    const response = await axios.post(`/api/web/application/add-emp/${id}`, {
      user_id: user_id.value, // Pass the concern_id to identify the concern
      job_id: job_id.value, // Pass the updated remark
      emp_name: user_name.value,
      emp_id: empId, // Include the generated employee ID
      sex: sex.value,
      mother_toungue: mother_toungue.value,
      marital_status: marital_status.value,
      blood_group: blood_group.value,
      department: department.value,
      designation: designation.value,
      uan: uan.value,
      qualification: qualification.value,
      bank_name: bank_name.value,
      bank_ac_no: bank_acc_number.value,
      ifsc: ifsc.value,
      doj: doj.value,
      job_location: job_location.value,
      annual_salary: annual_salary.value
    });
    if (response.data.status == true) {
      isUserInfoAddDialogVisible.value = false; // Close the dialog
      // Refresh concerns or update specific concern's remark
      fetchApplication(paginationRef.value, rowPerPage.value);
      successmessage.value = true; // Show success message
    } else {


      // Handle error case
      errormessage.value = true; // Show error message
    }
  } catch (error) {

    console.error(error); // Log the error for debugging
    errormessage.value = true; // Show error message
  }
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
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
  };

  JobApplicationStore.fetchApplication(pageQueryParam, rowPerPage, params)
    .then(response => {
      applications.value = response.data.AppliedJobs_data.data;
      totalPage.value = response.data.AppliedJobs_data.last_page;
      totalapplication.value = response.data.AppliedJobs_data.total;
      if (response.status === 200) {
        successmessage.value = true;
      } else {
        errormessage.value = true;
      }
    })
    .catch(error => {
      errormessage.value = true;
    });
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

const openAddDialog = (userId, jobId, userName, id) => {
  user_id.value = userId;
  job_id.value = jobId;
  user_name.value = userName;
  Id.value = id;
  isUserInfoAddDialogVisible.value = true;

};

const openConfirmationDialog = (id) => {
  application_id.value = id;
  ConfirmationDialogVisible.value = true;

};

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

</script>

<template>
  <section>
    <VRow>

      <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 800" v-model="isUserInfoAddDialogVisible">
        <VCard class="pa-sm-9 pa-5">
          <!-- 👉 dialog close btn -->
          <DialogCloseBtn variant="text" size="small" @click="isUserInfoAddDialogVisible = false" />

          <VCardItem class="text-center">
            <VCardTitle class="text-h5 mb-3">
              Add Employee
            </VCardTitle>

          </VCardItem>

          <VCardText>
            <!-- 👉 Form -->
            <VForm class="mt-6" @submit.prevent="onFormSubmit">
              <VRow>
                <!-- 👉 Full Name -->
                <VCol cols="12" md="6">
                  <VTextField v-model="user_name" label="Full Name" readonly />
                </VCol>

                <!-- 👉 Sex -->
                <VCol cols="12" md="6">
                  <v-select v-model="sex" label="Sex" :items="['Male', 'Female']"></v-select>
                </VCol>

                <!-- 👉 Matrial Status -->
                <VCol cols="12" md="6">

                  <v-select v-model="marital_status" label="Marital Status"
                    :items="['Married', 'Unmarried', 'Divorced']"></v-select>
                </VCol>

                <!-- 👉 Mother Toungue -->
                <VCol cols="12" md="6">
                  <VTextField v-model="mother_toungue" label="Mother Toungue" />
                </VCol>

                <!-- 👉 Blood Group -->
                <VCol cols="12" md="6">
                  <VTextField v-model="blood_group" label="Blood Group" />
                </VCol>

                <!-- 👉 Department -->
                <VCol cols="12" md="6">
                  <VTextField v-model="department" label="Department" />
                </VCol>

                <!-- 👉 Designation -->
                <VCol cols="12" md="6">
                  <VTextField v-model="designation" label="Designation" />
                </VCol>
                <input type="hidden" v-model="user_id">
                <input type="hidden" v-model="job_id">
                <input type="hidden" v-model="id">


                <!-- 👉 UNA -->
                <VCol cols="12" md="6">
                  <VTextField v-model="uan" label="UAN" />
                </VCol>

                <!-- 👉 Qualification -->
                <VCol cols="12" md="6">
                  <VTextField v-model="qualification" label="Qualification" />
                </VCol>
                <!-- 👉 Bank Name -->
                <VCol cols="12" md="6">
                  <VTextField v-model="bank_name" label="Bank Name" />
                </VCol>


                <!-- 👉 Bank Ac No. -->
                <VCol cols="12" md="6">
                  <VTextField v-model="bank_acc_number" label="Bank Ac No." />
                </VCol>


                <!-- 👉 IFSC -->
                <VCol cols="12" md="6">
                  <VTextField v-model="ifsc" label="IFSC" />
                </VCol>

                <!-- 👉 Date of Joining -->
                <VCol cols="12" md="6">

                  <input class="date_input" type="date" v-model="doj" label="Date of Joining"/>
                  <!-- <AppDateTimePicker v-model="exp_date" label="Expire Date"
                  :config="{ mode: 'single', dateFormat: 'Y-m-d' }" /> -->
                </VCol>
                <!-- 👉 Salary -->
                <VCol cols="12" md="6">
                  <VTextField v-model="annual_salary" label="Annual salary" />
                </VCol>
                <!-- 👉 job location -->
                <VCol cols="12" md="12">
                  <VTextField v-model="job_location" label="Job Location" />
                </VCol>
                <!-- 👉 Submit and Cancel -->
                <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
                  <VBtn type="submit" @click="AddEmployee">
                    Submit
                  </VBtn>
                  <VBtn color="secondary" variant="tonal" @click="isUserInfoAddDialogVisible = false">
                    Cancel
                  </VBtn>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VDialog>

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
          <VCardText class="d-flex flex-wrap gap-4">
            <!-- 👉 Export button -->
            <!-- <VBtn variant="tonal" color="secondary" prepend-icon="bx-arrow-from-bottom">
                Export
              </VBtn> -->

            <VSpacer />

            <div class="app-user-search-filter d-flex align-center">
              <!-- 👉 Search  -->
              <VTextField v-model="searchQuery" placeholder="Search" density="compact" class="me-3" />

              <!-- 👉 Add user button -->
              <!-- <VBtn @click="iscreateJobDrawerVisible = true">
                Add Role
              </VBtn> -->
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap">
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col" style="inline-size: 48px;">
                  SR. No.
                </th>
                <th scope="col">
                  JOB TITLE
                </th>
                <th scope="col">
                  USER NAME
                </th>
                <th scope="col">
                  STATUS
                </th>
                <th scope="col">
                  APPLIED DATE
                </th>
                <th scope="col">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr v-for="(application, index) in applications" :key="application.id">

                <!-- 👉 Checkbox -->
                <td>
                  <span class="text-capitalize text-base"> {{ index + 1 }}</span>
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
                  <span class="text-capitalize text-base">{{ application.status }}</span>
                </td>
                <!-- 👉 CREATED DATE -->
                <td class="text-capitalize text-high-emphasis">
                  <span class="text-base">{{ formatDate(application.created_at) }}</span>
                </td>
                <!-- 👉 Actions -->
                <td class="text-center" style="inline-size: 80px;">
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

                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!applications.length">
              <tr>
                <td colspan="7" class="text-center text-body-1">
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
</style>
@/views/apps/JobApplication/useJobApplication