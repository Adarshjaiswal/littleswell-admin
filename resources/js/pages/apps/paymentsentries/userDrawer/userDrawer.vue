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

              <!-- 👉 Emplyeee Name -->
              <VCol cols="12">
                <VTextField v-model="name" type="text" label=" Name" :rules="[requiredValidator]" />
              </VCol>

              <!-- 👉 Moblile Number -->
              <VCol cols="12">
                <VTextField v-model="mobileNumber" type="number" :rules="[requiredValidator]" label="Mobile Number" />
              </VCol>

              <!-- 👉 DoB -->
              <VCol cols="12">
                <VTextField v-model="dob" type="number" :rules="[requiredValidator]" label="Date of Birth" />
              </VCol>

              <!-- 👉 email -->
              <VCol cols="12">
                <VTextField v-model="eamil" type="email" label="Eamil" :rules="[requiredValidator]" />
              </VCol>

                 <!-- 👉 Address -->
                 <VCol cols="12">
                <VTextField v-model="presentAdd" type="text" :rules="[requiredValidator]" label="Address" />
              </VCol>


              <!-- 👉 Adhaar Number  -->
              <VCol cols="12">
                <VTextField v-model="adhaar" type="number" :rules="[requiredValidator]" label="Adhaar No." />
              </VCol>


              <!-- 👉 Sex -->
              <VCol cols="12">
                <VTextField v-model="sex" :rules="[requiredValidator]" label="Sex" />
              </VCol>

            


              <!-- 👉 Material Status -->
              <VCol cols="12">
                <VTextField v-model="materialStatus" :rules="[requiredValidator]" label="Material Status" />
              </VCol>

                 <!-- 👉 motherTounge   -->
                 <VCol cols="12">
                <VTextField v-model="motherTounge" :rules="[requiredValidator]" label="Mother Tounge" />
              </VCol>

               <!-- 👉  Skill -->
               <VCol cols="12">
                <VSelect v-model="skills" label="Skills" :rules="[requiredValidator]" :items="[]" />
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
