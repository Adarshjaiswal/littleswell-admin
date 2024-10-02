<script setup>
import Drawer from '@/pages/apps/vaccine/createJobDrawer/createJobDrawer.vue';
import { useJobs } from '@/views/apps/jobs/usejobStore';




import axios from 'axios'; // Import axios here
import { watch } from 'vue';
const UseJobs = useJobs()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const current_page = ref(1)
const totaljobs = ref(0)
const jobs = ref([])
const errormessage = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage.value)
const dialog = ref(false)
const location = ref([]); // Initialize as an empty array for multiple selections
const states = ref([])
// const skills = ref([])
const selectedStates = ref([]) // Array to hold selected state IDs
const cities = ref([]) // Holds the fetched cities
const selectedSkillId = ref(null);
let isLoading = ref(false)

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
// 👉 Fetching Jobs
const fetchJobs = (currentPage, rowPerPage) => {
  isLoading.value = true;
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
  };

  UseJobs.fetchJobs(pageQueryParam, rowPerPage, params)
    .then(response => {
      jobs.value = response.data.jobs_data;
      current_page.value = response.data.pagination.current_page
      totalPage.value = response.data.pagination.last_page;
      totaljobs.value = response.data.pagination.total;
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
  fetchJobs(paginationRef.value, rowPerPage.value);
});
// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})
// 👉 search filters
const roles = [
  {
    title: 'Admin',
    value: 'admin',
  },
  {
    title: 'Author',
    value: 'author',
  },
  {
    title: 'Editor',
    value: 'editor',
  },
  {
    title: 'Maintainer',
    value: 'maintainer',
  },
  {
    title: 'Subscriber',
    value: 'subscriber',
  },
]
const iscreateJobDrawerVisible = ref(false)
// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})
// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = jobs.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = jobs.value.length + (currentPage.value - 1) * rowPerPage.value
  return `${firstIndex}-${lastIndex} of ${totaljobs.value}`
})
const job = async userdata => {
  const { skill_id, location, job_title, company_name, exp_date, salary, job_description, experience, designation } = userdata;
  try {
    const response = await UseJobs.addJob(skill_id, location, job_title, company_name, exp_date, salary, job_description, experience, designation);
    if (response.status === 201) {
      successmessage.value = true;
      iscreateJobDrawerVisible.value = false; // Close the drawer
      fetchJobs(paginationRef.value, rowPerPage.value); // Fetch updated roles
    } else {
      errormessage.value = true;
    }
  } catch (error) {
    errormessage.value = true;
  }
}
const computedMoreList = computed(() => {
  return paramId => [
    {
      title: 'View',
      value: 'view',
      prependIcon: 'bx-show',
      to: {
        name: 'apps-user-view-id',
        params: { id: paramId },
      },
    },
    {
      title: 'Edit',
      value: 'edit',
      prependIcon: 'bx-pencil',
    },
    {
      title: 'Delete',
      value: 'delete',
      prependIcon: 'bx-trash-alt',
    },
  ]
})

const deleteJob = async (roleId) => {
  // alert(roleId)
  if (confirm('Are you sure you want to delete this Job?')) {
    try {
      const response = await UseJobs.deleteJob(roleId);
      if (response.status === 200) {
        successmessage.value = true;
        iscreateJobDrawerVisible.value = false; // Close the drawer
        fetchJobs(paginationRef.value, rowPerPage.value); // Fetch updated roles
      } else {
        errormessage.value = true;
      }
    } catch (error) {
      errormessage.value = true;
    }
  }
};

const selectedJobData = ref({
  job_title: '',
  skill_id: '',
  company_name: '',
  exp_date: '',
  designation: '',
  salary: '',
  job_description:'',
  experience:'',
  id: '',
  location: [], // Initialize as an array

});
const openEditDialog = (job) => {
  selectedJobData.value = { ...job };
  selectedStates.value = job.stateName; // Assuming stateName is an array of state names
  selectedJobData.value.location = job.cityId; // Assuming cityId is an array of city IDs
  dialog.value = true;
  fetchSkills();
  fetchStates();
};
//Function to fetch skill on edit modal
// const fetchSkills = () => {
//   axios.get('/api/web/job/get-skills')
//     .then(response => {
//       skills.value = response.data.skills_data.map(skill => ({
//         id: parseInt(skill.id),
//         title: skill.skill_title
//       }));
//     })
//     .catch(error => {
//       console.error('Error fetching Skills:', error);
//     });
// }
// Function to fetch states
const fetchStates = () => {
  // Make an API request to fetch states and update the 'states' array
  axios.get('/api/web/job/get-states')
    .then(response => {
      states.value = response.data.states_data.map(state => ({
        id: state.id,
        name: state.name
      }));
    })
    .catch(error => {
      console.error('Error fetching states:', error);
    });
};

// Watch for changes in the selectedStates array
watch(selectedStates, (newSelectedStates) => {
  // Check if there are selected states and trigger the API call
  if (newSelectedStates.length > 0) {
    // Remove city by removing state
    axios.get('/api/web/job/get-cities-by-states', {
        params: {
          selected_states: newSelectedStates,
        },
      }).then((response) => {
        let remainCities = response.data.cities.map((city) => ({
          id: city.id,
          name: city.name,
        }));
        const data = remainCities.filter(city => selectedJobData.value.location.some(item => item == city.id));
        selectedJobData.value.location=data.map(city=>city.id)
        // console.log(data);
      })
      .catch((error) => {
        // Handle errors if needed
      });
      // Show all city name for select
    fetchCities(newSelectedStates);
  } else {
    // Clear the cities array when no states are selected
    cities.value = [];
    selectedJobData.value.location=[];
  }
});


// Function to fetch cities based on selected states
const fetchCities = (selectedStates) => {
  if (selectedStates.length > 0) {
    axios
      .get('/api/web/job/get-cities-by-states', {
        params: {
          selected_states: selectedStates,
        },
      })
      .then((response) => {
        cities.value = response.data.cities.map((city) => ({
          id: city.id,
          name: city.name,
        }));
      })
      .catch((error) => {
        // Handle errors if needed
      });

  } else {
    // Clear the cities array when no states are selected
    cities.value = [];
  }
};



const updateJob = async () => {
  try {
    const response = await UseJobs.updateJob(selectedJobData.value);
    if (response.status === 200) {
      successmessage.value = true;
      dialog.value = false; // Close the dialog
      fetchJobs(paginationRef.value, rowPerPage.value); // Fetch updated roles
    } else {
      errormessage.value = true;
    }
  } catch (error) {
    errormessage.value = true;
  }
};
</script>
<template>
  <section>
    <VRow>
      <!-- Edit dialog -->
      <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
        <v-card >
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Edit Job</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn variant="text" @click="dialog = false">
                cancel
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <VCardText>
            <!-- Form -->
            <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
              <VRow>
              <!-- Job Title -->
              <VCol cols="12" md="4">
                <VTextField v-model="selectedJobData.job_title" :rules="[requiredValidator]" label="Job Title" />
              </VCol>
              <!-- Skill -->
              <VCol cols="12" md="4">
                <!-- <VSelect v-model="selectedSkillId" label="Select Skill" :items="skills" item-value="id" item-text="title" /> -->
                <VSelect v-model="selectedJobData.skill_id" label="Select Skill" :rules="[requiredValidator]" :items="skills"
                  item-value="id" item-text="title" />
              </VCol>
              <!-- Job Designation -->
              <VCol cols="6" md="4">
                <VTextField v-model="selectedJobData.designation" :rules="[requiredValidator]" label="Job Designation" />
              </VCol>
              <!-- Job Slaary -->
              <VCol cols="12" md="4">
                <VTextField v-model="selectedJobData.salary" :rules="[requiredValidator]" label="Job Salary" />
              </VCol>
              <!-- Job experience -->
              <VCol cols="12" md="4">
                <VTextField v-model="selectedJobData.experience" :rules="[requiredValidator]" label="Job Experience" />
              </VCol>
              <!-- Company -->
              <VCol cols="12" md="4">
                <VTextField v-model="selectedJobData.company_name" :rules="[requiredValidator]" label="Company" />
              </VCol>
              <VCol cols="12" md="4">
                <VAutocomplete v-model="selectedStates" :items="states" :menu-props="{ maxHeight: '400' }"
                  label="Select State" item-title="name" item-value="id" multiple chips />
              </VCol>
              <!-- 👉 Cities -->
              <VCol cols="12" md="4">
                <VAutocomplete v-model="selectedJobData.location" :items="cities" :menu-props="{ maxHeight: '400' }"
                  label="Select City" item-title="name" item-value="id" chips multiple />
              </VCol>
              <!-- Exp Date -->
              <VCol cols="12" md="4">
                <VTextField type="date" v-model="selectedJobData.exp_date" :rules="[requiredValidator]" label="Expire Date" />

              </VCol>
              <VCol cols="12">
                <VTextarea v-model="selectedJobData.job_description" :rules="[requiredValidator]" label="Job Description"
                  auto-grow />
              </VCol>
              <!-- Submit and Cancel buttons -->
              <VCol cols="12">
                <VBtn type="submit" @click="updateJob" class="me-3">
                  Submit
                </VBtn>
                <VBtn type="reset" variant="tonal" color="secondary" @click="dialog = false">
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
            </VForm>
          </VCardText>
        </v-card>
      </v-dialog>
      <VSnackbar v-model="errormessage" location="top end" variant="flat" color="error">
        Some Error Occured :(
      </VSnackbar>
      <!-- Error snackbar -->
      <VSnackbar v-model="successmessage" location="top end" variant="flat" color="success">
        Request Sucessful :)
      </VSnackbar>
      <VCol cols="12">
        <VCard title="Vaccine">
          <VCardText>
            <VRow>
              <!-- 👉 Select Role -->
              <!-- <VCol cols="12" sm="4">
                <VSelect v-model="selectedRole" label="Select Role" :items="roles" clearable clear-icon="bx-x" />
              </VCol> -->
              <!-- 👉 Select Plan -->
              <!-- <VCol cols="12" sm="4">
                <VSelect v-model="selectedPlan" label="Select Plan" :items="plans" clearable clear-icon="bx-x" />
              </VCol> -->
              <!-- 👉 Select Status -->
              <!-- <VCol cols="12" sm="4">
                <VSelect v-model="selectedStatus" label="Select Status" :items="status" clearable clear-icon="bx-x" />
              </VCol> -->
            </VRow>
          </VCardText>
          <VDivider />
          <VCardText class="d-flex flex-wrap gap-4">
            <!-- 👉 Export button -->
            <!-- <VBtn variant="tonal" color="secondary" prepend-icon="bx-arrow-from-bottom">
              Export
            </VBtn> -->
            <VSpacer />
            <div class="app-user-search-filter d-flex align-center">
              <!-- 👉 Search  -->
              <VTextField v-model="searchQuery" placeholder="Search Jobs" density="compact" class="me-3" />
              <!-- 👉 Add user button -->
              <VBtn @click="iscreateJobDrawerVisible = true">
                Add Vaccine
              </VBtn>
            </div>
          </VCardText>
          <VDivider />
          <VTable class="text-no-wrap"  height="23.7rem" fixed-header>
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col" style="inline-size: 48px;">
                  SR. NO.
                </th>
                <th scope="col">
                  Vaccine Name
                </th>
                <th scope="col">
                  Description
                </th>
                <th scope="col">
              Time
                </th>
                <th scope="col">
                  Status
                </th>


              </tr>
            </thead>
            <!-- 👉 table body -->
            <tbody>
              <tr v-for="(job, index) in jobs" :key="job.id">
                <!-- 👉 Checkbox -->
                <td>
                  <span class="text-capitalize text-base"> {{(current_page-1)*10 + index + 1 }}</span>
                </td>
                <!-- 👉  SR. NO. -->
                <td>
                  <span class="text-capitalize text-base">{{ job.job_title }}</span>
                </td>
                <!-- 👉  Vaccine Name -->
                <td>
                  <!-- <span class="text-capitalize text-base">{{ job.skill_title }}</span> -->
                </td>
                <!-- 👉 Description -->
                <td>
                  <span class="text-capitalize text-base">{{ job.company_name }}</span>
                </td>
                <!-- 👉 Time -->
                <td>
                  <ul class="text-capitalize text-base city-list">
                    <li v-for="(city, cityIndex) in job.location" :key="cityIndex">{{ city }}</li>
                  </ul>
                </td>


                <!-- 👉 CREATED DATE -->
                <td class="text-capitalize text-high-emphasis">
                  <!-- <span class="text-base">{{ user.currentPlan }}</span> -->
                  <span class="text-base">{{ formatDate(job.created_at) }}</span>
                </td>
                <!-- 👉 EXP DATE -->
                <td class="text-capitalize text-high-emphasis">
                  <!-- <span class="text-base">{{ user.currentPlan }}</span> -->
                  <span class="text-base">{{ (job.exp_date) }}</span>
                </td>
                <!-- 👉 Actions -->
                <td class="text-center" style="inline-size: 80px;">
                  <!-- <MoreBtn :menu-list="computedMoreList(job.id)" item-props /> -->
                  <v-icon color="error" @click="deleteJob(job.id)" size="24">bx-trash</v-icon>
                  <v-icon color="primary" @click="openEditDialog(job)" size="24">bx-edit</v-icon>
                </td>


              </tr>
            </tbody>


            <!-- 👉 table footer  -->
            <tfoot v-show="!jobs.length">
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
              <span class="text-sm text-no-wrap me-3">Total Data: {{ totaljobs }}</span>
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
    <!-- 👉 Add New User -->
    <Drawer v-model:isDrawerOpen="iscreateJobDrawerVisible" @user-data="job" />
  </section>
</template>




<style lang="scss">
.scrollable-city {
  max-block-size: 100px !important;

  /* Adjust the max height as needed */
  overflow-y: auto !important;

  /* Enable vertical scrolling */
}

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
</style>
