<script setup>
import { useUserListStore } from '@/views/apps/user/useUserListStore'
import axios from 'axios'

const userListStore = useUserListStore()
const searchQuery = ref('')
// const selectedRole = ref()
// const selectedPlan = ref()
// const selectedStatus = ref()
const rowPerPage = ref(15)
const currentPage = ref(1)
const current_page = ref(1)
const totalPage = ref(1)
const totalUsers = ref(0)
const users = ref([])
const dialog = ref(false)
const errormessage = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage.value)

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

// giving editing access to admin and accountant
const loginUser = JSON.parse(localStorage.getItem('userData') || '{}')
const userRole = loginUser.role || null

// Reaload page first time
const reloadKey = 'pageReloaded'
const isPageReloaded = localStorage.getItem(reloadKey)

if (!isPageReloaded) {
  localStorage.setItem(reloadKey, 'true')
  location.reload()
}

onMounted(() => {
  fetchDynamicValues();
});
const fetchDynamicValues = async () => {
  try {
    const response = await axios.get('/api/web/dashboard_details');
    const data = response.data;
    // console.log(data);
    //alert(response);

    // Extract the dynamic values from the API response
    const deactive = data.deactive;
    const listedChild = data.listedChild;
    const listedVac = data.listedVac;
    const allUser = data.allUser;

    // Update the userListMeta array with the new values
    userListMeta[0].stats = allUser.toString();
    userListMeta[1].stats = listedVac.toString();
    userListMeta[2].stats = listedChild.toString();
    userListMeta[3].stats = deactive.toString();
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error('Error fetching dynamic values:', error);
  }
};

// 👉 Fetching users
const fetchUsers = (currentPage, rowPerPage) => {
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
  };

  userListStore.fetchUsers(pageQueryParam, rowPerPage, params)
    .then(response => {
      users.value = response.data.users_data.data;
      current_page.value = response.data.users_data.current_page
      totalPage.value = response.data.users_data.last_page;
      totalUsers.value = response.data.users_data.total;
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
  fetchUsers(paginationRef.value, rowPerPage.value);
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

const plans = [
  {
    title: 'Basic',
    value: 'basic',
  },
  {
    title: 'Company',
    value: 'company',
  },
  {
    title: 'Enterprise',
    value: 'enterprise',
  },
  {
    title: 'Team',
    value: 'team',
  },
]

const status = [
  {
    title: 'Pending',
    value: 'pending',
  },
  {
    title: 'Active',
    value: 'active',
  },
  {
    title: 'Inactive',
    value: 'inactive',
  },
]

const resolveUserPaymentStatusVariant = stat => {
  //const statLowerCase = stat.toLowerCase()
  if (stat === 0)
    return 'warning'
  if (stat === 1)
    return 'success'
  return 'primary'
}

const openResumeUrl = (resume) => {
  window.open(resume, '_blank');
};

const resolveUserRoleVariant = role => {
  const roleLowerCase = role.toLowerCase()
  if (roleLowerCase === 'subscriber')
    return {
      color: 'primary',
      icon: 'bx-user',
    }
  if (roleLowerCase === 'author')
    return {
      color: 'warning',
      icon: 'bx-cog',
    }
  if (roleLowerCase === 'maintainer')
    return {
      color: 'success',
      icon: 'bx-doughnut-chart',
    }
  if (roleLowerCase === 'editor')
    return {
      color: 'info',
      icon: 'bx-pencil',
    }
  if (roleLowerCase === 'admin')
    return {
      color: 'error',
      icon: 'bx-laptop',
    }

  return {
    color: 'primary',
    icon: 'bx-user',
  }
}

const resolveUserStatusVariant = stat => {
  //const statLowerCase = stat.toLowerCase()
  if (stat === 0)
    return 'error'
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

// // 👉 add/remove all checkbox ids in array
// const selectUnselectAll = () => {
//   selectAllUser.value = !selectAllUser.value
//   if (selectAllUser.value) {
//     users.value.forEach(user => {
//       if (!selectedRows.value.includes(`check${user.id}`))
//         selectedRows.value.push(`check${user.id}`)
//     })
//   } else {
//     selectedRows.value = []
//   }
// }

// 👉 watch if checkbox array is empty all select should be uncheck
watch(selectedRows, () => {
  if (!selectedRows.value.length)
    selectAllUser.value = false
}, { deep: true })

// const addRemoveIndividualCheckbox = checkID => {
//   if (selectedRows.value.includes(checkID)) {
//     const index = selectedRows.value.indexOf(checkID)

//     selectedRows.value.splice(index, 1)
//   } else {
//     selectedRows.value.push(checkID)
//     selectAllUser.value = true
//   }
// }

// const addNewUser = userData => {
//   userListStore.addUser(userData)

//   // refetch User
//   fetchUsers()
// }

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

// ===============
let err_message = ""
const userEditableDataByAdmin = ref({})
const openEditDialogByAdmin = (user) => {
  userEditableDataByAdmin.value = {
    id: user.id,
    name: user.name,
    phone_number: user.phone_number,
  }
  dialog.value = true
}

const updateUserByAdmin = () => {
  let response = axios.patch(`/api/web/user/update/${userEditableDataByAdmin.value.id}`, userEditableDataByAdmin.value)
    .then(response => {
      let res = response.user
      if (response.status === 200) {
        successmessage.value = true;
        dialog.value = false; // Close the dialog
        fetchUsers(paginationRef.value, rowPerPage.value);
      } else {
        // console.log(response);
        errormessage.value = true;
      }
    })
    .catch(error => {
      errormessage.value = true;
    });

}

// ===============


const userListMeta = [
  {
    icon: 'bx-objects-vertical-bottom',
    color: 'primary',
    title: 'Total Users',
    stats: 'Loading...',


  },
  {
    icon: 'bx-doughnut-chart',
    color: 'error',
    title: 'Total Vaccines',
    stats: 'Loading...',


  },
  {
    icon: 'bx-color',
    color: 'success',
    title: 'Total Children',
    stats: 'Loading...',


  },
  {
    icon: 'bx-user-circle',
    color: 'warning',
    title: 'Deactivation',
    stats: 'Loading...',

  },
]
</script>

<template>
  <section>
    <VRow>
      <!-- Dialogue box for Edit user data by admin -->
      <v-dialog v-model="dialog" width="auto">
        <v-card>
          <VCardText>
            <!-- �??? Form -->
            <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">

              <VRow>
                <!-- �??? Role -->
                <VCol cols="12">
                  <VTextField v-model="userEditableDataByAdmin.name" :rules="[requiredValidator]" label="User Name" />
                </VCol>

                <!-- �??? Description -->
                <VCol cols="12">
                  <VTextField v-model="userEditableDataByAdmin.phone_number" :rules="[requiredValidator]"
                    label="User Phone" />
                </VCol>
                <input type="hidden" v-model="userEditableDataByAdmin.id" />
                <!-- �??? Submit and Cancel -->
                <VCol cols="12">
                  <VBtn type="submit" @click="updateUserByAdmin" class="me-3">
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



      <!-- Success snackbar -->
      <VSnackbar v-model="errormessage" location="top end" variant="flat" color="error">
        Phone Number Already Exists :(
      </VSnackbar>
      <!-- Error snackbar -->
      <VSnackbar v-model="successmessage" location="top end" variant="flat" color="success">
        Request Sucessful :)
      </VSnackbar>

      <VCol v-for="meta in userListMeta" :key="meta.title" cols="12" sm="6" lg="3">
        <VCard>
          <VCardText class="d-flex justify-space-between">
            <div>
              <span>{{ meta.title }}</span>
              <div class="d-flex align-center gap-2">
                <h6 class="text-h6">
                  {{ meta.stats }}
                </h6>

              </div>

            </div>

            <VAvatar rounded variant="tonal" :color="meta.color" :icon="meta.icon" />
          </VCardText>
        </VCard>
      </VCol>



      <VCol cols="12">
        <VCard title="App Users">
          <VCardText>
            <VRow>
              <!-- 👉 Existing User -->

              <!-- <VCol cols="12" sm="3">
                <VSelect v-model="selectedRole" label="Existing User" :items="roles" clearable clear-icon="bx-x" />
              </VCol> -->
              <!-- 👉 New User -->
              <!-- <VCol cols="12" sm="3">
                <VSelect v-model="selectedPlan" label="New User" :items="plans" clearable clear-icon="bx-x" />
              </VCol> -->
              <!-- 👉 Onboard User -->
              <!-- <VCol cols="12" sm="3">
                <VSelect v-model="selectedStatus" label="Onboard User" :items="status" clearable clear-icon="bx-x" />
              </VCol> -->
              <!-- 👉 All User -->
              <!-- <VCol cols="12" sm="3">
                <VSelect v-model="selectedStatus" label="All User" :items="status" clearable clear-icon="bx-x" />
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
              <VTextField v-model="searchQuery" placeholder="Search User" density="compact" class="me-3" />

              <!-- 👉 Add user button -->
              <!-- <VBtn @click="iscreateJobDrawerVisible = true">
                Add User
              </VBtn> -->
            </div>
          </VCardText>

          <VDivider />









          <div>
            <VTable class="text-no-wrap" height="23.7rem" fixed-header>
              <!-- 👉 table head -->
              <thead>
                <tr>
                  <th scope="col">
                    SR. NO.
                  </th>

                  <th scope="col">
                    NAME
                  </th>
                  <th scope="col">
                    DOB
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
                    CREATED AT
                  </th>




                </tr>
              </thead>

              <!-- 👉 table body -->
              <tbody>
                <tr v-for="(user, index) in users" :key="user.id">

                  <!-- 👉 Checkbox -->
                  <td>
                    <span class="text-capitalize text-base"> {{ (current_page - 1) * 10 + index + 1 }}</span>
                  </td>



                  <!-- 👉 user Name -->
                  <td class="text-capitalize text-high-emphasis">

                    <RouterLink :to="{ name: 'apps-user-view-id', params: { id: user.id } }">
                      <span class="text-capitalize text-base">{{ user.name }}</span>
                    </RouterLink>

                  </td>

                  <!-- 👉 CREATED DATE -->
                  <td class="text-capitalize text-high-emphasis">

                    <span class="text-base">{{ user.dob }}</span>
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


                  <!-- 👉 Actions -->
                  <td class="text-center">

                    <span class="text-center text-high-emphasis">{{ formatDate(user.created_at) }}</span>
                  </td>



                </tr>
              </tbody>

              <!-- 👉 table footer  -->
              <tfoot v-show="!users.length">
                <tr>
                  <td colspan="7" class="text-center text-body-1">
                    No data available
                  </td>
                </tr>
              </tfoot>
            </VTable>
          </div>
          <VDivider />

          <!-- SECTION Pagination -->
          <VCardText class="d-flex flex-wrap justify-end gap-4 pa-2">
            <!-- 👉 Rows per page -->
            <div class="d-flex align-center" style="inline-size: 171px;">
              <span class="text-no-wrap text-sm me-3">Rows per page:</span>
              <VSelect v-model="rowPerPage" density="compact" class="per-page-select" variant="plain"
                :items="[15, 20, 30, 50]" />
            </div>
            <!-- 👉 Total data in table-->
            <div class="d-flex align-center">
              <span class="text-sm text-no-wrap me-3">Total Data: {{ totalUsers }}</span>
            </div>

            <!-- 👉 Pagination and pagination meta -->
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

  </section>
</template>

<style>
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
