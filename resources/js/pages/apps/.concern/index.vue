<script setup>
import { useConcern } from '@/views/apps/concern/useConcernStore';
import axios from 'axios';

const useConcernStore = useConcern()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const current_page = ref(1)
const totalconcerns = ref(0)
const concerns = ref([])
const errormessage = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage.value)
const isDialogVisible = ref(false)
const isDialogVisibleRemark = ref(false)
const selectedConcernId = ref(null);
const textareaValue = ref('');
let isLoading = ref(false)
const SelectedMessage = ref('');

const ConcernIdForUpdate = ref(null);
const textareaValueForUpdate = ref('');

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

// Method to open the add remark dialog
const openAddRemarkDialog = (concernId, message) => {
  SelectedMessage.value = message;
  selectedConcernId.value = concernId;
  textareaValue.value = '';
  isDialogVisible.value = true;
};

//method to show remark


const openRemarkDialog = (concernId, RemarkValue, message) => {
  SelectedMessage.value = message;
  ConcernIdForUpdate.value = concernId;
  textareaValueForUpdate.value = RemarkValue;
  isDialogVisibleRemark.value = true;
};




// 👉 Fetching Roles
const fetchConcern = (currentPage, rowPerPage) => {
  isLoading.value = true;
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
  };

  useConcernStore.fetchConcern(pageQueryParam, rowPerPage, params)
    .then(response => {
      concerns.value = response.data.concerns_data;
      current_page.value = response.data.pagination.current_page
      // console.log(concerns.value);
      totalPage.value = response.data.pagination.last_page;
      totalconcerns.value = response.data.pagination.total;
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
  fetchConcern(paginationRef.value, rowPerPage.value);
});

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})


const iscreateJobDrawerVisible = ref(false)

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



// Method to save the entered remark
const saveRemark = async () => {

  try {
    const response = await axios.post('/api/web/concern/add-remark', {
      concern_id: selectedConcernId.value,
      message: textareaValue.value,
    });
    if (response.data.status === 'success') {
      isDialogVisible.value = false; // Close the dialog
      // Refresh concerns or update specific concern's remark
      fetchConcern(paginationRef.value, rowPerPage.value);
    } else {
      // Handle error case
      errormessage.value = true;
    }
  } catch (error) {
    alert(error);
    // Handle error case
    errormessage.value = true;
  }
};

// Method to update the existing remark
const updateRemark = async () => {
  try {
    const response = await axios.post('/api/web/concern/update-remark', {
      concern_id: ConcernIdForUpdate.value, // Pass the concern_id to identify the concern
      message: textareaValueForUpdate.value, // Pass the updated remark
    });
    if (response.data.status === 'success') {
      isDialogVisibleRemark.value = false; // Close the dialog
      // Refresh concerns or update specific concern's remark
      fetchConcern(paginationRef.value, rowPerPage.value);
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

// Function to truncate message to 100 characters
const truncateMessage = (message) => {
  if (message.length > 30) {
    return message.substring(0, 30) + '...';
  } else {
    return message;
  }
};

const truncateRemark = (message) => {
  if (message.length > 30) {
    return message.substring(0, 30) + '...';
  } else {
    return message;
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
        <VCard title="All Concerns">



          <VDivider />

          <VCardText class="d-flex flex-wrap gap-4">
            <!-- 👉 Export button -->
            <!-- <VBtn variant="tonal" color="secondary" prepend-icon="bx-arrow-from-bottom">
                Export
              </VBtn> -->

            <VSpacer />


            <!-- Add Remark dialog box -->
            <VDialog v-model="isDialogVisible" max-width="600">


              <!-- Dialog Content -->
              <VCard title="Add Remark">
                <DialogCloseBtn variant="text" size="small" @click="isDialogVisible = false" />

                <VCardText>
                  <VRow>
                    <VCol cols="12">

                      <p class="font-weight-regular">
                        {{ SelectedMessage }}
                      </p>

                    </VCol>
                  </VRow>
                  <VRow>
                    <VCol cols="12">
                      <VTextarea v-model="textareaValue" clearable clear-icon="bx-x-circle" label="Remark Message" />
                    </VCol>
                  </VRow>
                </VCardText>


                <VCardText class="d-flex justify-end gap-2">
                  <VBtn color="secondary" variant="tonal" @click="isDialogVisible = false">
                    Close
                  </VBtn>
                  <VBtn @click="saveRemark">
                    Save
                  </VBtn>
                </VCardText>
              </VCard>
            </VDialog>

            <!-- show remark dialog box -->
            <VDialog v-model="isDialogVisibleRemark" max-width="600">


              <!-- Dialog Content -->
              <VCard title="Remark">
                <DialogCloseBtn variant="text" size="small" @click="isDialogVisibleRemark = false" />

                <VCardText>
                  <VRow>
                    <VCol cols="12">

                      <p class="font-weight-regular">
                        {{ SelectedMessage }}
                      </p>

                    </VCol>
                    <VCol cols="12">
                      <VTextarea v-model="textareaValueForUpdate" clearable clear-icon="bx-x-circle"
                        label="Remark Message" />
                      <input type="hidden" v-model="ConcernIdForUpdate">
                    </VCol>
                  </VRow>
                </VCardText>


                <VCardText class="d-flex justify-end gap-2">
                  <VBtn color="secondary" variant="tonal" @click="isDialogVisibleRemark = false">
                    Close
                  </VBtn>
                  <VBtn @click="updateRemark">
                    Update
                  </VBtn>

                </VCardText>
              </VCard>
            </VDialog>


            <div class="app-user-search-filter d-flex align-center">
              <!-- 👉 Search  -->
              <VTextField v-model="searchQuery" placeholder="Search By Name" density="compact" class="me-3" />

              <!-- 👉 Add user button -->
              <!-- <VBtn @click="iscreateJobDrawerVisible = true">
                Add Role
              </VBtn> -->
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap" height="27rem" fixed-header>
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col" style="width: 48px;">
                  SR. NO.
                </th>
                <th scope="col">
                  CASE ID
                </th>
                <th scope="col">
                  Emp ID
                </th>
                <th scope="col">
                  USER NAME
                </th>
                <th scope="col">
                  MESSAGE
                </th>
                <th scope="col">
                  CREATED DATE
                </th>
                <th scope="col">
                  ADMIN REMARK
                </th>
                <th scope="col">
                  STATUS
                </th>
                <th scope="col">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr v-for="(concern, index) in concerns" :key="concern.id">

                <!-- 👉 Index -->
                <td>
                  <span class="text-capitalize text-base"> {{ (current_page - 1) * 10 + index + 1 }}</span>
                </td>
                <!-- 👉 State -->
                <td>

                  <span class="text-capitalize text-base">#{{ concern.caseId }}</span>
                </td>

                <td>

                  <span class="text-capitalize text-base">{{ concern.emp_id ? concern.emp_id : `TEMP/${concern.user_id}` }}</span>
                </td>
                <td>

                  <span class="text-capitalize text-base">{{ concern.user_name }}</span>
                </td>
                <td>
                  <span class="text-capitalize text-base">{{ truncateMessage(concern.message) }}</span>
                </td>
                <td>
                  <span class="text-capitalize text-base">{{ formatDate(concern.created_at) }}</span>
                </td>
                <td>
                  <span class="text-capitalize text-base">{{ truncateRemark(concern.remark) }}</span>
                </td>
                <td>
                  <!-- <VChip :color="resolveUserStatusVariant(user.status)" density="compact" label class="text-uppercase"> --- </VChip> -->
                  <span class="text-center text-high-emphasis">{{ concern.status ? 'Closed' : 'Open' }}</span>
                </td>
                <!-- 👉 Actions -->
                <td class="text-center" style="width: 80px;">
                  <span v-if="concern.status === 0">
                    <VBtn color="primary" @click="openAddRemarkDialog(concern.id, concern.message)">
                      Add Remark
                    </VBtn>
                    <!-- Dialog Activator -->

                  </span>
                  <span v-else>
                    <v-icon @click="openRemarkDialog(concern.id, concern.remark, concern.message)" color="primary"
                      size="24">bx-show</v-icon>
                  </span>
                  <!-- <span>&nbsp;&nbsp;</span>
                   -->

                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!concerns.length">
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
            <div class="d-flex align-center" style="width: 171px;">
              <span class="text-no-wrap text-sm me-3">Rows per page:</span>
              <VSelect v-model="rowPerPage" density="compact" class="per-page-select" variant="plain"
                :items="[10, 20, 30, 50]" />
            </div>
            <!-- 👉 Total data in table-->
            <div class="d-flex align-center">
              <span class="text-sm text-no-wrap me-3">Total Data: {{ totalconcerns }}</span>
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
