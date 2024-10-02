<script setup>
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const smsVerificationNumber = ref('+1(968) 819-2547')
const isTwoFactorDialogOpen = ref(false)

const props = defineProps({
  userPayment: {
    type: Object,
    required: true,
  },
})
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
</script>

<template>
  <VRow>

    <VCol cols="12">
      <!-- 👉 Recent devices -->
      <VCard title="Recent devices">
        <VDivider />
        <VTable class="text-no-wrap"  height="27rem" fixed-header>
          <thead>
            <tr>
              <th scope="col">
               ID
              </th>
              <th scope="col">
              STATUS
              </th>
              <th scope="col">
                TRANSACTION ID
              </th>
              <th scope="col">
               MESSAGE
              </th>
              <th scope="col">
                RECENT ACTIVITY
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="payment in props.userPayment"
              :key="payment.id"
            >
            

              <td class="text-medium-emphasis">
             {{payment.id}}
              </td>

              <td class="text-medium-emphasis">
                {{payment.code}}
              </td>

              <td class="text-medium-emphasis">
                {{ payment.merchantTransactionId }}
              </td>

              <td class="text-medium-emphasis">
                {{ payment.message }}
              </td>
              <td class="text-medium-emphasis">
                {{formatDate(payment.created_at)  }}
              </td>
            </tr>
          </tbody>
        </VTable>
      </VCard>
    </VCol>
  </VRow>

  <!-- 👉 Enable One Time Password Dialog -->
  <TwoFactorAuthDialog
    v-model:isDialogVisible="isTwoFactorDialogOpen"
    :sms-code="smsVerificationNumber"
  />
</template>
