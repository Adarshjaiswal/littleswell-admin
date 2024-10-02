<script setup>
import Drawer from '@/pages/apps/role/createRoleDrawer/createRoleDrawer.vue';
import { useState } from '@/views/apps/state/useStateStore';

const useStateStore = useState()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalstates = ref(0)
const states = ref([])
const errormessage = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage.value)
const dialog = ref(false)

// Format date function
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



// 👉 Fetching Roles
const fetchState = (currentPage, rowPerPage) => {
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
  };

  useStateStore.fetchState(pageQueryParam, rowPerPage, params)
    .then(response => {
      states.value = response.data.states_data.data;
      totalPage.value = response.data.states_data.last_page;
      totalstates.value = response.data.states_data.total;
      if (response.status === 200) {
        successmessage.value = true;
      } else {
        errormessage.value = true;
      }
    })
    .catch(error => {
      errormessage.value = true;
    });
}



watchEffect(() => {
  fetchState(paginationRef.value, rowPerPage.value);
});

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})


const iscreateJobDrawerVisible = ref(false)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = roles.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = roles.value.length + (currentPage.value - 1) * rowPerPage.value

  return `${firstIndex}-${lastIndex} of ${totalroles.value}`
})



const state = async userdata => {
  const { role_title, description } = userdata;
  try {
    const response = await CreateRole.addRole(role_title, description);
    if (response.status === 201) {
      successmessage.value = true;
      iscreateJobDrawerVisible.value = false; // Close the drawer
      fetchState(paginationRef.value, rowPerPage.value); // Fetch updated roles
    } else {
      errormessage.value = true;
    }
  } catch (error) {
    errormessage.value = true;
  }
}
const computedMoreList = computed(() => {
  return paramId => [
    {
      title: 'Edit',
      value: 'edit',
      prependIcon: 'bx-pencil',
      to: {
        name: 'apps-user-view-id',
        params: { id: paramId },
      },
    },

    {
      title: 'Delete',
      value: 'delete',
      prependIcon: 'bx-trash-alt',
    },
  ]
})

const selectedRoleData = ref({
  role_title: '',
  description: '',
  id: ''
});

const openEditDialog = (role) => {
  selectedRoleData.value = { ...role };
  dialog.value = true;
};

const updateRole = async () => {
  try {
    const response = await CreateRole.updateRole(selectedRoleData.value);
    if (response.status === 200) {
      successmessage.value = true;
      dialog.value = false; // Close the dialog
      fetchState(paginationRef.value, rowPerPage.value); // Fetch updated roles
    } else {
      errormessage.value = true;
    }
  } catch (error) {
    errormessage.value = true;
  }
};

// Function to handle item click (edit or delete)
const handleItemClick = async (action, roleId) => {
  if (action == 'delete') {
    // Call the deleteRole function with the roleId
    await deleteRole(roleId);
  } else if (action == 'edit') {
    // Implement the edit functionality if needed
  }
};

// Function to delete a role
const deleteState = async (stateId) => {
  // alert(roleId)
  if (confirm('Are you sure you want to delete this State?')) {
    try {
      const response = await useStateStore.deleteState(stateId);
      if (response.status === 200) {
        successmessage.value = true;
        iscreateJobDrawerVisible.value = false; // Close the drawer
        fetchState(paginationRef.value, rowPerPage.value); // Fetch updated roles
      } else {
        errormessage.value = true;
      }

    } catch (error) {
      errormessage.value = true;

    }

  }
};

// Function to toggle a State status
const toggleStatus = async (stateId) => {
  // alert(roleId)
  if (confirm('Are you sure you want to Change the status ?')) {
    try {
      const response = await useStateStore.toggleStatus(stateId);
      if (response.status === 200) {
        successmessage.value = true;
        iscreateJobDrawerVisible.value = false; // Close the drawer
        fetchState(paginationRef.value, rowPerPage.value); // Fetch updated roles
      } else {
        errormessage.value = true;
      }

    } catch (error) {
      errormessage.value = true;

    }

  }
};
</script>

<template>
  <section>
    <VRow>
      <!-- Success snackbar -->
      <VSnackbar v-model="errormessage" location="top end" variant="flat" color="error">
        Some Error Occured :(
      </VSnackbar>
      <!-- Error snackbar -->
      <VSnackbar v-model="successmessage" location="top end" variant="flat" color="success">
        Request Sucessful :)
      </VSnackbar>

      <VCol cols="12">
        <VCard title="All States">


          <VDivider />

          <VCardText class="d-flex flex-wrap gap-4">
            <!-- 👉 Export button -->
            <!-- <VBtn variant="tonal" color="secondary" prepend-icon="bx-arrow-from-bottom">
                Export
              </VBtn> -->

            <VSpacer />

            <div class="app-user-search-filter d-flex align-center">
              <!-- 👉 Search  -->
              <VTextField v-model="searchQuery" placeholder="Search State" density="compact" class="me-3" />

              <!-- 👉 Add user button -->
              <!-- <VBtn @click="iscreateJobDrawerVisible = true">
                Add Role
              </VBtn> -->
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap"  height="27rem" fixed-header>
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col" style="width: 48px;">
                  SR. NO.
                </th>
                <th scope="col">
                  STATE
                </th>
                <th scope="col">
                  STATUS
                </th>
                <th scope="col">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr v-for="(state, index) in states" :key="state.id">

                <!-- 👉 Index -->
                <td>
                  <span class="text-capitalize text-base"> {{ index + 1 }}</span>
                </td>
                <!-- 👉 State -->
                <td>

                  <span class="text-capitalize text-base">{{ state.name }}</span>
                </td>
                <td>

                  <span class="text-capitalize text-base">{{ state.active ? 'Active' : 'Deactive' }}</span>
                </td>

                <!-- 👉 Actions -->
                <td class="text-center" style="width: 80px;">
                  <!-- <VBtn icon="bx-trash"  color="error" small>
               
              </VBtn> -->
                  <!-- <v-icon @click="deleteState(state.id)" color="error" size="24">bx-trash</v-icon> -->
                  <span>&nbsp;&nbsp;</span>
                  <v-icon @click="toggleStatus(state.id)" color="primary" size="24">bx-recycle</v-icon>

                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!states.length">
              <tr>
                <td colspan="7" class="text-center text-body-1">
                  No data available
                </td>
              </tr>
            </tfoot>
          </VTable>

          <VDivider />

          <!-- SECTION Pagination -->


          <VCardText class="d-flex flex-wrap justify-end gap-4 pa-2">

            <!-- 👉 Rows per page -->
            <div class="d-flex align-center" style="width: 171px;">
              <span class="text-no-wrap text-sm me-3">Rows per page:</span>
              <VSelect v-model="rowPerPage" density="compact" class="per-page-select" variant="plain"
                :items="[10, 20, 30, 50]" />
            </div>
            <!-- 👉 Total data in table-->
            <div class="d-flex align-center">
              <span class="text-sm text-no-wrap me-3">Total Data: {{ totalstates }}</span>
            </div>

            <!-- 👉 Pagination and pagination meta -->
            <div class="d-flex align-center">
              <VPagination v-model="paginationRef" :length="totalPage" color="primary" prev-icon="mdi-chevron-left"
                next-icon="mdi-chevron-right" first-icon="mdi-chevron-double-left" last-icon="mdi-chevron-double-right" />


            </div>


          </VCardText>
          <!-- !SECTION -->
        </VCard>
      </VCol>
    </VRow>
    <!-- 👉 Add New User -->
    <Drawer v-model:isDrawerOpen="iscreateJobDrawerVisible" @user-data="state" />
  </section>
</template>

<style lang="scss">
.app-user-search-filter {
  inline-size: 385px;
}

.text-capitalize {
  text-transform: capitalize;
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}

.per-page-select {
  margin-block: auto;

  .v-field__input {
    align-items: center;
    padding: 2px;
    font-size: 14px;
  }

  .v-field__append-inner {
    align-items: center;
    padding: 0;
    margin-inline-start: -2.5rem;

    .v-icon {
      margin-inline-start: 0 !important;
    }
  }
}
</style>
