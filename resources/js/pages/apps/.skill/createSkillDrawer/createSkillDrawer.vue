<script setup>
import {
requiredValidator
} from '@validators';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

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
const skill_title = ref('')
const description = ref('')
// const email = ref('')
// const company = ref('')
// const country = ref('')
// const contact = ref('')
// const role = ref()
// const plan = ref()
// const billing = ref()

// ð??? drawer close
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
        skill_title: skill_title.value,
        description: description.value,
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
    <!-- ð??? Title -->
    <AppDrawerHeaderSection title="Create Skill" @cancel="closeNavigationDrawer" />


    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- ð??? Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">


            <VRow>

              <!-- ð??? Role -->
              <VCol cols="12">
                <VTextField v-model="skill_title" :rules="[requiredValidator]" label="Skill" />
              </VCol>

              <!-- ð??? Description -->
              <VCol cols="12">
                <VTextField v-model="description" :rules="[requiredValidator]" label="Description" />
              </VCol>

              <!-- ð??? Submit and Cancel -->
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
