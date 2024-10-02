<script setup>
const props = defineProps({
  userChild: {
    type: Object,
    required: true,
  },
})

const userWorkDetail = ref([]);

const isUserInfoAddDialogVisible = ref(false)
const OpenDialogDetail = (history) => {
  userWorkDetail.value = history;
  isUserInfoAddDialogVisible.value = true;

};
</script>

<template>
  <VRow>

    <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 800" v-model="isUserInfoAddDialogVisible">
      <VCard class="pa-sm-9 pa-5">
        <!-- 👉 dialog close btn -->
        <DialogCloseBtn variant="text" size="small" @click="isUserInfoAddDialogVisible = false" />

        <VCardItem class="text-center">
          <VCardTitle class="text-h5 mb-3">
            child Detail
          </VCardTitle>

        </VCardItem>

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6" @submit.prevent="onFormSubmit">


            <VList class="card-list mt-2 col-6">

              <VListItem>
                <VListItemTitle>
                  <span class="font-weight-medium me-1">
                    child Id:
                  </span>
                  <span class="text-body-1 text-medium-emphasis">{{ userWorkDetail.id }} </span>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle>
                  <span class="font-weight-medium me-1">
                    Name:
                  </span>
                  <span class="text-body-1 text-medium-emphasis"> {{ userWorkDetail.name }}</span>
                </VListItemTitle>
              </VListItem>
              <VListItem>
                <VListItemTitle>
                  <span class="font-weight-medium me-1">
                    DOB:
                  </span>
                  <span class="text-body-1 text-medium-emphasis"> {{ userWorkDetail.dob }}</span>
                </VListItemTitle>
              </VListItem>
              <VListItem>
                <VListItemTitle>
                  <span class="font-weight-medium me-1">
                    BIRTH TIME:
                  </span>
                  <span class="text-body-1 text-medium-emphasis"> {{ userWorkDetail.birth_time }}</span>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle>
                  <span class="font-weight-medium me-1">
                  Height:
                  </span>
                  <span class="text-body-1 text-medium-emphasis"> {{ userWorkDetail.height }}</span>
                </VListItemTitle>
              </VListItem>
              <VListItem>
                <VListItemTitle>
                  <span class="font-weight-medium me-1">
                  weight:
                  </span>
                  <span class="text-body-1 text-medium-emphasis"> {{ userWorkDetail.weight }}</span>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle>
                  <span class="font-weight-medium me-1">
                    Gender:
                  </span>
                  <span class="text-body-1 text-medium-emphasis">{{ userWorkDetail.gender }} </span>
                </VListItemTitle>
              </VListItem>

           

             

             
             

            

             
             


           



            </VList>
          </VForm>
        </VCardText>
      </VCard>
    </VDialog>


    <VCol cols="12">
      <VCard v-if="props.userChild" title="Children">
        <VDivider />
        <!-- 👉 project List table -->
        <VTable class="text-no-wrap"  height="27rem" fixed-header>
          <thead>
            <tr>
              <th scope="col">
                ID
              </th>
              <th scope="col">
              NAME
              </th>
              <th scope="col">
               DOB
              </th>
              <th scope="col">
               BIRTH TIME
              </th>
              <th scope="col">
                ACTION
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="history in props.userChild" :key="history.id">
              <td>
                <span class="text-high-emphasis">{{ history.id }}</span>
              </td>
            

              <td>
                <span class="text-high-emphasis">{{ history.name }}</span>
              </td>

              <td>
                <span class="text-high-emphasis">{{ history.dob }}</span>
              </td>

              <td class="text-medium-emphasis">
                <span class="text-high-emphasis">{{ history.birth_time }}</span>
              </td>
              <td class="text-medium-emphasis">
                <VBtn class="primary btn-sm" @click="OpenDialogDetail(history)">
                  More Details
                </VBtn>
              </td>
            </tr>
          </tbody>
        </VTable>
      </VCard>
    </VCol>



    <!--
      <VCol cols="12">
      <UserInvoiceTable />
      </VCol> 
    -->
  </VRow>
</template>
