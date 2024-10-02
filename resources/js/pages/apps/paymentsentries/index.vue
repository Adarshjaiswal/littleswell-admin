<script setup>
import Drawer from '@/pages/apps/users/userDrawer/userDrawer.vue';
import { useUserListStore } from '@/views/apps/user/useUserListStore';
import axios from 'axios';


const userListStore = useUserListStore()
const searchQuery = ref('')
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
const isDialogVisible = ref(false)
const isDialogVisibleRemark = ref(false)
const transaction_Id = ref('')
const selectedUserId = ref(null)



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


// modal 
const openAddRemarkDialog = (userId) => {
  selectedUserId.value = userId
  isDialogVisible.value = true
}

// Function to save the transaction with user ID and transaction ID
const saveTransaction = async () => {
  isDialogVisible.value = false;

  const user_id = selectedUserId.value;
  const transactionId = transaction_Id.value;
  try {
    const response = await axios.post('/api/web/user/add-payment', { user_id, transactionId });
    if (response.status === 200) {
      successmessage.value = true;

      console.log('Payment added successfully.');
    } else {
      errormessage.value = true;

      console.error('Error adding payment:', response.data);
    }
  } catch (error) {
    errormessage.value = true;

    console.error('Error adding payment:', error);
  }
};


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
        <VCard title="App Users">
          <VCardText class="d-flex flex-wrap gap-4">

            <!-- Add Transaction dialog box -->
            <!-- Add Transaction dialog box -->
            <VDialog v-model="isDialogVisible" max-width="600">
              <!-- Dialog Content -->
              <VCard title="Payment">
                <DialogCloseBtn variant="text" size="small" @click="isDialogVisible = false" />
                <VCardText>
                  <VRow>
                    <!-- Transaction ID input field -->
                    <VCol cols="12">
                      <VTextField v-model="transaction_Id" type="text" label="Merchant Transaction ID" />
                    </VCol>
                  </VRow>
                </VCardText>

                <VCardText class="d-flex justify-end gap-2">
                  <VBtn color="secondary" variant="tonal" @click="isDialogVisible = false">
                    Close
                  </VBtn>
                  <VBtn @click="saveTransaction(selectedUserId, transaction_Id)">
                    Check
                  </VBtn>
                </VCardText>
              </VCard>
            </VDialog>

          </VCardText>
          <VDivider />
          <VCardText class="d-flex flex-wrap gap-4">


            <VSpacer />

            <div class="app-user-search-filter d-flex align-center">
              <!-- 👉 Search  -->
              <VTextField v-model="searchQuery" placeholder="Search User" density="compact" class="me-3" />

            
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap" height="27rem" fixed-header>
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col">
                  ACTION
                </th>

                <th scope="col">
                  SR. NO.
                </th>
                <th scope="col">
                  User ID
                </th>
                <th scope="col">
                  NAME
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
                <!-- <th scope="col">
                  LOCATION
                </th> -->
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
                <td class="text-center" style="inline-size: 80px;">
                  <VBtn color="primary" @click="openAddRemarkDialog(user.id)">Add Payment</VBtn> &nbsp;&nbsp;


                </td>

                <!-- 👉 Checkbox -->
                <td>
                  <span class="text-capitalize text-base"> {{ (current_page - 1) * 10 + index + 1 }}</span>
                </td>
                <td>
                  <span class="text-capitalize text-base"> {{ user.emp_id == null ? `TEMP/${user.id}` : user.emp_id
                    }}</span>
                </td>
                <!-- 👉 user Name -->
                <td class="text-capitalize text-high-emphasis">
                  <RouterLink :to="{ name: 'apps-user-view-id', params: { id: user.id } }"><span
                      class="text-capitalize text-base">{{ user.name }}</span></RouterLink>
                </td>

                <!-- 👉 CREATED DATE -->
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
                <!-- 👉 Material Stusts -->
                <td>
                  <VChip :color="resolveUserStatusVariant(user.is_phone_verified)" density="compact" label
                    class="text-uppercase"> {{ user.is_phone_verified ? 'Verified' : 'Not Verified' }} </VChip>
                </td>
                <td>
                  <VChip :color="resolveUserPaymentStatusVariant(user.payment_status)" density="compact" label
                    class="text-uppercase"> {{ user.payment_status ? 'Successfull' : 'Pending' }} </VChip>
                </td>
                <!-- 👉 ADADHAR VERIFICATION -->
                <td>
                  <VChip :color="resolveUserAadharStatusVariant(user.is_verified)" density="compact" label
                    class="text-uppercase"> {{ user.is_verified ? 'Verified' : 'Not Verified' }} </VChip>
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
