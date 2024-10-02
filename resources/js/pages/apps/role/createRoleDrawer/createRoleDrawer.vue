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
const name = ref('')
const email = ref('')
const password = ref('')
const role = ref('')
// const email = ref('')
// const company = ref('')
// const country = ref('')
// const contact = ref('')
// const role = ref()
// const plan = ref()
// const billing = ref()

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
        // id: 0,
        name: name.value,
        email: email.value,
        password: password.value,
        role: role.value.toLowerCase(),
        // company: company.value,
        // country: country.value,
        // contact: contact.value,
        // email: email.value,
        // currentPlan: plan.value,
        // billing: billing.value,
        // avatar: '',
        // status: 'active',
      })
      emit('update:isDrawerOpen', false)
      nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
      })
    }
  })
}

// console.log(onSubmit);

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}
</script>

<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection title="Create Role" @cancel="closeNavigationDrawer" />


    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">


            <VRow>

              <!-- 👉 Role -->
              <VCol cols="12">
                <VTextField v-model="name" :rules="[requiredValidator]" label="Name" />
              </VCol>

              <!-- 👉 Description -->
              <VCol cols="12">
                <VTextField v-model="email" :rules="[requiredValidator]" label="Email" />
              </VCol>

              <VCol cols="12">
                <VTextField  v-model="password" :rules="[requiredValidator]" label="Password" />
              </VCol>

              <VCol cols="12">
                <v-select v-model="role" :rules="[requiredValidator]" :items="['Admin','Recruitment', 'Account', 'Compliances']" label="Role" />
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
