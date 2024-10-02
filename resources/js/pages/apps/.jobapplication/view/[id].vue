<script setup>
import UserBioPanel from '@/pages/apps/jobapplication/data/view/UserBioPanel.vue';
import UserTabBillingsPlans from '@/pages/apps/jobapplication/data/view/UserTabBillingsPlans.vue';
import { JobApplication } from '@/views/apps/jobapplication/useJobApplication';


const JobApplicationStore = JobApplication()
const route = useRoute()
const userData = ref()
const userTab = ref(null)
const applicationData = ref()




const tabs = [
{
    icon: 'bx-receipt',
    title: 'Job Details',
  },
]

JobApplicationStore.fetchUserDetails(Number(route.params.id)).then(response => {
  userData.value = response.data.user_details[0];
  applicationData.value =response.data.job_details[0];
  console.log(userData.value);
})
</script>

<template>
  <VRow v-if="userData">
    <VCol
      cols="12"
      md="5"
      lg="4"
    >
      <UserBioPanel :user-data="userData" />
    </VCol>

    <VCol
      cols="12"
      md="7"
      lg="8"
    >
      <VTabs
        v-model="userTab"
        class="v-tabs-pill"
      >
        <VTab
          v-for="tab in tabs"
          :key="tab.icon"
        >
          <VIcon
            start
            :size="20"
            :icon="tab.icon"
          />
          <span>{{ tab.title }}</span>
        </VTab>
      </VTabs>


      <VWindow
        v-model="userTab"
        class="mt-6 disable-tab-transition"
        :touch="false"
      >

        <VWindowItem>
          <UserTabBillingsPlans :application-data="applicationData" />
        </VWindowItem>


      </VWindow>
    </VCol>
  </VRow>
</template>
@/views/apps/JobApplication/useJobApplication