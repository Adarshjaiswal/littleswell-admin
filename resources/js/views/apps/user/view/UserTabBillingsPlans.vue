<script setup>
import americanExpress from '@images/icons/payments/american-express.png'
import mastercard from '@images/icons/payments/mastercard.png'
import visa from '@images/icons/payments/visa.png'

const isUpgradePlanDialogVisible = ref(false)
const currentCardDetails = ref()
const isCardEditDialogVisible = ref(false)
const isCardAddDialogVisible = ref(false)
const isEditAddressDialogVisible = ref(false)

const openEditCardDialog = cardDetails => {
  currentCardDetails.value = cardDetails
  isCardEditDialogVisible.value = true
}

const creditCards = [
  {
    name: 'Tom McBride',
    number: '4851234567899865',
    expiry: '12/24',
    isPrimary: true,
    type: 'mastercard',
    cvv: '123',
    image: mastercard,
  },
  {
    name: 'Mildred Wagner',
    number: '5531234567895678',
    expiry: '02/24',
    isPrimary: false,
    type: 'visa',
    cvv: '456',
    image: visa,
  },
  {
    name: 'Lester Jennings',
    number: '5531234567890002',
    expiry: '08/20',
    isPrimary: false,
    type: 'visa',
    cvv: '456',
    image: americanExpress,
  },
]

const currentBillingAddress = {
  companyName: 'ThemeSelection',
  billingEmail: 'gertrude@gmail.com',
  taxID: 'TAX-875623',
  vatNumber: 'SDF754K77',
  address: '100 Water Plant Avenue, Building 1303 Wake Island',
  contact: '+1(609) 933-44-22',
  country: 'USA',
  state: 'Queensland',
  zipCode: '403114',
}
</script>

<template>
  <VRow>
    <!-- 👉 Current Plan -->
    <!-- <VCol cols="12">
      <VCard title="Current Plan">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <h6 class="text-base font-weight-medium mb-1">
                Your Current Plan is <strong>Basic</strong>
              </h6>
              <p>A simple start for everyone</p>

              <h6 class="text-base font-weight-medium mb-1">
                Active until Dec 09, 2021
              </h6>
              <p>We will send you a notification upon Subscription expiration</p>

              <h6 class="text-base font-weight-medium mb-1">
                <span class="me-4">$199 Per Month</span>
                <VChip
                  color="primary"
                  density="compact"
                  label
                >
                  popular
                </VChip>
              </h6>
              <p class="mb-0">
                Standard plan for small to medium businesses
              </p>
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              👉 Alert
              <VAlert
                color="warning"
                variant="tonal"
              >
                <VAlertTitle class="mb-1">
                  We need your attention!
                </VAlertTitle>
                <span>Your plan requires update</span>
              </VAlert>

              👉 Progress
              <div class="d-flex justify-space-between font-weight-bold mt-4 mb-2">
                <h6 class="text-sm">
                  Days
                </h6>
                <h6 class="text-sm">
                  26 of 30 Days
                </h6>
              </div>

              <VProgressLinear
                rounded
                color="primary"
                :height="10"
                :model-value="75"
              />
              <p class="text-xs mt-2">
                Your plan requires update
              </p>
            </VCol>

            <VCol cols="12">
              <div class="d-flex flex-wrap gap-4">
                <VBtn @click="isUpgradePlanDialogVisible = true">
                  upgrade plan
                </VBtn>

                <VBtn
                  color="error"
                  variant="tonal"
                >
                  Cancel Subscription
                </VBtn>
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol> -->

    <!-- 👉 Payment Methods -->
    <VCol cols="12">
      <VCard title="Payment Methods">
        <template #append>
          <VBtn
            prepend-icon="bx-plus"
            @click="isCardAddDialogVisible = !isCardAddDialogVisible"
          >
            Add Card
          </VBtn>
        </template>

        <VCardText class="d-flex flex-column gap-y-4">
          <VCard
            v-for="card in creditCards"
            :key="card.name"
            border
            flat
          >
            <VCardText class="d-flex flex-sm-row flex-column pa-5">
              <div class="text-no-wrap">
                <VImg
                  :src="card.image"
                  :width="60"
                  :height="25"
                />
                <h4 class="text-base my-3">
                  {{ card.name }}
                  <VChip
                    v-if="card.isPrimary"
                    label
                    color="primary"
                    density="compact"
                    class="ms-4"
                  >
                    Primary
                  </VChip>
                </h4>
                <span class="">**** **** **** {{ card.number.substring(card.number.length - 4) }}</span>
              </div>

              <VSpacer />

              <div class="d-flex flex-column text-sm-end">
                <div class="order-sm-0 order-1">
                  <VBtn
                    variant="tonal"
                    class="me-4"
                    @click="openEditCardDialog(card)"
                  >
                    Edit
                  </VBtn>
                  <VBtn
                    color="secondary"
                    variant="tonal"
                  >
                    Delete
                  </VBtn>
                </div>
                <span class="text-sm my-4 order-sm-1 order-0">Card expires at {{ card.expiry }}</span>
              </div>
            </VCardText>
          </VCard>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Billing Address -->
      <VCard title="Billing Address">
        <template #append>
          <VBtn @click="isEditAddressDialogVisible = !isEditAddressDialogVisible">
            Edit Address
          </VBtn>
        </template>

        <VCardText>
          <VRow>
            <VCol
              cols="12"
              lg="6"
            >
              <VTable class="billing-address-table">
                <tr>
                  <td>
                    <h6 class="text-base text-no-wrap mb-4">
                      Company Name:
                    </h6>
                  </td>
                  <td>
                    <p>
                      {{ currentBillingAddress.companyName }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-base text-no-wrap mb-4">
                      Billing Email:
                    </h6>
                  </td>
                  <td>
                    <p>
                      {{ currentBillingAddress.billingEmail }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-base text-no-wrap mb-4">
                      Tax ID:
                    </h6>
                  </td>
                  <td>
                    <p>
                      {{ currentBillingAddress.taxID }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-base text-no-wrap mb-4">
                      VAT Number:
                    </h6>
                  </td>
                  <td>
                    <p>
                      {{ currentBillingAddress.vatNumber }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="d-flex align-baseline">
                    <h6 class="text-base text-no-wrap">
                      Billing Address:
                    </h6>
                  </td>
                  <td>
                    <p class=" mb-0">
                      {{ currentBillingAddress.address }}
                    </p>
                  </td>
                </tr>
              </VTable>
            </VCol>

            <VCol
              cols="12"
              lg="6"
            >
              <VTable class="billing-address-table">
                <tr>
                  <td>
                    <h6 class="text-base text-no-wrap mb-4">
                      Contact:
                    </h6>
                  </td>
                  <td>
                    <p>
                      {{ currentBillingAddress.contact }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-base text-no-wrap mb-4">
                      Country:
                    </h6>
                  </td>
                  <td>
                    <p>
                      {{ currentBillingAddress.country }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-base text-no-wrap mb-4">
                      State:
                    </h6>
                  </td>
                  <td>
                    <p>
                      {{ currentBillingAddress.state }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-base text-no-wrap">
                      Zip Code:
                    </h6>
                  </td>
                  <td>
                    <p class=" mb-0">
                      {{ currentBillingAddress.zipCode }}
                    </p>
                  </td>
                </tr>
              </VTable>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <!-- 👉 Edit Card Dialog -->
  <CardAddEditDialog
    v-model:isDialogVisible="isCardEditDialogVisible"
    :card-details="currentCardDetails"
    class="v-dialog-lg"
  />

  <!-- 👉 Add Card Dialog -->
  <CardAddEditDialog
    v-model:isDialogVisible="isCardAddDialogVisible"
    class="v-dialog-lg"
  />

  <!-- 👉 Edit Address dialog -->
  <AddEditAddressDialog
    v-model:isDialogVisible="isEditAddressDialogVisible"
    :billing-address="currentBillingAddress"
  />

  <!-- 👉 Upgrade plan dialog -->
  <UserUpgradePlanDialog v-model:isDialogVisible="isUpgradePlanDialogVisible" />
</template>

<style lang="scss">
.billing-address-table {
  tr {
    td:first-child {
      inline-size: 148px;
    }
  }
}
</style>
