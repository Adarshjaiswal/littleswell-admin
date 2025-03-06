<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate">
    <!-- Title -->
    <AppDrawerHeaderSection title="Add Vaccine" @cancel="closeNavigationDrawer" />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>
              <!-- Vaccine Title -->
              <VCol cols="12">
                <VTextField v-model="vaccineName" :rules="[requiredValidator]" label="Vaccine Name" />
              </VCol>

              <!-- Description -->
              <VCol cols="12">
                <VTextField v-model="vaccineDesc" :rules="[requiredValidator]" label="Description" />
              </VCol>

              <!-- Day -->
              <VCol cols="6">
                <VTextField v-model="days" :rules="[requiredValidator]" label="Day" />
              </VCol>

              <!-- Duration -->
              <VCol cols="6">
                <VSelect v-model="duration" :items="durationOptions" label="Select Duration" :rules="[requiredValidator]" item-value="id" item-text="title" />
              </VCol>

              <!-- Status -->
              <VCol cols="12">
                <v-switch v-model="status" label="Status"></v-switch>
              </VCol>

              <!-- Submit and Cancel -->
              <VCol cols="12">
                <VBtn type="submit" class="me-3">Submit</VBtn>
                <VBtn type="reset" variant="tonal" color="secondary" @click="closeNavigationDrawer">Cancel</VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>

<script setup>
import { requiredValidator } from '@validators';
import { defineProps, defineEmits, ref, nextTick, onMounted } from 'vue';
import axios from 'axios';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:isDrawerOpen', 'userData']);

const isFormValid = ref(false);
const refForm = ref();
const vaccineName = ref('');
const vaccineDesc = ref('');
const days = ref('');
const duration = ref('');
const status = ref('');

const durationOptions = [
  { id: 'day', title: 'Day' },
  { id: 'week', title: 'Week' },
  { id: 'month', title: 'Month' }
];

const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false);
  nextTick(() => {
    refForm.value?.reset();
    refForm.value?.resetValidation();
  });
};

onMounted(() => {
  axios.get('/api/web/job/get-states')
    .then(response => {
      // Assuming states is defined somewhere
      // states.value = response.data.states_data.map(state => ({
      //   id: state.id,
      //   name: state.name
      // }));
    })
    .catch(error => {
      console.error('Error fetching states:', error);
    });
});

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      emit('userData', {
        vaccineName: vaccineName.value,
        vaccineDesc: vaccineDesc.value,
        days: days.value,
        duration: duration.value,
        status: status.value,
      });
      emit('update:isDrawerOpen', false);
      nextTick(() => {
        refForm.value?.reset();
        refForm.value?.resetValidation();
      });
    }
  });
};

const handleDrawerModelValueUpdate = (val) => {
  emit('update:isDrawerOpen', val);
};
</script>
