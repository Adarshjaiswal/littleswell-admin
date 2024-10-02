<script setup>
import UserBioPanel from '@/pages/apps/userDetail/view/UserBioPanel.vue'
import UserInvoiceTable from '@/pages/apps/userDetail/view/UserInvoiceTable.vue'
import WorkHistory from '@/pages/apps/userDetail/view/UserTabOverview.vue'
import UserTabSecurity from '@/pages/apps/userDetail/view/UserTabSecurity.vue'
import { useUserListStore } from '@/views/apps/user/useUserListStore'

const userListStore = useUserListStore()
const route = useRoute()
const userData = ref()
const userChild = ref([])
const userPayment = ref([])
const userTab = ref('work-history')

const tabs = [

  {
    icon: 'bx-child',
    title: 'Children Details',
  },
 

]

userListStore.fetchUser(Number(route.params.id)).then(response => {
  userData.value = response.data.user_details;
  userChild.value = response.data.child_details;
  //userPayment.value = response.data.payment_data;
  console.log(response.data);
})
</script>

<template>
  <VRow v-if="userData">
    <VCol cols="12" md="5" lg="4">
      <UserBioPanel :user-data="userData" />
    </VCol>

    <VCol cols="12" md="7" lg="8">
      <VTabs v-model="userTab" class="v-tabs-pill">
        <VTab v-for="tab in tabs" :key="tab.icon">
          <VIcon start :size="20" :icon="tab.icon" />
          <span>{{ tab.title }}</span>
        </VTab>
      </VTabs>

      <VWindow v-model="userTab" class="mt-6 disable-tab-transition" :touch="false">
        <VWindowItem>
          <WorkHistory :user-child="userChild" />
        </VWindowItem>

        <VWindowItem>
          <UserTabSecurity :user-payment="userPayment"/>
        </VWindowItem>

        <VWindowItem>
          <UserTabBillingsPlans />
        </VWindowItem>

        <VWindowItem>
          <UserTabNotifications />
        </VWindowItem>

        <VWindowItem>
          <UserTabConnections />
        </VWindowItem>

        <VWindowItem>
          <UserInvoiceTable />
        </VWindowItem>
        
      </VWindow>
    </VCol>
  </VRow>
</template>
