<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import axios from 'axios'
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
const name = ref('') // Change fullName to name
const mobileNumber = ref('') // Change contact to mobileNumber
const dob = ref('') // Add dob ref
const email = ref('') // Change email to email
const location = ref('') // Add location ref
const adhaar = ref('') // Add adhaar ref
const gender = ref('') // Add gender ref
const materialStatus = ref('') // Add materialStatus ref
const mother_tounge = ref('') // Add mother_tounge ref
const skills = ref([]) // Add skills ref
const skill_id = ref('')

// Fetch skills data from API URL
// onMounted(() => {
//   axios.get('/api/web/job/get-skills')
//     .then(response => {
//       skills.value = response.data.skills_data.map(skill => ({
//         id: skill.id,
//         title: skill.skill_title
//       }));
//     })
//     .catch(error => {
//       console.error('Error fetching skills:', error);
//     });

//   })

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}
const onSubmit = async () => {
  refForm.value?.validate().then(async ({ valid }) => {
    if (valid) {
      const userData = {
        name: name.value, 
        mobileNumber: mobileNumber.value,
        dob: dob.value,
        email: email.value,
        location: location.value,
        adhaar: adhaar.value, 
        gender: gender.value, 
        materialStatus: materialStatus.value,
        mother_tounge: mother_tounge.value,
        skill_id: skill_id.value,
      };
      try {
        const response = await axios.post('/api/web/user/add-user', userData);
        if (response.status === 201) {
          emit('userData', true); 
          closeNavigationDrawer();
        } else {
          errormessage.value = true;
        }
      } catch (error) {
        errormessage.value = true;
        console.error('Error adding user:', error);
      }
      
      emit('update:isDrawerOpen', false) // Close the drawer
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
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>
              <!-- 👉 user Name -->
              <VCol cols="12">
                <VTextField v-model="name" type="text" label=" Name" :rules="[requiredValidator]" />
              </VCol>
              <!-- 👉 Moblile Number -->
              <VCol cols="12">
                <VTextField v-model="mobileNumber" type="number" :rules="[requiredValidator]" label="Mobile Number" />
              </VCol>

              <!-- 👉 DoB -->
              <VCol cols="12">
                <VTextField v-model="dob" type="date" :rules="[requiredValidator]" label="Date of Birth" />
              </VCol>

              <!-- 👉 email -->
              <VCol cols="12">
                <VTextField v-model="email" type="email" label="Email"  />
              </VCol>

                 <!-- 👉 Address -->
                 <VCol cols="12">
                <VTextField v-model="location" type="text" :rules="[requiredValidator]" label="Location" />
              </VCol>


              <!-- 👉 Adhaar Number  -->
              <VCol cols="12">
                <VTextField v-model="adhaar" type="number"  label="Adhaar No." />
              </VCol>


              <!-- 👉 Gender -->
              <VCol cols="12">
                <VTextField v-model="gender" :rules="[requiredValidator]" label="Gender" />
              </VCol>

              <!-- 👉 Material Status -->
              <VCol cols="12">
                <VTextField v-model="materialStatus" :rules="[requiredValidator]" label="Material Status" />
              </VCol>

                 <!-- 👉 motherTounge   -->
                 <VCol cols="12">
                <VTextField v-model="mother_tounge" :rules="[requiredValidator]" label="Mother Tounge" />
              </VCol>

              <VCol cols="12">
                <VSelect v-model="skill_id" label="Select Skill" :rules="[requiredValidator]" :items="skills"
                  item-value="id" item-text="title" />
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
