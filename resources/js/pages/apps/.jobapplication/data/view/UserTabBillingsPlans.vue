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


const props = defineProps({
  applicationData: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <VRow>


    <VCol cols="12">
      <!-- 👉 Billing Address -->
      <VCard title="">
     
      
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
                      Job Name:
                    </h6>
                  </td>
                  <td>
                    <p>
                      {{ props.applicationData.job_title }}
                     
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-base text-no-wrap mb-4">
                      Skill :
                    </h6>
                  </td>
                  <td>
                    <p>
                      {{ props.applicationData.skill_title }}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h6 class="text-base text-no-wrap mb-4">
                      Experience:
                    </h6>
                  </td>
                  <td>
                    <p>
                      {{ props.applicationData.experience }}
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
                      Company Name:
                    </h6>
                  </td>
                  <td>
                    <p>
                      {{ props.applicationData.company_name }}
                    </p>
                  </td>
                </tr>



                <tr>
                  <td>
                    <h6 class="text-base text-no-wrap mb-4">
                      Salary:
                    </h6>
                  </td>
                  <td>
                    <p>
                      {{ props.applicationData.salary }}
                    </p>
                  </td>
                </tr>

              

                <tr>
                  <td>
                    <h6 class="text-base text-no-wrap mb-4">
                      Job Designation:
                    </h6>
                  </td>
                  <td>
                    <p>
                      {{ props.applicationData.designation }}
                    </p>
                  </td>
                </tr>

               
              </VTable>
            </VCol>
            <VCol>
              <tr>
                  <td>
                    <h6 class="text-base text-no-wrap mb-4">
                      Job Description : 
                    </h6>
                  </td>
                  <td>
                    <p style="padding-left: 20px;">
                           {{ props.applicationData.job_description }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="d-flex align-baseline">
                    <h6 class="text-base text-no-wrap">
                      Created At:
                    </h6>
                  </td>
                  <td>
                    <p class=" mb-0" style="padding-left: 20px;">
                      {{ formatDate(props.applicationData.created_at) }}
                    </p>
                  </td>
                </tr>
            </VCol>
            
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

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
