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
const totalUsers = ref(0)
const users = ref([])

// 👉 Fetching users
const fetchUsers = () => {
  userListStore.fetchUsers({
    q: searchQuery.value,
    status: selectedStatus.value,
    plan: selectedPlan.value,
    role: selectedRole.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
  }).then(response => {
    users.value = response.data.users
    totalPage.value = response.data.totalPage
    totalUsers.value = response.data.totalUsers
  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchUsers)

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
  const statLowerCase = stat.toLowerCase()
  if (statLowerCase === 'pending')
    return 'warning'
  if (statLowerCase === 'active')
    return 'success'
  if (statLowerCase === 'inactive')
    return 'secondary'

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

const addNewUser = userData => {
  userListStore.addUser(userData)

  // refetch User
  fetchUsers()
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


</script>

<template>
  <section>
    <VRow>

      <VCol cols="12">
        <VCard title="Search Filters">
          <VCardText>
            <VRow>
              <!-- 👉 Existing User -->

              <VCol cols="12" sm="3">
                <VSelect v-model="selectedRole" label="Existing User" :items="roles" clearable clear-icon="bx-x" />
              </VCol>
              <!-- 👉 New User -->
              <VCol cols="12" sm="3">
                <VSelect v-model="selectedPlan" label="New User" :items="plans" clearable clear-icon="bx-x" />
              </VCol>
              <!-- 👉 Onboard User -->
              <VCol cols="12" sm="3">
                <VSelect v-model="selectedStatus" label="Onboard User" :items="status" clearable clear-icon="bx-x" />
              </VCol>
              <!-- 👉 All User -->
              <VCol cols="12" sm="3">
                <VSelect v-model="selectedStatus" label="All User" :items="status" clearable clear-icon="bx-x" />
              </VCol>
            </VRow>
          </VCardText>

          <VDivider />

          <VCardText class="d-flex flex-wrap gap-4">
            <!-- 👉 Export button -->
            <VBtn variant="tonal" color="secondary" prepend-icon="bx-arrow-from-bottom">
              Export
            </VBtn>

            <VSpacer />

            <div class="app-user-search-filter d-flex align-center">
              <!-- 👉 Search  -->
              <VTextField v-model="searchQuery" placeholder="Search User" density="compact" class="me-3" />

              <!-- 👉 Add user button -->
              <VBtn @click="iscreateJobDrawerVisible = true">
                Add User
              </VBtn>
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap"  height="27rem" fixed-header>
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col" style="width: 48px;">
                  <VCheckbox :model-value="selectAllUser"
                    :indeterminate="(users.length !== selectedRows.length) && !!selectedRows.length" class="mx-1"
                    @click="selectUnselectAll" />
                </th>
                <th scope="col">
                  Id number
                </th>
                <th scope="col">
                  Employee Name
                </th>
                <th scope="col">
                  Father Name
                </th>
                <th scope="col">
                  Mother Name
                </th>
                <th scope="col">
                  Date of Birth
                </th>
                <th scope="col">
                  sex
                </th>
                <th scope="col">
                  Material Status
                </th>
                <th scope="col">
                  Designation
                </th>
                <th scope="col">
                  Mobile Number
                </th>
                <th scope="col">
                  UAN Number
                </th>
                <th scope="col">
                  Adhaar No.
                </th>
                <th scope="col">
                  PAN
                </th>
                <th scope="col">
                  Present Address
                </th>
                <th scope="col">
                  Department
                </th>
                <th scope="col">
                  Client Id
                </th>
                <th scope="col">
                  Branch
                </th>
                <th scope="col">
                  Division
                </th>
                <th scope="col">
                  Bank Acc No.
                </th>
                <th scope="col">
                  IFSC
                </th>
                <th scope="col">
                  Bank Name
                </th>
                <th scope="col">
                  Joining Date
                </th>
                <th scope="col">
                  Date of Leaving
                </th>
                <th scope="col">
                  ESI Applicable
                </th>
                <th scope="col">
                  ESI Number
                </th>
                <th scope="col">
                  PF Applicalbe
                </th>
                <th scope="col">
                  PF Number
                </th>
                <th scope="col">
                  PT Applicalbe
                </th>
                <th scope="col">
                  Employee Type
                </th>
                <th scope="col">
                  Old Employee I
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <!-- 👉 Checkbox -->
                <td>
                  <VCheckbox :id="`check${user.id}`" :model-value="selectedRows.includes(`check${user.id}`)" class="mx-1"
                    @click="addRemoveIndividualCheckbox(`check${user.id}`)" />
                </td>

              <!-- User ID --> 
                <td>
                  <div class="d-flex align-center">
           
                    <div class="d-flex flex-column">
                      <h6 class="text-sm">
                        <RouterLink :to="{ name: 'apps-user-view-id', params: { id: user.id } }"
                          class="font-weight-medium user-list-name">
                          {{ user.fullName }}
                        </RouterLink>
                      </h6>
                  
                    </div>

                  </div>
                </td>

                <!-- 👉 user Name -->
                <td>
                  <span class="text-capitalize text-base">User name</span>
                  <!-- <span class="text-capitalize text-base">{{ user.role }}</span> -->
                </td>

                <!-- 👉 CREATED DATE -->
                <td class="text-capitalize text-high-emphasis">
                  <!-- <span class="text-base">{{ user.currentPlan }}</span> -->
                  <span class="text-base">F Name</span>
                </td>

                <!-- 👉 CREATED DATE -->
                <td class="text-capitalize text-high-emphasis">
                  <!-- <span class="text-base">{{ user.currentPlan }}</span> -->
                  <span class="text-base">M Name</span>
                </td>

                <!-- 👉 CREATED DATE -->
                <td class="text-capitalize text-high-emphasis">
                  <!-- <span class="text-base">{{ user.currentPlan }}</span> -->
                  <span class="text-base">27-11-2050</span>
                </td>

                <!-- 👉 Sex -->
                <td>
                  <span class="text-base text-high-emphasis">M/F</span>
                </td>

                <!-- 👉 Material Stusts -->
                <td>
                  <!-- <VChip :color="resolveUserStatusVariant(user.status)" density="compact" label class="text-uppercase"> --- </VChip> -->
                  <span class="text-center text-high-emphasis">-</span>
                </td>
                <!-- 👉 Actions -->
                <td class="text-center">
                  <!-- <MoreBtn :menu-list="computedMoreList(user.id)" item-props /> -->
                  Admin
                </td>

                <!-- 👉Mobile Number -->
                <td class="text-center">
                  1234567890
                </td>

                <!-- 👉UAN number -->
                <td class="text-center">
                  333-333-333
                </td>

                <!-- 👉 Adhaar card No. -->
                <td class="text-center">
                  1111-2222-3333
                </td>

                <!-- 👉 Pan -->
                <td class="text-center">
                  BFKPV11220R
                </td>

                <!-- 👉 Present Address -->
                <td class="text-center">
                  DB12 12 gomti nagar lucknow
                </td>

                <!-- 👉 Department -->
                <td class="text-center">
                  Electrition
                </td>

                <!-- 👉 Department -->
                <td class="text-center">
                  Electrition
                </td>

                <!-- 👉  -->
                <td class="text-center">
                  lorem
                </td>

                <!-- 👉  -->
                <td class="text-center">
                  lorem
                </td>

                <!-- 👉  -->
                <td class="text-center">
                  lorem
                </td>

                <!-- 👉  -->
                <td class="text-center">
                  lorem
                </td>

                <!-- 👉 bank name  -->
                <td class="text-center">
                  HDFC
                </td>

                <!-- 👉 Joining Date  -->
                <td class="text-center">
                  12-1-23
                </td>

                <!-- 👉 leaving date  -->
                <td class="text-center">
                  12-2-23
                </td>

                <!-- 👉  Esi applicable  -->
                <td class="text-center">
                  yes
                </td>

                <!-- 👉   -->
                <td class="text-center">
                  00000000
                </td>

                <!-- 👉  PF abblicable  -->
                <td class="text-center">
                  Yes
                </td>

                <!-- 👉   -->
                <td class="text-center">
                  1111111
                </td>

                <!-- 👉 PT Applicable  -->
                <td class="text-center">
                  Yes
                </td>

                <!-- 👉 Employee Type  -->
                <td class="text-center">
                  Regural
                </td>

                <!-- 👉 PT Applicable  -->
                <td class="text-center">
                  Regural
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
            <div class="d-flex align-center" style="width: 171px;">
              <span class="text-no-wrap text-sm me-3">Rows per page:</span>
              <VSelect v-model="rowPerPage" density="compact" class="per-page-select" variant="plain"
                :items="[10, 20, 30, 50]" />
            </div>

            <!-- 👉 Pagination and pagination meta -->
            <div class="d-flex align-center">
              <h6 class="text-sm font-weight-regular">
                {{ paginationData }}
              </h6>
            </div>
            <VPagination v-model="currentPage" size="small" :total-visible="1" :length="totalPage"
              @next="selectedRows = []" @prev="selectedRows = []" />
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
