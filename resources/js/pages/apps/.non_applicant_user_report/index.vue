<script setup>
import { useUserListStore } from '@/views/apps/user/useUserListStore';
import axios from 'axios';
import * as XLSX from 'xlsx';


const userListStore = useUserListStore()
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const current_page = ref(1)
const totalUsers = ref(0)
const users = ref([])
const errormessage = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage.value)
const states = ref([])
const selectedStates = ref([]) // Array to hold selected state IDs
const cities = ref([])
const location = ref([])
const dateRange = ref('')
const skills = ref('')
const skill_id = ref([])
const items = ['Accepted', 'Pending']
const payment_status = ref()
const designationSerch = ref('')
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
// 👉 Fetching users
const fetchUsersForDownloadReports = (currentPage, rowPerPage) => {
  isLoading.value = true
    // if(payment_status.value=="Accepted"){
    //   payment_status.value = 1
    // }else if(payment_status.value=="Pending"){
    //   payment_status.value=0
    // }else{
    //   payment_status.value=null
    // }
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
    startDate: dateRange.value.substring(0, 10),
    endDate: dateRange.value.substring(14),
    // location: location.value,
    // skill_id: skill_id.value,
    designationSerch: designationSerch.value,
    payment_status: payment_status.value ,
  };

  userListStore.fetchNonApplicantUserReports(pageQueryParam, rowPerPage, params)
    .then(response => {
      users.value = response.data.users_data;
      current_page.value = response.data.pagination.current_page
      console.log("==",response.data);
      totalPage.value = response.data.pagination.last_page;
      totalUsers.value = response.data.pagination.total;
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

const download_users_report = () => {
    const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
    startDate: dateRange.value.substring(0, 10),
    endDate: dateRange.value.substring(14),
    // location: location.value,
    // skill_id: skill_id.value,
    designationSerch: designationSerch.value,
    payment_status: payment_status.value ,
  };
  axios.get('/api/web/download-non-applicant-users-report',{params})
    .then(response => {
      let data = response.data.users_data;
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
      const filename = 'non-applicant-user-report.xlsx';

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

watchEffect(() => {
    fetchUsersForDownloadReports(paginationRef.value, rowPerPage.value);
});


// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

const resolveUserStatusVariant = stat => {
 //const statLowerCase = stat.toLowerCase()
  if (stat === 0)
    return 'error'
  if (stat === 1)
    return 'success'
 

  return 'primary'
}
const resolveUserAadharStatusVariant = stat => {
 //const statLowerCase = stat.toLowerCase()
  if (stat === 0)
    return 'error'
  if (stat === 1)
    return 'success'
 

  return 'primary'
}

const resolveUserPaymentStatusVariant = stat => {
 //const statLowerCase = stat.toLowerCase()
  if (stat === 0)
    return 'warning'
  if (stat === 1)
    return 'success'
 

  return 'primary'
}

const iscreateJobDrawerVisible = ref(false)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = users.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = users.value.length + (currentPage.value - 1) * rowPerPage.value

  return `${firstIndex}-${lastIndex} of ${totalUsers.value}`
})

// SECTION Checkbox toggle
const selectedRows = ref([])
const selectAllUser = ref(false)

// 👉 add/remove all checkbox ids in array


// 👉 watch if checkbox array is empty all select should be uncheck
watch(selectedRows, () => {
  if (!selectedRows.value.length)
    selectAllUser.value = false
}, { deep: true })

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
      console.log(states.value); // Check the states array here
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

        console.log('Fetched cities:', cities.value);
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
   <!-- Success snackbar -->
   <VSnackbar v-model="errormessage" location="top end" variant="flat" color="error">
        Some Error Occured :(
      </VSnackbar>
      <!-- Error snackbar -->
      <VSnackbar v-model="successmessage" location="top end" variant="flat" color="success">
        Request Sucessful :)
      </VSnackbar>
      
      <VCol cols="12">
        <VCard title="App Users">
          <VCardText>
            <VRow>
            </VRow>
          </VCardText>

          <VDivider />

          <VCardText class=" flex-wrap gap-4">
            <!-- 👉 Export button -->
            <VBtn @click="download_users_report()" variant="tonal" color="primary" class="mb-5" prepend-icon="bx-arrow-from-bottom">
                Export
              </VBtn>
            <VSpacer />

              <!-- Code For Filters -->
            <VRow>
              <VCol cols="12" md="4">
                <AppDateTimePicker v-model="dateRange" label="Choose Date" :config="{ mode: 'range' }"
                 />
              </VCol>

              <!-- 👉 Search  -->
              <VCol cols="12" md="4">
                <VTextField v-model="searchQuery" placeholder="Search User"  class="me-3" />
              </VCol>
            

              <!-- <VCol cols="12" md="4">
                <VSelect v-model="skill_id" chips multiple clearable label="Select Skill" :rules="[requiredValidator]" :items="skills"
                  item-value="id" item-text="title"  />
              </VCol> -->

              <!-- <VCol cols="12" md="4">
                <VAutocomplete v-model="selectedStates" :items="states" :menu-props="{ maxHeight: '400' }"
                  label="Select State" item-title="name" item-value="id" multiple chips  />
              </VCol> -->

              <!-- 👉 Cities -->
              <!-- <VCol cols="12" md="4">
                <VAutocomplete v-model="location" :items="cities" :menu-props="{ maxHeight: '200' }" label="Select City"
                  item-title="name" item-value="name" chips multiple  />
              </VCol> -->

              <!-- Payment status -->
              <VCol cols="12" md="4">
                <VSelect v-model="payment_status" label="Payment Status"  :items="items" clearable  />
              </VCol>

              <!-- Skills based filter -->
              <!-- <VCol cols="12" md="4">
                <VSelect v-model="skill_id" chips multiple clearable label="Select Skill" :rules="[requiredValidator]" :items="skills"
                  item-value="id" item-text="title"  />
              </VCol> -->

            </VRow>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap"  height="27rem" fixed-header>
            <!-- 👉 table head -->
            <thead>
              <tr>

                <th scope="col">
                  SR. NO.
                </th>
                <th scope="col">
                  USER ID
                </th>
                <th scope="col">
                  NAME
                </th>
                <th scope="col">
                  Skill
                </th>
                <th scope="col">
                  Preference Skill
                </th>
                <th scope="col">
                  Preference Sub_Skill
                </th>
                <th scope="col">
                  Job Preference Location
                </th>
                <th scope="col">
                 AADHAR NUMBER
                </th>
                <th scope="col">
                  EMAIL
                </th>
                <th scope="col">
                  PHONE NUMBER
                </th>
                <th scope="col">
                  LOCATION
                </th>
                <th scope="col">
                  IS PHONE VERIFIED
                </th>
                <th scope="col">
                 PAYMENT STATUS
                </th>
                <th scope="col">
               AADHAR VERIFICATION
                </th>
                <th scope="col">
                  CREATED AT
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr v-for="(user, index) in users" :key="user.id">

                <!-- 👉 Checkbox -->
                <td>
                  <span class="text-capitalize text-base"> {{(current_page-1)*10 + index + 1 }}</span>
                </td>

                <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">TEMP/{{ user.id }}</span>
               </td>

                <!-- 👉 user Name -->
                <td class="text-capitalize text-high-emphasis">
                 
                  <RouterLink :to="{ name: 'apps-user-view-id', params: { id: user.id } }"><span
                      class="text-capitalize text-base">{{ user.name }}</span></RouterLink>
                 
                </td>

                <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ user.skill_title }}</span>
               </td>
               <!-- Preference details -->
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ user.prefered_skills }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ user.prefered_sub_skills }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ user.prefered_job_location }}</span>
               </td>

                <td class="text-capitalize text-high-emphasis">
                 
                  <span class="text-base">{{ user.aadhar_number }}</span>
                </td>

                <!-- 👉 CREATED DATE -->
                <td class=" text-high-emphasis">
                 
                  <span class="text-base">{{ user.email }}</span>
                </td>

                <!-- 👉 CREATED DATE -->
                <td class="text-capitalize text-high-emphasis">
                  
                  <span class="text-base">{{ user.phone_number }}</span>
                </td>

                <!-- 👉 Sex -->
                <td>
                  <span class="text-base text-high-emphasis">{{ user.location }}</span>
                </td>

                <!-- 👉 Material Stusts -->
                <td>
                  <VChip :color="resolveUserStatusVariant(user.is_phone_verified)" density="compact" label class="text-uppercase"> {{ user.is_phone_verified ? 'Verified' : 'Not Verified' }} </VChip>
                  <!-- <span class="text-center text-high-emphasis">{{ user.is_phone_verified ? 'Verified' : 'Not Verified' }}</span> -->
                </td>

                <td>
                  <VChip :color="resolveUserPaymentStatusVariant(user.payment_status)" density="compact" label class="text-uppercase"> {{ user.payment_status ? 'Successfull' : 'Pending' }} </VChip>         
                  <!-- <span class="text-center text-high-emphasis">{{ user.payment_status ? 'Successfull' : 'Pending' }}</span> -->
                </td>
<!-- 👉 ADADHAR VERIFICATION -->
                <td>
                  <VChip :color="resolveUserAadharStatusVariant(user.is_verified)" density="compact" label class="text-uppercase"> {{ user.is_verified ? 'Verified' : 'Not Verified' }} </VChip>         
                  <!-- <span class="text-center text-high-emphasis">{{ user.payment_status ? 'Successfull' : 'Pending' }}</span> -->
                </td>
                <!-- 👉 Actions -->
                <td class="text-center">
                  <!-- <MoreBtn :menu-list="computedMoreList(user.id)" item-props /> -->
                  <span class="text-center text-high-emphasis">{{ formatDate(user.created_at) }}</span>
                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!users.length">
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
  <span class="text-sm text-no-wrap me-3">Total Data: {{ totalUsers }}</span>
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
    <Drawer v-model:isDrawerOpen="iscreateJobDrawerVisible" @user-data="addNewUser" />
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
</style>
