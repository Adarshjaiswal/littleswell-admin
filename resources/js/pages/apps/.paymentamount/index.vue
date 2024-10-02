<script setup>

import { createAmount } from '@/views/apps/amount/useAmountStore';

const CreateAmount = createAmount()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalAmounts = ref(0)
const amounts = ref([])
const errormessage = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage.value)
const dialog = ref(false)
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

// 👉 Fetching amount
const fetchAmount = (currentPage, rowPerPage) => {
  isLoading.value = true;
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
  };

  CreateAmount.fetchAmount(pageQueryParam, rowPerPage, params)
    .then(response => {
      amounts.value = response.data.amount_data.data;
      totalPage.value = response.data.amount_data.last_page;
      totalAmounts.value = response.data.amount_data.total;
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
  fetchAmount(paginationRef.value, rowPerPage.value);
});

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})


// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = amounts.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = amounts.value.length + (currentPage.value - 1) * rowPerPage.value

  return `${firstIndex}-${lastIndex} of ${totalAmounts.value}`
})

const computedMoreList = computed(() => {
  return paramId => [
    {
      title: 'Edit',
      value: 'edit',
      prependIcon: 'bx-pencil',
      to: {
        name: 'apps-user-view-id',
        params: { id: paramId },
      },
    },
    
    {
      title: 'Delete',
      value: 'delete',
      prependIcon: 'bx-trash-alt',
    },
  ]
})

const selectedAmountData = ref({
  amount: '',
  id:''
});

const openEditDialog = (amount) => {
  selectedAmountData.value = { ...amount };
  dialog.value = true;
};

const onSubmit = async () => {
  try {
    const response = await CreateAmount.updateAmount(selectedAmountData.value);
    if (response.status === 200) {
      successmessage.value = true;
      dialog.value = false; // Close the dialog
      fetchAmount(paginationRef.value, rowPerPage.value); // Fetch updated roles
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
      <!-- edit tab -->
      <v-dialog v-model="dialog" width="auto">
  <v-card>
    <v-card-title class="text-h6 text-md-h6 text-lg-h6">Edit Amount</v-card-title>
    <VCardText>
      <!-- 👉 Form -->
      <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">

        <VRow>
          <!-- 👉 Role -->
          <VCol cols="12">
            <VTextField v-model="selectedAmountData.amount" :rules="[requiredValidator]" label="Amount (In Paise)" />
          </VCol>
          <input type="hidden" v-model="selectedAmountData.id" />
          <!-- 👉 Submit and Cancel -->
          <VCol cols="12">
            <VBtn type="submit" @click="updateAmount" class="me-3">
              Update
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
        Some Error Occured :(
      </VSnackbar>
      <!-- Error snackbar -->
      <VSnackbar v-model="successmessage" location="top end" variant="flat" color="success">
        Request Sucessful :)
      </VSnackbar>
      <VCol cols="12">
        <VCard title="Payment Amount">
          <VDivider />
          <VCardText class="d-flex flex-wrap gap-4">
            <VSpacer />
            <div class="app-user-search-filter d-flex align-center">
              <!-- 👉 Search  -->
              <VTextField v-model="searchQuery" placeholder="Search Amount" density="compact" class="me-3" />
            </div>
          </VCardText>
          <VDivider />
          <VTable class="text-no-wrap"  height="27rem" fixed-header>
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col" style="inline-size: 48px;">
                  SR. NO.
                </th>
                <th scope="col">
                  AMOUNT (IN PAISE)
                </th>
                <th scope="col">
                  AMOUNT (IN RUPEES)
                </th>
                <th scope="col">
                  CREATED DATE
                </th>
                <th scope="col">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr v-for="(amount, index) in amounts" :key="amount.id">

                <!-- 👉 Index -->
                <td>
                  <span class="text-capitalize text-base"> {{ index + 1 }}</span>
                </td>
                <!-- 👉 Amount -->
                <td>
                  <span class="text-capitalize text-base">{{ (amount.amount).toLocaleString('en-IN', { style: 'currency', currency: 'INR' }) }}</span>
                </td>
<!-- 👉 Amount IN RUPEEE -->
                <td class="text-capitalize text-high-emphasis">
                  <span class="text-base">{{ amount.amount ? (amount.amount / 100).toLocaleString('en-IN', { style: 'currency', currency: 'INR' }) : '--' }}</span>

                </td>
                <!-- 👉 CREATED DATE -->
                <td class="text-capitalize text-high-emphasis">
                  <span class="text-base">{{ formatDate(amount.created_at) }}</span>
                </td>
                <!-- 👉 Actions -->
                <td class="text-center" style="inline-size: 80px;">
                 <v-icon  color="primary"  @click="openEditDialog(amount)" size="24">bx-edit</v-icon>
                </td>
              </tr>
            </tbody>
            <!-- 👉 table footer  -->
            <tfoot v-show="!amounts.length">
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
              <span class="text-sm text-no-wrap me-3">Total Data: {{ totalAmounts }}</span>
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
}
</style>
