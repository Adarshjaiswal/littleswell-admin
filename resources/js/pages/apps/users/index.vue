<script setup>
import Drawer from '@/pages/apps/users/userDrawer/userDrawer.vue'
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
let adharerrormsg = ref(false)
const errormessage = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage.value)
const resumeUrl = ref()
let isLoading = ref(false)
const iscreateJobDrawerVisible = ref(false)



const handleUserData = userData => {
  fetchUsers(paginationRef.value, rowPerPage.value)
    .then(() => {
      successmessage.value = true;
      iscreateJobDrawerVisible.value = false; // Close the drawer
    })
    .catch(() => {
      errormessage.value = true;
    });
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
// 👉 Fetching users
const fetchUsers = (currentPage, rowPerPage) => {
  isLoading.value = true;
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
    }).finally(() => isLoading.value = false);
}

watchEffect(() => {
  fetchUsers(paginationRef.value, rowPerPage.value);
});


// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})



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
const selectUnselectAll = () => {
  selectAllUser.value = !selectAllUser.value
  if (selectAllUser.value) {
    users.value.forEach(user => {
      if (!selectedRows.value.includes(`check${user.id}`))
        selectedRows.value.push(`check${user.id}`)
    })
  } else {
    selectedRows.value = []
  }
}

// 👉 watch if checkbox array is empty all select should be uncheck
watch(selectedRows, () => {
  if (!selectedRows.value.length)
    selectAllUser.value = false
}, { deep: true })

const addRemoveIndividualCheckbox = checkID => {
  if (selectedRows.value.includes(checkID)) {
    const index = selectedRows.value.indexOf(checkID)

    selectedRows.value.splice(index, 1)
  } else {
    selectedRows.value.push(checkID)
    selectAllUser.value = true
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
const openResumeUrl = (resume) => {
  // resumeUrl.value=resume;
  window.open(resume, '_blank');
};

/// Open Addhar url
const openAadharUrl = () => {
  // resumeUrl.value=resume;
  window.open('https://myaadhaar.uidai.gov.in/check-aadhaar-validity', '_blank');
};

/// Change aadhar ststus 

const ChangeAadharStatus = async (userId) => {
  if (confirm('Are you sure you want to Change the Aadhar Status?')) {
    try {
      const response = await userListStore.ChangeAadharStatus(userId);
      if (response.status === 200) {
        successmessage.value = true;
        fetchUsers(paginationRef.value, rowPerPage.value); // Fetch updated roles
      } else {
        adharerrormsg.value = true;
      }

    } catch (error) {
      adharerrormsg.value = true;

    }

  }
};
// Function to handle user data emitted from the Drawer component

</script>

<template>
  <section>
    <VRow>
      <!-- Success snackbar -->
      <VSnackbar v-if="adharerrormsg" v-model="adharerrormsg" location="top end" variant="flat" color="error">
        Please First Verify Your Adhar :(
      </VSnackbar>
      <VSnackbar v-model="errormessage" location="top end" variant="flat" color="error">
        Some Error Occured :(
      </VSnackbar>
      <!-- Error snackbar -->
      <VSnackbar v-model="successmessage" location="top end" variant="flat" color="success">
        Request Sucessful :)
      </VSnackbar>

      <VCol cols="12">
        <VCard title="All Users">
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
                next-icon="mdi-chevron-right" first-icon="mdi-chevron-double-left"
                last-icon="mdi-chevron-double-right" />


            </div>


          </VCardText>
          <!-- !SECTION -->
        </VCard>
      </VCol>
    </VRow>
    <!-- 👉 Add New User -->
    <Drawer v-model:isDrawerOpen="iscreateJobDrawerVisible" @userData="handleUserData" />
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
