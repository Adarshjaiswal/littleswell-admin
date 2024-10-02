<script setup>
import Drawer from '@/pages/apps/role/createRoleDrawer/createRoleDrawer.vue'
import { createRole } from '@/views/apps/user/createRole'

const CreateRole = createRole()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalroles = ref(0)
const roles = ref([])
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
const fetchRoles = (currentPage, rowPerPage) => {
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
  };

  CreateRole.fetchRoles(pageQueryParam, rowPerPage, params)
    .then(response => {
      roles.value = response.data.roles_data.data;
      totalPage.value = response.data.roles_data.last_page;
      totalroles.value = response.data.roles_data.total;
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
  fetchRoles(paginationRef.value, rowPerPage.value);
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



const role = async userdata => {
  const { name, email, password, role } = userdata;
  console.log(name, email, password, role);
  try {
    const response = await CreateRole.addRole(name, email, password, role);
    if (response.status === 201) {
      successmessage.value = true;
      iscreateJobDrawerVisible.value = false; // Close the drawer
      fetchRoles(paginationRef.value, rowPerPage.value); // Fetch updated roles
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
  id:''
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
      fetchRoles(paginationRef.value, rowPerPage.value); // Fetch updated roles
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
const deleteRole = async (roleId) => {
 // alert(roleId)
  if (confirm('Are you sure you want to delete this role?')) {
    try{
      const response = await CreateRole.deleteRole(roleId);
    if (response.status === 200) {
      successmessage.value = true;
      iscreateJobDrawerVisible.value = false; // Close the drawer
      fetchRoles(paginationRef.value, rowPerPage.value); // Fetch updated roles
    } else {
      errormessage.value = true;
    }

    }catch (error){
      errormessage.value = true;

    }
   
  }
};







</script>

<template>
  <section>
    <VRow>

      <!-- edit tab -->
      <v-dialog v-model="dialog" width="auto">
        <v-card>
          <VCardText>
            <!-- 👉 Form -->
            <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">

              <VRow>
                <!-- 👉 Role -->
                <VCol cols="12">
                  <VTextField v-model="selectedRoleData.name" :rules="[requiredValidator]" label="Name" />
                </VCol>
                
                <!-- 👉 Description -->
                <VCol cols="12">
                  <VTextField v-model="selectedRoleData.email" :rules="[requiredValidator]" label="Email" />
                </VCol>
                <VCol cols="12">
                  <VTextField v-model="selectedRoleData.password" :rules="[requiredValidator]" label="Password" />
                </VCol>
                <VCol cols="12">
                  <VTextField v-model="selectedRoleData.role" :rules="[requiredValidator]" label="Role" />
                </VCol>
                <input type="hidden" v-model="selectedRoleData.id" />
                <!-- 👉 Submit and Cancel -->
                <VCol cols="12">
                  <VBtn type="submit" @click="updateRole" class="me-3">
                    Submit
                  </VBtn>

                  <VBtn type="reset" variant="tonal" color="secondary" @click="dialog = false">
                    Cancel
                  </VBtn>
                </VCol>
              </VRow>

            </VForm>
          </VCardText>
        </v-card>
      </v-dialog>


    
      <!-- Success snackbar -->
      <VSnackbar v-model="errormessage" location="top end" variant="flat" color="error">
        Some Error Occured :(
      </VSnackbar>
      <!-- Error snackbar -->
      <VSnackbar v-model="successmessage" location="top end" variant="flat" color="success">
        Request Sucessful :)
      </VSnackbar>

      <VCol cols="12">
        <VCard title="All Roles">


          <VDivider />

          <VCardText class="d-flex flex-wrap gap-4">
            <!-- 👉 Export button -->
            <!-- <VBtn variant="tonal" color="secondary" prepend-icon="bx-arrow-from-bottom">
                Export
              </VBtn> -->

            <VSpacer />

            <div class="app-user-search-filter d-flex align-center">
              <!-- 👉 Search  -->
              <VTextField v-model="searchQuery" placeholder="Search Role" density="compact" class="me-3" />

              <!-- 👉 Add user button -->
              <VBtn @click="iscreateJobDrawerVisible = true">
                Add Role
              </VBtn>
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap"  height="27rem" fixed-header>
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col" style="width: 48px;">
                  Sr. No.
                </th>

                <th scope="col">
                  NAME
                </th>
                <th scope="col">
                  EMAIL
                </th>
                <th scope="col">
                  ROLE
                </th>
                <th scope="col">
                  CREATED DATE
                </th>
                <th scope="col">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr v-for="(role, index) in roles" :key="role.id">

                <!-- 👉 Checkbox -->
                <td>
                  <span class="text-capitalize text-base"> {{ index + 1 }}</span>
                </td>
                <!-- 👉 Role -->
                <td>

                  <span class="text-capitalize text-base">{{ role.name }}</span>
                </td>

                <!-- 👉 Description -->
                <td>
                  <span class="text-base">{{ role.email }}</span>
                </td>

                <td>
                  <span class="text-base">{{ role.role }}</span>
                </td>

                <!-- 👉 CREATED DATE -->
                <td class="text-capitalize text-high-emphasis">
                  <span class="text-base">{{ formatDate(role.created_at) }}</span>
                </td>

                <!-- 👉 Actions -->
                <td class="text-center" style="width: 80px;">
                  <!-- <VBtn icon="bx-trash"  color="error" small>
               
              </VBtn> -->
              <v-icon @click="deleteRole(role.id)" color="error" size="24" v-if="role.id!=1"> bx-trash </v-icon>
              <v-icon  color="primary"  @click="openEditDialog(role)" size="24" v-if="role.id!=1">bx-edit</v-icon>
                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!roles.length">
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
              <span class="text-sm text-no-wrap me-3">Total Data: {{ totalroles }}</span>
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
    <Drawer v-model:isDrawerOpen="iscreateJobDrawerVisible" @user-data="role" />
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
