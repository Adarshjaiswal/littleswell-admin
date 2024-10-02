<script setup>
import { useCity } from '@/views/apps/city/useCityStore';
import axios from 'axios'; // Import axios here

const useCityStore = useCity()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalcities = ref(0)
const states = ref([])
const errormessage = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage);
const selectedState = ref(null); // Store the selected state
const cities = ref([]); // Store the fetched cities for the selected state


// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = roles.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = roles.value.length + (currentPage.value - 1) * rowPerPage.value

  return `${firstIndex}-${lastIndex} of ${totalroles.value}`
})
// Function to delete a role
const deleteCity = async (cityId) => {
  // alert(roleId)
  if (confirm('Are you sure you want to delete this City?')) {
    try {
      const response = await useCityStore.deleteCity(cityId);
      if (response.status === 200) {
        successmessage.value = true;
        fetchCities(); // Fetch updated roles
      } else {
        errormessage.value = true;
      }
    } catch (error) {
      errormessage.value = true;
    }

  }
};

// Function to toggle a State status
const toggleCityStatus = async (stateId) => {
  // alert(roleId)
  if (confirm('Are you sure you want to Change the status ?')) {
    try {
      const response = await useCityStore.toggleCityStatus(stateId);
      if (response.status === 200) {
        successmessage.value = true;
       
        fetchCities();
      } else {
        errormessage.value = true;
      }

    } catch (error) {
      errormessage.value = true;

    }

  }
};
onMounted(() => {
 // Get state api
  axios.get('/api/web/job/get-states')
    .then(response => {
      states.value = response.data.states_data.map(state => ({
        id: state.id,
        name: state.name
      }));
      console.log(states.value); // Check the states array here
    })
    .catch(error => {
      console.error('Error fetching states:', error);
    });

});


// Function to fetch cities for the selected state
const fetchCities = async () => {
  if (selectedState.value) {
    try {
      const response = await axios.get(`/api/web/city/get-cities/${rowPerPage.value}/?state_id=${selectedState.value}&page=${currentPage.value}&searchQuery=${searchQuery.value}`);
      cities.value = response.data.cities_data.data;
      totalPage.value = response.data.cities_data.last_page;
      totalcities.value = response.data.cities_data.total;
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  }
}
// Watch for changes in the selected state and fetch cities accordingly
watchEffect(() => {
  fetchCities();
});

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

      <VCol cols="4">
        <VCard title="Select State">
          <VCardText class="d-flex flex-wrap gap-4">
            <VAutocomplete label="States" v-model="selectedState" :items="states" multiple clearable class="m-1" item-title="name" item-value="id" />
          </VCardText>
        </VCard>
      </VCol>








      <VCol cols="8">
        <VCard title="Cities">
          <VDivider />

          <VCardText class="d-flex flex-wrap gap-4">
            <!-- 👉 Export button -->
            <!-- <VBtn variant="tonal" color="secondary" prepend-icon="bx-arrow-from-bottom">
                Export
              </VBtn> -->


           
              <!-- 👉 Search  -->
              <VTextField v-model="searchQuery" placeholder="Search City" density="compact" class="" />

              <!-- 👉 Add user button -->
              <!-- <VBtn @click="iscreateJobDrawerVisible = true">
                Add Role
              </VBtn> -->
       
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
                  CITY
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
              <tr v-for="(city, index) in cities" :key="city.id">

                <!-- 👉 Index -->
                <td>
                  <span class="text-capitalize text-base"> {{ index + 1 }}</span>
                </td>
                <!-- 👉 State -->
                <td>

                  <span class="text-capitalize text-base">{{ city.name }}</span>
                </td>
                <td>

                  <span class="text-capitalize text-base">{{ city.active ? 'Active' : 'Deactive' }}</span>
                </td>

                <!-- 👉 Actions -->
                <td class="text-center" style="width: 80px;">
                  <!-- <VBtn icon="bx-trash"  color="error" small>
               
              </VBtn> -->
                  <!-- <v-icon @click="deleteCity(city.id)" color="error" size="24">bx-trash</v-icon> -->
                  <span>&nbsp;&nbsp;</span>
                  <v-icon @click="toggleCityStatus(city.id)" color="primary" size="24">bx-recycle</v-icon>

                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!cities.length">
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
              <span class="text-sm text-no-wrap me-3">Total Data: {{ totalcities }}</span>
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
    <!-- <Drawer v-model:isDrawerOpen="iscreateJobDrawerVisible" @user-data="state" /> -->
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
