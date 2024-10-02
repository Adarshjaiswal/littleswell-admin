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
const location = ref([]);
const states = ref([])
const selectedStates = ref([])
const cities = ref([])
const selectedSkillId = ref(null);
let isLoading = ref(false)
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



// Fetching Jobs
const fetchJobs = (currentPage, rowPerPage) => {
  isLoading.value = true;
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, 
  };

  UseJobs.fetchJobs(pageQueryParam, rowPerPage, params)
    .then(response => {
      console.log(response.data)
      jobs.value = response.data.vaccine_data.data;
      current_page.value = response.data.vaccine_data.current_page
      totalPage.value = response.data.vaccine_data.last_page;
      totaljobs.value = response.data.vaccine_data.total;
      if (response.status === 200) {
        successmessage.value = true;
      } else {
        errormessage.value = true;
      }
      console.log(jobs.length);
    })
    .catch(error => {
      errormessage.value = true;
    }).finally(() => isLoading.value = false);
}
watchEffect(() => {
  fetchJobs(paginationRef.value, rowPerPage.value);
});
// watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})
// search filters

const iscreateJobDrawerVisible = ref(false)
// watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})
// Computing pagination data
const paginationData = computed(() => {
  const firstIndex = jobs.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = jobs.value.length + (currentPage.value - 1) * rowPerPage.value
  return `${firstIndex}-${lastIndex} of ${totaljobs.value}`
})
const job = async userdata => {
  console.log(userdata);
  const { vaccine_name, description, vac_time, time_value, status } = userdata;
  try {
    const response = await UseJobs.addJob(vaccine_name, description, vac_time, time_value, status);
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

const deleteJob = async (jobId) => {
  const confirmed = window.confirm("Are you sure you want to delete this Vaccine?");
  if (!confirmed) return;

  isLoading.value = true;
  try {
    const response = await UseJobs.deleteJob(jobId); 
    if (response.status === 200) {
      fetchJobs(paginationRef.value, rowPerPage.value);
      successmessage.value = true;
    } else {
      errormessage.value = true;
    }
  } catch (error) {
    console.error("Failed to delete Vaccine:", error);
    errormessage.value = true;
  } finally {
    isLoading.value = false;
  }
};




</script>
<template>
  <section>
    <VRow>

      <VSnackbar v-model="errormessage" location="top end" variant="flat" color="error">
        Some Error Occured :(
      </VSnackbar>
      <!-- Error snackbar -->
      <VSnackbar v-model="successmessage" location="top end" variant="flat" color="success">
        Request Sucessful :)
      </VSnackbar>


      <VCol cols="12">
        <VCard title="Vaccine">
          <!-- <VCardText>
            <VRow>          
               <VCol cols="12" sm="4">
                <VSelect v-model="selectedStatus" label="Select Status" :items="status" clearable clear-icon="bx-x" />
              </VCol>
            </VRow>
          </VCardText> -->
          <VDivider />

          <VCardText class="d-flex flex-wrap gap-4">
            <!-- Export button -->
            <!-- <VBtn variant="tonal" color="secondary" prepend-icon="bx-arrow-from-bottom">
              Export
            </VBtn> -->
            <VSpacer />
            <div class="app-user-search-filter d-flex align-center">
              <!-- Search  -->
              <VTextField v-model="searchQuery" placeholder="Search Vaccine" density="compact" class="me-3" />
              <!-- Add user button -->
              <VBtn @click="iscreateJobDrawerVisible = true">
                Add Vaccine
              </VBtn>
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap" height="23.7rem" fixed-header>
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
                <!-- <th scope="col">
                  Status
                </th> -->
                <th scope="col">
                  Created Date
                </th>
                <th scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <!-- table body -->
            <tbody>
              <tr v-for="(job, index) in jobs" :key="job.id">
                <td>
                  <span class="text-capitalize text-base"> {{ (current_page - 1) * 10 + index + 1 }}</span>
                </td>
                <!--  Vaccine Name -->
                <td>
                  <span class="text-capitalize text-base">{{ job.vaccine_name }}</span>
                </td>
                <!-- Description -->
                <td>
                  <span class="text-capitalize text-base">{{ job.description }}</span>
                </td>
                <!--  Time -->
                <td>
                  <span class="text-capitalize text-base">{{ job.day_for_vaccine }} (Days)</span>
                </td>
                <!--  CREATED DATE -->
                <td class="text-capitalize text-high-emphasis">
                  <span class="text-base">{{ formatDate(job.created_at) }}</span>
                </td>
                <!-- Actions -->
                <td class="text-center" style="inline-size: 80px;">
                <v-icon color="error" @click="deleteJob(job.id)" size="24">bx-trash</v-icon> 
                  
                </td>


              </tr>
            </tbody>


            <!-- table footer  -->
            <tfoot v-show="!jobs.length">
              <tr>
                <td v-if="isLoading" colspan="11" class="text-center text-body-1 ">
                  <VProgressCircular :size="60" color="primary" indeterminate class="my-5" />
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
            <!-- Rows per page -->
            <div class="d-flex align-center" style="inline-size: 171px;">
              <span class="text-no-wrap text-sm me-3">Rows per page:</span>
              <VSelect v-model="rowPerPage" density="compact" class="per-page-select" variant="plain"
                :items="[10, 20, 30, 50]" />
            </div>
            <!-- Total data in table-->
            <div class="d-flex align-center">
              <span class="text-sm text-no-wrap me-3">Total Data: {{ totaljobs }}</span>
            </div>
            <!-- Pagination and pagination meta -->
            <div class="d-flex align-center">
              <VPagination v-model="paginationRef" :length="totalPage" color="primary" prev-icon="mdi-chevron-left"
                next-icon="mdi-chevron-right" first-icon="mdi-chevron-double-left"
                last-icon="mdi-chevron-double-right" />
            </div>
          </VCardText>
          <!-- !SECTION -->
        </VCard>
      </VCol>
    </VRow>
    <!-- Add New User -->
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
