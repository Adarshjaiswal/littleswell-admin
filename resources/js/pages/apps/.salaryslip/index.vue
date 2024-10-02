<script setup>
import { useSalarySlip } from '@/views/apps/salaryslip/useSalarySlipStore';
import axios from 'axios';

const useSalaryStore = useSalarySlip()
const searchQuery = ref('')
const searchQueryYear = ref('')
const rowPerPage = ref(10)
const EmprowPerPage = ref(10)
const currentPage = ref(1)
const currentEmpPage = ref(1)
const totalPage = ref(1)
const totalEmpPage = ref(1)
const totalcities = ref(0)
const totalEmployees = ref(0)
const employees = ref([])
const successmessage = ref(false);
const errormessage = ref(false);
const successMessageText = ref('');
const errorMessageText = ref('');
const isSalaryAddDialogVisible = ref(false);
const paginationRef = ref(currentPage);
const paginationEmpRef = ref(currentEmpPage);
const selectedEmployeeId = ref('');
const selectedEmployeeSalarySlips = ref([]);
const selectedFile = ref('');
const date = ref('');
const selectedEmpId = ref('');
// Create a reference to the selected year
const selectedYear = ref(null);
let isLoading = ref(false)


// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = employees.value.length ? (currentEmpPage.value - 1) * EmprowPerPage.value + 1 : 0
  const lastIndex = employees.value.length + (currentEmpPage.value - 1) * EmprowPerPage.value

  return `${firstIndex}-${lastIndex} of ${totalEmployees.value}`
})

const fetchEmps = (currentEmpPage, EmprowPerPage) => {
  isLoading.value = true;
  const pageEmpQueryParam = currentEmpPage.toString();
  const EmpParams = {
    searchQuery: searchQuery.value, // Get the search query from the search box
  };

  useSalaryStore.fetchEmps(pageEmpQueryParam, EmprowPerPage, EmpParams)
    .then(response => {
      employees.value = response.data.employee_data.data;
      console.log(employees.value);
      totalEmpPage.value = response.data.employee_data.last_page;
      totalEmployees.value = response.data.employee_data.total;
      if (response.status === 200) {
        successMessageText.value = response.data.message;
        successmessage.value = true;
        //successmessage.value = true;
      } else {
        errorMessageText.value = response.data.message;
        errormessage.value = true;

      }
    })
    .catch(error => {
      alert(error)
      errormessage.value = true;
    }).finally(()=>isLoading.value = false);
}
// Watch for changes in the selected state and fetch cities accordingly
watchEffect(() => {
  fetchEmps(paginationEmpRef.value, EmprowPerPage.value);
});

// Function to fetch salary slip data for the selected employee
const fetchSalarySlips = async (emp, rowPerPage, currentPage) => {
  // isLoading.value = true;
  // Set the selected employee ID
  selectedEmpId.value = emp.emp_id;
  if (emp && emp.id) {
    selectedEmployeeId.value = emp.id;
    try {
      const response = await axios.get(`/api/web/emp/salary-slip/${rowPerPage}/?page=${currentPage}&empId=${emp.id}`, {
        params: {
          searchQueryYear: searchQueryYear.value, // Include the searchQueryYear parameter
        },
      });
      if (response.status === 200) {
        selectedEmployeeSalarySlips.value = response.data.salarySlip_data.data;
        successMessageText.value = response.data.message;
        successmessage.value = true;
        console.log(selectedEmployeeSalarySlips.value);
      } else {
        errorMessageText.value = response.data.message;
        errormessage.value = true;
        //console.error('Failed to fetch salary slip data.');
      }
    } catch (error) {
      errorMessageText.value = 'An error occurred while fetching salary slip data.';
      errormessage.value = true;
      // console.error('', error);
    }
  } else {
    errorMessageText.value = 'No employee selected';
    errormessage.value = true;
    //console.error('No employee selected.');
  }
  // isLoading.value = false;
};

// Function to fetch salary slip data for the selected employee
const AddSalarySlips = async (emp) => {
  isSalaryAddDialogVisible.value = true;
  // Set the selected employee ID
  if (emp) {
    selectedEmployeeId.value = emp.id;

  } else {
    console.error('No employee selected.');
  }
};
const onFormSubmit = () => {
  //alert(selectedFile.value[0]);
  // Create a FormData object to send the form data
  const formData = new FormData();
  formData.append('date', date.value);
  formData.append('emp_id', selectedEmployeeId.value);
  formData.append('salary_slip', selectedFile.value[0]);

  // Make an API request to send the formData
  axios.post('/api/web/emp/add-salary-slip', formData)
    .then(response => {

      successMessageText.value = 'Salary Slip Added.';
      successmessage.value = true;
      // Handle the response here (e.g., show success message)
    })
    .catch(error => {
      errorMessageText.value = error;
      errormessage.value = true;
      // Handle errors (e.g., show error message)
    });
    isSalaryAddDialogVisible.value = false;
};

const openSalarySlipUrl = (slip) => {
  // resumeUrl.value=resume;
  window.open(slip, '_blank');
};
//Get Month Name
const getMonthName = (dateString) => {
  const date = new Date(dateString);
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  return monthNames[date.getMonth()];
};
// Generate a list of year options in reverse order
const currentYear = new Date().getFullYear();
const startYear = 2000; // Change this to your desired starting year
const yearOptions = Array.from({ length: currentYear - startYear + 1 }, (_, index) => (currentYear - index).toString());

// Watch for changes in the selectedYear and call fetchSalarySlips accordingly
watch(searchQueryYear, (newYear) => {
  if (selectedEmployeeId.value) {
    fetchSalarySlips({ id: selectedEmployeeId.value }, rowPerPage.value, currentPage.value);
  }
});

</script>

<template>
  <section>
    <VRow>

      <!-- add salary slip -->
      <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 800" v-model="isSalaryAddDialogVisible">
        <VCard class="pa-sm-9 pa-5">
          <!-- 👉 dialog close btn -->
          <DialogCloseBtn variant="text" size="small" @click="isSalaryAddDialogVisible = false" />

          <VCardItem class="text-center">
            <VCardTitle class="text-h5 mb-3">
              Add Salary Slip
            </VCardTitle>

          </VCardItem>

          <VCardText>
            <!-- 👉 Form -->
            <VForm class="mt-6" @submit.prevent="onFormSubmit">
              <VRow>
                <!-- 👉 Select Resume -->
                <VCol cols="6" md="6">
                  <input class="date_input" type="date" v-model="date" label="Default" />
                  <!-- <AppDateTimePicker v-model="date" label="Default" config="{ inline: true }"/> -->
                </VCol>
                <input type="hidden" v-model="selectedEmployeeId">
                <VCol cols="6" md="6">
                  <VFileInput show-size label="Select Salary slip" v-model="selectedFile" accept="application/pdf" />
                </VCol>
                <!-- 👉 Submit and Cancel -->
                <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
                  <VBtn type="submit">
                    Submit
                  </VBtn>
                  <VBtn color="secondary" variant="tonal" @click="isSalaryAddDialogVisible = false">
                    Cancel
                  </VBtn>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VDialog>
      <!-- Success snackbar -->
      <!-- Success snackbar -->
      <VSnackbar v-model="successmessage" location="top end" variant="flat" color="success">
        {{ successMessageText }}
      </VSnackbar>

      <!-- Error snackbar -->
      <VSnackbar v-model="errormessage" location="top end" variant="flat" color="error">
        {{ errorMessageText }}
      </VSnackbar>

      <VCol cols="6">
        <VCard title="Employees">
          <VDivider />

          <VCardText class="d-flex flex-wrap gap-4">
            <!-- 👉 Export button -->
            <!-- <VBtn variant="tonal" color="secondary" prepend-icon="bx-arrow-from-bottom">
                Export
              </VBtn> -->
            <!-- 👉 Search  -->
            <VTextField v-model="searchQuery" placeholder="Search Employee" density="compact" class="" />

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
                <th scope="col" style="inline-size: 48px;">
                  EMP ID
                </th>
                <th scope="col">
                  EMP NAME
                </th>
                <th scope="col">
                  JOB
                </th>
                <th scope="col">
                  ACTION
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr v-for="(emp, index) in employees" :key="emp.id">

                <!-- 👉 Index -->
                <td>
                  <span class="text-capitalize text-base"> {{ emp.emp_id }}</span>
                </td>
                <!-- 👉 emp name -->
                <td>
                  <span class="text-capitalize text-base">{{ emp.emp_name }}</span>
                </td>
                <!-- 👉 job name -->
                <td>
                  <span class="text-capitalize text-base">{{ emp.designation }}</span>
                </td>


                <!-- 👉 Actions -->
                <td class="text-center" style="inline-size: 80px;">
                  <VBtn v-if="emp.is_job_ended !== 1" @click="AddSalarySlips(emp)" color="primary" small >
                    Add
                  </VBtn> &nbsp; &nbsp;
                  <VBtn @click="fetchSalarySlips(emp, rowPerPage, currentPage)" color="primary" small>
                    salary slip
                  </VBtn>



                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!employees.length">
              <tr>
                <td v-if="isLoading" colspan="11" class="text-center text-body-1 ">
                  <VProgressCircular
                    :size="60"
                    color="primary"
                    indeterminate
                    class="my-5"
                  />
                </td>
                <td v-else colspan="11" class="text-center text-body-1 ">
                  No data available
                </td>
              </tr>
            </tfoot>
          </VTable>

          <VDivider />

          <!-- SECTION Pagination -->
          <VCardText class="d-flex flex-wrap justify-end gap-4 pa-2">

            <!-- 👉 Rows per page -->
            <div class="d-flex align-center" style="inline-size: 171px;">
              <span class="text-no-wrap text-sm me-3">Rows per page:</span>
              <VSelect v-model="EmprowPerPage" density="compact" class="per-page-select" variant="plain"
                :items="[10, 20, 30, 50]" />
            </div>
            <!-- 👉 Total data in table-->
            <div class="d-flex align-center">
              <span class="text-sm text-no-wrap me-3">Total Data: {{ totalEmployees }}</span>
            </div>

            <!-- 👉 Pagination and pagination meta -->
            <div class="d-flex align-center">
              <VPagination v-model="paginationEmpRef" :length="totalEmpPage" color="primary" prev-icon="mdi-chevron-left"
                next-icon="mdi-chevron-right" first-icon="mdi-chevron-double-left" last-icon="mdi-chevron-double-right" />
            </div>
          </VCardText>
          <!-- !SECTION -->
        </VCard>
      </VCol>

      <!-- Salary Slip -->
      <VCol cols="6">
        <VCard :title="'Salary Slip - Employee ID: ' + selectedEmpId">
          <VDivider />
          <VCardText class="d-flex flex-wrap gap-4">

            <!-- 👉 Search  -->

            <VSelect v-model="searchQueryYear" :items="yearOptions" label="Select Year" dense />
            <!-- 👉 Add user button -->
            <!-- <VBtn @click="iscreateJobDrawerVisible = true">
                Add Role
              </VBtn> -->

          </VCardText>

          <VDivider />
          <!-- Table here -->

          <VDivider />
          <VTable class="text-no-wrap"  height="27rem" fixed-header>
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col" style="inline-size: 48px;">
                  SR. NO.
                </th>
                <th scope="col">
                  YEAR
                </th>
                <th scope="col">
                  MONTH
                </th>
                <th scope="col">
                  ACTION
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr v-for="(slips, index) in selectedEmployeeSalarySlips" :key="slips.id">

                <!-- 👉 Index -->
                <td>
                  <span class="text-capitalize text-base"> {{ index + 1 }}</span>
                </td>
                <!-- 👉 emp name -->
                <td>
                  <span class="text-capitalize text-base">{{ slips.year }}</span>
                </td>
                <!-- 👉 job name -->
                <td>
                  <span class="text-capitalize text-base">{{ getMonthName(slips.date) }}</span>
                </td>


                <!-- 👉 Actions -->
                <td class="text-center" style="inline-size: 80px;">
                  <VBtn color="primary" @click="openSalarySlipUrl(slips.salary_slip)" small>
                    view
                  </VBtn>
                  <!-- <v-icon @click="deleteCity(city.id)" color="error" size="24">bx-trash</v-icon> -->


                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!selectedEmployeeSalarySlips.length">
              <tr>
                <td colspan="11" class="text-center text-body-1 ">
                  No data available
                </td>
              </tr>
            </tfoot>
          </VTable>
          <VDivider />

          <!-- SECTION Pagination -->
          <VCardText class="d-flex flex-wrap justify-end gap-4 pa-2">

            <!-- 👉 Rows per page -->
            <!-- <div class="d-flex align-center" style="inline-size: 171px;">
              <span class="text-no-wrap text-sm me-3">Rows per page:</span>
              <VSelect v-model="rowPerPage" density="compact" class="per-page-select" variant="plain"
                :items="[10, 20, 30, 50]" />
            </div> -->
            <!-- 👉 Total data in table-->
            <div class="d-flex align-center">
              <!-- <span class="text-sm text-no-wrap me-3">Total Data: {{ totalEmployees }}</span> -->
            </div>

            <!-- 👉 Pagination and pagination meta -->
            <div class="d-flex align-center">
              <!-- <VPagination v-model="paginationRef" :length="totalEmpPage" color="primary" prev-icon="mdi-chevron-left"
                next-icon="mdi-chevron-right" first-icon="mdi-chevron-double-left" last-icon="mdi-chevron-double-right" /> -->
            </div>
          </VCardText>
          <!-- !SECTION -->


        </VCard>
      </VCol>
    </VRow>
    <!-- 👉 Add New User -->

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

.date_input {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #D0D5DA;
  border-radius: 6px;
  color: inherit;
  inline-size: 100%;
  letter-spacing: .009375em;
  min-block-size: var(--v-input-control-height, 56px);
  opacity: var(--v-high-emphasis-opacity);
  padding-block: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0)) var(--v-field-padding-bottom, 6px);
  padding-block: 0;
  padding-inline: 10px;
  padding-inline-end: var(--v-field-padding-end);
  padding-inline-start: var(--v-field-padding-start);
}
</style>
