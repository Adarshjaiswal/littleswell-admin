<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
])

const isFormValid = ref(false)
const refForm = ref()
const fullName = ref('')
const userName = ref('')
const email = ref('')
const company = ref('')
const country = ref('')
const contact = ref('')
const role = ref()
const plan = ref()
const billing = ref()




// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      emit('userData', {
        id: 0,
        fullName: fullName.value,
        company: company.value,
        role: role.value,
        username: userName.value,
        country: country.value,
        contact: contact.value,
        email: email.value,
        currentPlan: plan.value,
        billing: billing.value,
        avatar: '',
        status: 'active',
      })
      emit('update:isDrawerOpen', false)
      nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
      })
    }
  })
}

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}
</script>

<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection title="Add User Details" @cancel="closeNavigationDrawer" />


    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>
              <!-- 👉 Id No. -->
              <VCol cols="12">
                <VSelect v-model="role" label="Id No." :rules="[requiredValidator]"
                  :items="[]" />
              </VCol>

              <!-- 👉 Emplyeee Name -->
              <VCol cols="12">
                <VSelect v-model="name" label="Employee Name" :rules="[requiredValidator]" :items="[]" />
              </VCol>

              <!-- 👉 Father Name -->
              <VCol cols="12">
                <VSelect v-model="fathreName" label="Father Name" :rules="[requiredValidator]" :items="[]" />
              </VCol>

              <!-- 👉 Mother Name -->
              <VCol cols="12">
                <VSelect v-model="motherName" label="Employee Name" :rules="[requiredValidator]" :items="[]" />
              </VCol>

              <!-- 👉 DoB -->
              <VCol cols="12">

                <VTextField v-model="dob" type="number" :rules="[requiredValidator]" label="Date of Birth" />
              </VCol>

              <!-- 👉 Sex -->
              <VCol cols="12">
                <VTextField v-model="sex" :rules="[requiredValidator]" label="Sex" />
              </VCol>

              <!-- 👉 Material Status -->
              <VCol cols="12">
                <VTextField v-model="materialStatus" :rules="[requiredValidator]" label="Material Status" />
              </VCol>

              <!-- 👉 Designation -->
              <VCol cols="12">
                <VTextField v-model="designation" :rules="[requiredValidator]" label="Designation" />
              </VCol>

              <!-- 👉 Moblile Number -->
              <VCol cols="12">
                <VTextField v-model="mobileNumber" type="number" :rules="[requiredValidator]" label="Mobile Number" />
              </VCol>

              <!-- 👉 UAN Number -->
              <VCol cols="12">
                <VTextField v-model="uan" type="number" :rules="[requiredValidator]" label="UAN No." />
              </VCol>

              <!-- 👉 Adhaar Number Number -->
              <VCol cols="12">
                <VTextField v-model="adhaar" type="number" :rules="[requiredValidator]" label="Adhaar No." />
              </VCol>

              <!-- 👉 PAN -->
              <VCol cols="12">
                <VTextField v-model="pan" type="number" :rules="[requiredValidator]" label="Adhaar No." />
              </VCol>


              <!-- 👉 Present Address -->
              <VCol cols="12">
                <VTextField v-model="presentAdd" type="text" :rules="[requiredValidator]" label="Present Address" />
              </VCol>


              <!-- 👉 Parmanent Address -->
              <VCol cols="12">
                <VTextField v-model="prmanentAdd" type="text" :rules="[requiredValidator]" label="Parmanent Address" />
              </VCol>

              <!-- 👉 Department -->
              <VCol cols="12">
                <VTextField v-model="department" type="text" :rules="[requiredValidator]" label="Department" />
              </VCol>

              <!-- 👉 Client Id -->
              <VCol cols="12">
                <VTextField v-model="clientId" type="Number" :rules="[requiredValidator]" label="Client Id" />
              </VCol>

              <!-- 👉 Branch -->
              <VCol cols="12">
                <VTextField v-model="branch" type="text" :rules="[requiredValidator]" label="Branch" />
              </VCol>

              <!-- 👉 Division -->
              <VCol cols="12">
                <VTextField v-model="division" type="text" :rules="[requiredValidator]" label="Division" />
              </VCol>

              <!-- 👉 Bank Account Number -->
              <VCol cols="12">
                <VTextField v-model="banckAccNo" type="number" :rules="[requiredValidator]" label="Bank Account Number" />
              </VCol>

              <!-- 👉 IFSC -->
              <VCol cols="12">
                <VTextField v-model="ifsc" type="text" :rules="[requiredValidator]" label="IFSC" />
              </VCol>

              <!-- 👉 Bank Name -->
              <VCol cols="12">
                <VTextField v-model="bankName" type="text" :rules="[requiredValidator]" label="Bank Name" />
              </VCol>

              <!-- 👉 Joining Date -->
              <VCol cols="12">
                <AppDateTimePicker v-model="date" label="Joining Date" />

              </VCol>

              <!-- 👉 Leaving Date Date -->
              <VCol cols="12">
                <AppDateTimePicker v-model="date" label="Leaving Date" />

              </VCol>

              <!-- 👉 ESI Applicalbe -->
              <VCol cols="12">
                <VTextField v-model="adhaar" type="text" :rules="[requiredValidator]" label="ESI Applicalbe" />
              </VCol>

              <!-- 👉 ESI No. -->
              <VCol cols="12">
                <VTextField v-model="adhaar" type="text" :rules="[requiredValidator]" label="ESI No." />
              </VCol>

              <!-- 👉 PF Applicalbe -->
              <VCol cols="12">
                <VTextField v-model="pf" type="text" :rules="[requiredValidator]" label="PF Applicalbe" />
              </VCol>

              <!-- 👉 PF Numbere -->
              <VCol cols="12">
                <VTextField v-model="pfNumber" type="number" :rules="[requiredValidator]" label="PF Numbere" />
              </VCol>

              <!-- 👉 PT Applicable -->
              <VCol cols="12">
                <VTextField v-model="ptApplicable" type="text" :rules="[requiredValidator]" label="PT Applicable" />
              </VCol>

              <!-- 👉 Eemployee Type -->
              <VCol cols="12">
                <VTextField v-model="empType" type="text" :rules="[requiredValidator]" label="Eemployee Type" />
              </VCol>

              <!-- 👉 Old Employee Id -->
              <VCol cols="12">
                <VTextField v-model="oldId" type="number" :rules="[requiredValidator]" label="Old Employee Id" />
              </VCol>


              <!-- 👉 Start
                 date -->
              <VCol cols="12">
                <AppDateTimePicker v-model="date" label="Joining Date" />
              </VCol>




              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn type="submit" class="me-3">
                  Submit
                </VBtn>
                <VBtn type="reset" variant="tonal" color="secondary" @click="closeNavigationDrawer">
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
