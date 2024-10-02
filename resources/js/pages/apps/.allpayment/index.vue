<script setup>
import { payments } from "@/views/apps/payments/usePaymentStore";
import axios from "axios";
import { watchEffect } from "vue";
const paymentsRequest = payments();
const searchQuery = ref("");
const rowPerPage = ref(10);
const currentPage = ref(1);
const totalPage = ref(1);
const current_page = ref(1);
const totalrequests = ref(0);
const paymentsData = ref([]);
const errormessage = ref(false);
const successmessage = ref(false);
const paginationRef = ref(currentPage.value);
const ConfirmationDialogVisible = ref(false);
const paymentStatusResponse = ref({});
const successPayment = ref(false);
const payment_id = ref("");
let isLoading = ref(false);

// Format date function
const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return new Date(dateString).toLocaleString("en-US", options);
};

// 👉 Fetching Roles
const fetchPaymentsRequest = (currentPage, rowPerPage) => {
  isLoading.value = true;
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
  };

  paymentsRequest
    .fetchPaymentsRequest(pageQueryParam, rowPerPage, params)
    .then((response) => {
      paymentsData.value = response.data.request_data.data;
      current_page.value = response.data.request_data.current_page;
      totalPage.value = response.data.request_data.last_page;
      totalrequests.value = response.data.request_data.total;
      if (response.status === 200) {
        successmessage.value = true;
      } else {
        errormessage.value = true;
      }
    })
    .catch((error) => {
      errormessage.value = true;
    })
    .finally(() => (isLoading.value = false));
};

watchEffect(() => {
  fetchPaymentsRequest(paginationRef.value, rowPerPage.value);
});

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = roles.value.length
    ? (currentPage.value - 1) * rowPerPage.value + 1
    : 0;
  const lastIndex =
    roles.value.length + (currentPage.value - 1) * rowPerPage.value;

  return `${firstIndex}-${lastIndex} of ${totalroles.value}`;
});

// Function to handle the "Agree" button click in the confirmation dialog
const handleAgreeClick = () => {
  ConfirmationDialogVisible.value = false; // Close the confirmation dialog
};

const checkPaymentStatus = (user_id, transactionId) => {
  const response = axios
    .post(`/api/web/payment/payment-status/`, { user_id, transactionId })
    .then((response) => {
      paymentStatusResponse.value = response.data.payment_status;
      successPayment.value =
        response.data.payment_status.code == "PAYMENT_SUCCESS" ? true : false;
      ConfirmationDialogVisible.value = true;
    })
    .catch((error) => console.log(error));
  // console.log("", paymentStatusResponse.value.code, successPayment.value);
};
</script>

<template>
  <section>
    <VRow>
      <!-- check payment status popup -->
      <VDialog v-model="ConfirmationDialogVisible" persistent class="v-dialog-sm" >
        <!-- Dialog Content -->
        <VCard title="">
          <VCardText v-if="successPayment" class="text-center">
            <h1 class="text-success">{{ paymentStatusResponse.code }}</h1>
          </VCardText>

          <VCardText v-else class="text-center">
            <h2 class="text-error">{{ paymentStatusResponse.code }}</h2>
          </VCardText>

          <VCardText class="d-flex justify-center gap-2">
            <VBtn :color="successPayment ? 'success' : 'error'" @click="handleAgreeClick" >
              Ok
            </VBtn>
          </VCardText>
        </VCard>
      </VDialog>

      <!-- Success snackbar -->
      <VSnackbar
        v-model="errormessage"
        location="top end"
        variant="flat"
        color="error"
      >
        Some Error Occured :(
      </VSnackbar>
      <!-- Error snackbar -->
      <VSnackbar
        v-model="successmessage"
        location="top end"
        variant="flat"
        color="success"
      >
        Request Sucessful :)
      </VSnackbar>

      <VCol cols="12">
        <VCard title="All Payments Data">
          <VDivider />

          <VCardText class="d-flex flex-wrap gap-4">
            <VSpacer />

            <div class="app-user-search-filter d-flex">
              <!-- 👉 Search  -->
              <VTextField v-model="searchQuery" placeholder="Search User" density="compact" class="me-3" />
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap"  height="27rem" fixed-header>
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col" style="inline-size: 48px">SR. NO.</th>
                <th scope="col">USER</th>
                <th scope="col">PHONE</th>
                <th scope="col">STATUS</th>
                <th scope="col">TRANSACTION NUMBER</th>
                <th scope="col">MERCHANT TRANSACTION</th>

                <th scope="col">PAYMENT AMOUNT</th>

                <th scope="col">PAYMENT DATE</th>
                <th scope="col">PAYMENT STATUS</th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr v-for="(req, index) in paymentsData" :key="req.id">
                <!-- 👉 Checkbox -->
                <td>
                  <span class="text-capitalize text-base">
                    {{ (current_page - 1) * 10 + index + 1 }}</span
                  >
                </td>
                <!-- 👉 user name -->
                <td>
                  <RouterLink
                    :to="{
                      name: 'apps-user-view-id',
                      params: { id: req.user_id },
                    }"
                    ><span class="text-capitalize text-base">{{
                      req.user_name
                    }}</span></RouterLink
                  >
                </td>
                <!-- 👉 Code -->
                <td class="text-capitalize text-high-emphasis">
                  <span class="text-base">{{ req.phone_number }}</span>
                </td>
                <td class="text-capitalize text-high-emphasis">
                  <span class="text-base">{{ req.code }}</span>
                </td>
                <!-- 👉 TransactionId -->
                <td>
                  <span class="text-capitalize text-base">
                    {{
                      req.meta_data &&
                      !req.meta_data.hasOwnProperty("transactionId")
                        ? JSON.parse(req.meta_data).transactionId
                        : "--"
                    }}
                  </span>
                </td>

                <!-- 👉 TransactionId -->
                <td>
                  <span class="text-capitalize text-base">{{
                    req.merchantTransactionId
                  }}</span>
                </td>

                <!-- 👉 Amount -->
                <td class="text-capitalize text-high-emphasis">
                  <span class="text-base">{{
                    req.meta_data
                      ? (JSON.parse(req.meta_data).amount / 100).toLocaleString(
                          "en-IN",
                          { style: "currency", currency: "INR" }
                        )
                      : "--"
                  }}</span>
                </td>

                <!-- 👉 PAYMENT STATUS -->
                <td class="text-capitalize text-high-emphasis">
                  <span class="text-center text-high-emphasis">{{
                    formatDate(req.created_at)
                  }}</span>
                </td>

                <!-- 👉 CREATED DATE -->
                <td class="text-capitalize text-high-emphasis">
                  <VBtn
                    color="primary"
                    small
                    v-if="req.is_refund_initiated == 0"
                    @click="
                      checkPaymentStatus(req.user_id, req.merchantTransactionId)
                    "
                  >
                    Check Status
                  </VBtn>
                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!paymentsData.length">
              <tr>
                <td
                  v-if="isLoading"
                  colspan="11"
                  class="text-center text-body-1"
                >
                  <VProgressCircular
                    :size="60"
                    color="primary"
                    indeterminate
                    class="my-5"
                  />
                </td>
                <td v-else colspan="11" class="text-center text-body-1">
                  No data available
                </td>
              </tr>
            </tfoot>
          </VTable>

          <VDivider />

          <!-- SECTION Pagination -->

          <VCardText class="d-flex flex-wrap justify-end gap-4 pa-2">
            <!-- 👉 Rows per page -->
            <div class="d-flex align-center" style="inline-size: 171px">
              <span class="text-no-wrap text-sm me-3">Rows per page:</span>
              <VSelect
                v-model="rowPerPage"
                density="compact"
                class="per-page-select"
                variant="plain"
                :items="[10, 20, 30, 50]"
              />
            </div>
            <!-- 👉 Total data in table-->
            <div class="d-flex align-center">
              <span class="text-sm text-no-wrap me-3" >Total Data: {{ totalrequests }}</span>
            </div>

            <!-- 👉 Pagination and pagination meta -->
            <div class="d-flex align-center">
              <VPagination
                v-model="paginationRef"
                :length="totalPage"
                color="primary"
                prev-icon="mdi-chevron-left"
                next-icon="mdi-chevron-right"
                first-icon="mdi-chevron-double-left"
                last-icon="mdi-chevron-double-right"
              />
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

.error {
  color: red;
}
</style>
