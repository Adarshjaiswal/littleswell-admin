<script setup>
import {
avatarText,
kFormatter,
} from '@core/utils/formatters';

const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})

const standardPlan = {
  plan: 'Standard',
  price: 99,
  benefits: [
    '10 Users',
    'Up to 10GB storage',
    'Basic Support',
  ],
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

const isUserInfoEditDialogVisible = ref(false)
const isUpgradePlanDialogVisible = ref(false)

const resolveUserStatusVariant = stat => {
  if (stat === 'Rejected')
    return 'error'
  if (stat === 'Accepted')
    return 'success'
  if (stat === 'Pending')
    return 'secondary'

  return 'primary'
}

const resolveUserRoleVariant = role => {
  if (role === 'subscriber')
    return {
      color: 'primary',
      icon: 'bx-user',
    }
  if (role === 'author')
    return {
      color: 'warning',
      icon: 'bx-cog',
    }
  if (role === 'maintainer')
    return {
      color: 'success',
      icon: 'bx-data',
    }
  if (role === 'editor')
    return {
      color: 'info',
      icon: 'bx-pencil',
    }
  if (role === 'admin')
    return {
      color: 'error',
      icon: 'bx-server',
    }

  return {
    color: 'primary',
    icon: 'bx-user',
  }
}
</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.userData">
        <VCardText class="text-center pt-15">
          <!-- 👉 Avatar -->
          <VAvatar rounded :size="120" color="primary" variant="tonal">
            <VImg v-if="props.userData.avatar" :src="props.userData.avatar" />
            <span v-else class="text-5xl font-weight-semibold">
              {{ avatarText(props.userData.name) }}
            </span>
          </VAvatar>

          <!-- 👉 User fullName -->
          <h6 class="text-h6 mt-4">
            {{ props.userData.name }}
          </h6>

          <!-- 👉 Role chip -->
         
        </VCardText>

        <VCardText class="d-flex justify-center flex-wrap">
          <!-- 👉 Done Project -->
          <div class="d-flex align-center me-4 mb-2">
            <VAvatar :size="44" rounded color="primary" variant="tonal" class="me-3">
              <VIcon size="24" icon="bx-briefcase" />
            </VAvatar>

            <div>
              <h6 class="text-h6">
                {{ kFormatter(props.userData.projectDone) }}
              </h6>
              <span class="text-sm">Project Done</span>
            </div>
          </div>
        </VCardText>

        <!-- 👉 Details -->
        <VCardText>
          <h6 class="text-h6">
            Details
          </h6>

          <VDivider class="my-4" />
          <!-- 👉 User Details list -->
          <VList class="card-list mt-2">

            <VListItem>
              <VListItemTitle>
                <span class="font-weight-medium me-1">
                 Job Application Status:
                </span>
                <VChip label density="compact" :color="resolveUserStatusVariant(props.userData.status)">
                  {{ props.userData.status }}
                </VChip>
              </VListItemTitle>
            </VListItem>



            <!-- <VListItem>
              <VListItemTitle>
                <span class="font-weight-medium me-1">User ID:</span>
                <span class="text-body-1 text-medium-emphasis">
                  {{ props.userData.user_id }}
                </span>
              </VListItemTitle>
            </VListItem> -->

            <!-- <VListItem>
              <VListItemTitle>
                <span class="font-weight-medium me-1">
                  Job Id:
                </span>
                <span class="text-body-1 text-medium-emphasis">{{ props.userData.job_id }}</span>
              </VListItemTitle>
            </VListItem> -->

     


            <VListItem>
              <VListItemTitle>
                <span class="font-weight-medium me-1">Date of Birth: </span>
                <span class="text-capitalize text-body-1 text-medium-emphasis">{{ props.userData.dob }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <span class="font-weight-medium me-1">Email: </span>
                <span class=" text-body-1 text-medium-emphasis">{{ props.userData.email }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <span class="font-weight-medium me-1">Phone Number: </span>
                <span class="text-capitalize text-body-1 text-medium-emphasis">{{ props.userData.phone_number }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <span class="font-weight-medium me-1">Location : </span>
                <span class="text-capitalize text-body-1 text-medium-emphasis">{{ props.userData.location }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <span class="font-weight-medium me-1">Skills : </span>
                <span class="text-capitalize text-body-1 text-medium-emphasis">{{ props.userData.skills }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <span class="font-weight-medium me-1">Joined At: </span>
                <span class="text-capitalize text-body-1 text-medium-emphasis">  {{ formatDate(props.userData.created_at) }}</span>
              </VListItemTitle>
            </VListItem>
            
           

          </VList>
        </VCardText>

      </VCard>
    </VCol>
   

  </VRow>

  
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.8rem;
}

.current-plan {
  border: 2px solid rgb(var(--v-theme-primary));
}

.text-capitalize {
  text-transform: capitalize !important;
}
</style>
