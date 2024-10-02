<script setup>
import axios from 'axios';
import * as XLSX from 'xlsx'
import { useUserListStore } from '@/views/apps/user/useUserListStore'

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
const designationSerch = ref('')
const loading = ref(false); // New loading state variable
const isLoading = ref(false)


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
const fetchEmployees = (currentPage, rowPerPage) => {
  isLoading.value = true
  // console.log(isLoading.value);
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
    startDate: dateRange.value.substring(0, 10),
    endDate: dateRange.value.substring(14),
    designationSerch: designationSerch.value,
    // location: location.value,
    // skill_id: skill_id.value,
  };
  userListStore.fetchEmployees(pageQueryParam, rowPerPage, params)
    .then(response => {
      users.value = response.data.employee_data.data;
      current_page.value = response.data.employee_data.current_page
    //   console.log(response.data.employee_data.data);
      totalPage.value = response.data.employee_data.last_page;
      totalUsers.value = response.data.employee_data.total;
      if (response.status === 200) {
        successmessage.value = true;
      } else {
        errormessage.value = true;
      }
    })
    .catch(error => {
      errormessage.value = true;
    })
    .finally(() => {
      isLoading.value = false // Set loading to false regardless of success or error
    });
    // console.log(isLoading.value);
    
}

// const download_employees_report = async() => {
//   let totalRowsInDb = 0
//   let totalRowsInSheet = 0
//     loading.value = true; // Set loading to true before making the request
//     const params = {
//     searchQuery: searchQuery.value, // Get the search query from the search box
//     startDate: dateRange.value.substring(0, 10),
//     endDate: dateRange.value.substring(14),
//     designationSerch: designationSerch.value,
//   };
//    await axios.get('/api/web/emp/download-all-employees-report', { params })
//     .then(response => {
//       let data = response.data.employee_data;
//       totalRowsInDb = response.data.totalRows
//       let total_data = [].concat(...data);
//       console.log(data);
//       // downloadExcel(total_data);
//     })
//     .catch(error => {
//       console.error('Error fetching skills:', error);
//     })
//     .finally(() => {
//       loading.value = false; // Set loading to false regardless of success or error
//     });
// }


const download_employees_report = async () => {
    loading.value = true; // Set loading to true before making the request
    const chunkSize = 5000; // Set your desired chunk size here
    let offset = 0;
    let totalRows = 0;
    let total_data = [];

    try {
        while (true) {
            const response = await axios.get('/api/web/emp/download-all-employees-report', {
                params: {
                    searchQuery: searchQuery.value,
                    startDate: dateRange.value.substring(0, 10),
                    endDate: dateRange.value.substring(14),
                    designationSerch: designationSerch.value,
                    offset,
                    limit: chunkSize,
                }
            });
            // console.log("Database response==>",response);
            let data = response.data.employee_data;
            totalRows = response.data.totalRows;
            total_data = total_data.concat(data);

            if (total_data.length >= totalRows) {
                break; // Exit loop if all data is fetched
            }

            offset += chunkSize;
        }

        // Download Excel sheet
        downloadExcel(total_data);
        // console.log("Final output==>", total_data);
    } catch (error) {
        console.error('Error fetching employee data:', error);
    } finally {
        loading.value = false; // Set loading to false regardless of success or error
    }
}








const downloadExcel = (data) => {
      const workbook = XLSX.utils.book_new();
      const sheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1');

      const buffer = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
      const blob = new Blob([buffer], { type: 'application/octet-stream' });
      const filename = 'employees_report.xlsx';

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
}



watchEffect(() => {
    fetchEmployees(paginationRef.value, rowPerPage.value);
});


// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})



// const resolveUserRoleVariant = role => {
//   const roleLowerCase = role.toLowerCase()
//   if (roleLowerCase === 'subscriber')
//     return {
//       color: 'primary',
//       icon: 'bx-user',
//     }
//   if (roleLowerCase === 'author')
//     return {
//       color: 'warning',
//       icon: 'bx-cog',
//     }
//   if (roleLowerCase === 'maintainer')
//     return {
//       color: 'success',
//       icon: 'bx-doughnut-chart',
//     }
//   if (roleLowerCase === 'editor')
//     return {
//       color: 'info',
//       icon: 'bx-pencil',
//     }
//   if (roleLowerCase === 'admin')
//     return {
//       color: 'error',
//       icon: 'bx-laptop',
//     }

//   return {
//     color: 'primary',
//     icon: 'bx-user',
//   }
// }

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
            <!-- <VBtn @click="download_employees_report()" variant="tonal" color="primary" class="mb-5" prepend-icon="bx-arrow-from-bottom">
                Export
              </VBtn> -->
              <VBtn @click="download_employees_report()" :loading="loading" variant="tonal" color="primary" class="mb-5" prepend-icon="bx-arrow-from-bottom">
      Export
    </VBtn>
              <!-- <VProgressLinear v-if="loading" indeterminate color="primary" class="mt-2" /> -->
            <VSpacer />

              <!-- Code For Filters -->
            <VRow>
              <VCol cols="12" md="4">
                <AppDateTimePicker v-model="dateRange"  label="Choose Date" :config="{ mode: 'range' }"
                />
              </VCol>

              <!-- 👉 Search  -->
              <VCol cols="12" md="4">
                <VTextField v-model="searchQuery" placeholder="Search Employee"  class="me-3" />
              </VCol>
              <VCol cols="12" md="4">
                <VTextField v-model="designationSerch" placeholder="Search By Designation"  class="" />
              </VCol>
            

              <!-- <VCol cols="12" md="4">
                <VSelect v-model="skill_id" chips multiple clearable label="Select Skill" :rules="[requiredValidator]" :items="skills"
                  item-value="id" item-text="title"  />
              </VCol>

              <VCol cols="12" md="4">
                <VAutocomplete v-model="selectedStates" :items="states" :menu-props="{ maxHeight: '400' }"
                  label="Select State" item-title="name" item-value="id" multiple chips  />
              </VCol>

              
              <VCol cols="12" md="4">
                <VAutocomplete v-model="location" :items="cities" :menu-props="{ maxHeight: '200' }" label="Select City"
                  item-title="name" item-value="name" chips multiple  />
              </VCol> -->

            </VRow>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap" height="27rem" fixed-header  :loading="loading">
            <!-- 👉 table head -->
            <thead>
              <tr>

                <th scope="col">
                  SR. NO.
                </th>
                <th scope="col">
                  Emp ID
                </th>
                <th scope="col">
                  EMP NAME
                </th>
                <th scope="col">
                  PHONE NUMBER
                </th>
                <th scope="col">
                  Father Name
                </th>
                <th scope="col">
                  Mother Name
                </th>
                <th scope="col">
                  Gender
                </th>
                <th scope="col">
                  Designation
                </th>
                <th scope="col">
                  Department
                </th>
                <th scope="col">
                  UAN
                </th>
                <th scope="col">
                  Pancard No
                </th>
                <th scope="col">
                  Bank branch
                </th>
                <th scope="col">
                  Bank division
                </th>
                <th scope="col">
                  Bank Name
                </th>
                <th scope="col">
                  Bank Acc No
                </th>
                <th scope="col">
                  Emp PF applicable
                </th>
                <th scope="col">
                  Emp PT applicable
                </th>
                <th scope="col">
                  Emp ESI applicable
                </th>
                <th scope="col">
                  Emp PF No
                </th>
                <th scope="col">
                  Emp ESI No
                </th>
                <th scope="col">
                  Emp type
                </th>
                <th scope="col">
                  IFSC code
                </th>
                <th scope="col">
                  Old EMP id
                </th>
                <th scope="col">
                  DOJ
                </th>
                <th scope="col">
                  Is job ended
                </th>
                <th scope="col">
                  End date
                </th>
                <th scope="col">
                  Emp Permanent Address
                </th>
                <th scope="col">
                  Emp Present Address
                </th>
                
                <!-- <th scope="col">
                  Skill
                </th>
                <th scope="col">
                  EMAIL
                </th> -->
                
                <!-- <th scope="col">
                  LOCATION
                </th> -->
                <th scope="col">
                  CREATED AT
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody >
              <tr v-for="(user, index) in users" :key="user.id">

                <!-- 👉 Checkbox -->
                <td>
                  <span class="text-capitalize text-base"> {{(current_page-1)*10 + index + 1 }}</span>
                </td>

                <td>
                  <span class="text-capitalize text-base"> {{ user.emp_id }}</span>
                </td>

                <!-- 👉 user Name -->
                <td class="text-capitalize text-high-emphasis">
                 
                  <RouterLink :to="{ name: 'apps-user-view-id', params: { id: user.id } }"><span
                      class="text-capitalize text-base">{{ user.emp_name }}</span></RouterLink>
                 
                </td>
                <td class="text-capitalize text-high-emphasis">
                  <span class="text-base">{{ user.phone_number }}</span>
                </td>

                <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.emp_father_name }}</span>
               </td>

               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.emp_mother_name }}</span>
               </td>

               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.sex }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.designation }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.emp_department }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.uan }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.pancard_number }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.emp_branch }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.emp_division }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.bank_name }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.bank_ac_no }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.emp_pf_applicable }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.emp_pt_applicable }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.emp_esi_applicable }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.emp_pf_no }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.emp_esi_number }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.emp_type }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.ifsc }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.old_empid }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.doj }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.is_job_ended }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.end_date }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.emp_permanent_address }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 <span class="text-base">{{ user.emp_present_address }}</span>
               </td>
                <!-- 👉 Actions -->
                <td class="text-center">
                  <!-- <MoreBtn :menu-list="computedMoreList(user.id)" item-props /> -->
                  <span class="text-center text-high-emphasis">{{ formatDate(user.created_at) }}</span>
                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!users.length" >
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
