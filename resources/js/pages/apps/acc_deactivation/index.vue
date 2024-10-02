<script setup>
import { useAcc } from '@/views/apps/acc_deactivation/useAccStore';

const useAccStore = useAcc()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalreq = ref(0)
const requests = ref([])
const errormessage = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage.value)
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
// 👉 Fetching Roles
const fetchRequests = (currentPage, rowPerPage) => {
  isLoading.value = true;
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
  };

  
  useAccStore.fetchRequests(pageQueryParam, rowPerPage, params)
    .then(response => {
      requests.value = response.data.requests_data.data;
      totalPage.value = response.data.requests_data.last_page;
      totalreq.value = response.data.requests_data.total;
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
  fetchRequests(paginationRef.value, rowPerPage.value);
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
// Function to toggle a State status
const toggleStatus = async (reqId) => {
  // alert(roleId)
  if (confirm('Are you sure you want to Change the status ?')) {
    try {
      const response = await useAccStore.toggleStatus(reqId);
      if (response.status === 200) {
        successmessage.value = true;
        fetchRequests(paginationRef.value, rowPerPage.value); // Fetch updated roles
      } else {
        errormessage.value = true;
      }
    } catch (error) {
      errormessage.value = true;
    }
  }
};
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
        <VCard title="All Account Deactivation Requests">
          <VDivider />
          <VCardText class="d-flex flex-wrap gap-4">
            <VSpacer />
            <div class="app-user-search-filter d-flex align-center">
              <!-- 👉 Search  -->
              <VTextField v-model="searchQuery" placeholder="Search For user " density="compact" class="me-3" />
              <!-- 👉 Add user button -->
              <!-- <VBtn @click="iscreateJobDrawerVisible = true">
                Add Role
              </VBtn> -->
            </div>
          </VCardText>
          <VDivider />
          <VTable class="text-no-wrap"  height="27rem" fixed-header>
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col" style="width: 48px;">
                  SR. NO.
                </th>
                <th scope="col">
                  EMP ID
                </th>
                <th scope="col">
                  USER NAME
                </th>
                <th scope="col">
                  CURRENT STATUS
                </th>
                <th scope="col">
                  REQUEST DATE TIME
                </th>
                <th scope="col">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <!-- 👉 table body -->
            <tbody>
              <tr v-for="(req, index) in requests" :key="req.id">
                <!-- 👉 Index -->
                <td>
                  <span class="text-capitalize text-base"> {{ index + 1 }}</span>
                </td>
                <td>
                  <span class="text-capitalize text-base">{{ req.emp_id ? req.emp_id : `TEMP/${req.user_id}` }}</span>
                </td>
                <!-- 👉 State -->
                <td>
                  <span class="text-capitalize text-base">{{ req.user_name }}</span>
                </td>
                <td>
                  <span class="text-capitalize text-base">{{ req.status ? 'Deactive' : 'Active' }}</span>
                </td>
                <td>
                  <span class="text-capitalize text-base">{{ formatDate(req.created_at) }}</span>
                </td>
                <!-- 👉 Actions -->
                <td class="text-center" style="width: 80px;">
                  <!-- <VBtn icon="bx-trash"  color="error" small>
              </VBtn> -->
                  <!-- <v-icon @click="deleteState(state.id)" color="error" size="24">bx-trash</v-icon> -->
                  <span>&nbsp;&nbsp;</span>
                  <v-btn variant="outlined" @click="toggleStatus(req.id)" color="primary" prepend-icon="bx-recycle">
                    change status
                  </v-btn>
                </td>
              </tr>
            </tbody>
            <!-- 👉 table footer  -->
            <tfoot v-show="!requests.length">
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
          <VDivider /> <!-- SECTION Pagination -->
          <VCardText class="d-flex flex-wrap justify-end gap-4 pa-2">
            <!-- 👉 Rows per page -->
            <div class="d-flex align-center" style="width: 171px;">
              <span class="text-no-wrap text-sm me-3">Rows per page:</span>
              <VSelect v-model="rowPerPage" density="compact" class="per-page-select" variant="plain"
                :items="[10, 20, 30, 50]" />
            </div>
            <!-- 👉 Total data in table-->
            <div class="d-flex align-center">
              <span class="text-sm text-no-wrap me-3">Total Data: {{ totalreq }}</span>
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
}</style>
