<script setup>

import { createAmount } from '@/views/apps/amount/useAmountStore';
import axios from 'axios';
// import { read, utils } from 'xlsx';
import * as XLSX from 'xlsx';

const CreateAmount = createAmount()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const current_page = ref(1)
const totalSheetData = ref(0)
const amounts = ref([])
const errormessage = ref(false)
const errorForInvalidEmpId = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage.value)
const dialog = ref(false)
const selectedFile = ref('');
// New data property to store Excel data
const excelData = ref([]);
const headers = ref([]);
let StringJsonData = null;
const loading = ref(false);
let duplicateEmpId = ref([]);
let duplicateEmpIdStatus = ref("FAILED");
let uploadedSheetData = ref([])
let totalData = ref(0);
let uploadedData= ref(0)
let dialogueTitle = ref("");
let duplicateEmpIds = ref("");
let duplicateEmpPhone = ref("");
let isVerify = ref(false)



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

// For Showing an excel sample sheet before import the employees data
const downloadExcelFile = () => {
  const excelFilePath = '/excel_sample_sheet/import-employee-sample.xlsx';

  // Create an anchor element
  const link = document.createElement('a');
  link.href = excelFilePath;

  // Set the download attribute with the desired file name
  link.download = 'import_employee_sample.xlsx';

  // Append the link to the body
  document.body.appendChild(link);

  // Trigger a click on the link to start the download
  link.click();

  // Remove the link from the body after the download is initiated
  document.body.removeChild(link);
};



// =====Function to handle file upload and data extraction======
const uploadExcelSheet = async() => {
  uploadedData.value = 0;
  if (!selectedFile.value) {
    // Handle the case where no file is selected
    console.error("No file selected");
    return;
  }

  try {
    if(duplicateEmpIds.value || duplicateEmpPhone.value){
      dialogueTitle.value = "Potential duplicate IDs or phone detected in the Excel sheet"
      dialog.value = true;
    }else{
      const file = selectedFile.value[0];
      const chunkSize = 500;
      await readExcelFileInChunks(chunkSize, file);
    // loading.value = false;
    }
  } catch (error) {
    console.error('Error reading Excel file:', error);
  } finally {
    loading.value = false;
  }
};

const readExcelFileInChunks = async (chunkSize, file) => {
  console.log("", file.name);
  return new Promise(async (resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const range = XLSX.utils.decode_range(sheet['!ref']);
        const totalRows = range.e.r - range.s.r + 1;

        const delayBetweenChunks = 3000; // Set your desired delay in milliseconds

        for (let startRow = range.s.r + 1; startRow <= range.e.r; startRow += chunkSize) {
          const endRow = Math.min(startRow + chunkSize - 1, range.e.r);
          const jsonData = [];

          for (let rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
            const row = {};
            for (let colIndex = range.s.c; colIndex <= range.e.c; colIndex++) {
              const cellAddress = XLSX.utils.encode_cell({ r: rowIndex, c: colIndex });
              const cellValue = sheet[cellAddress]?.v;
              const columnHeader = sheet[XLSX.utils.encode_cell({ r: range.s.r, c: colIndex })]?.v;

              row[columnHeader] = cellValue !== undefined ? cellValue : '';
            }
            jsonData.push(row);
          }

          // Process the chunk of data
          await processDataForRow(jsonData, file.name);
        }

        await getImportedExcelSheetData(paginationRef.value, rowPerPage.value,file)
        console.log('Data processing complete');
        resolve();
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
};

const processDataForRow = async (StringJsonData,fileName) => {
  try {
    console.log("chuncks length",StringJsonData.length);
    const response = await axios.post('/api/web/user/import-bulk-data', { StringJsonData, fileName});

    if (response.data.ifEmpIdExists) {
      // loading.value = false;
      errorForInvalidEmpId.value = true
    }
    else if (response.status == 200) {
      // loading.value = true
      uploadedData.value = response.data.count
      // loading.value = false;
      console.log("DATABASE count",response.data.count);
      successmessage.value = true;
    } else {
      console.error('Failed to send data to the API');
      loading.value = false;
    }
  } catch (error) {
    console.error('Error processing row:', error);
  }
};


// =====Main Function for verify excel sheet ========
const verifyExcelSheet = async() => {
  totalData.value = 0;
  if (!selectedFile.value) {
    console.error("No file selected");
    return;
  }

  try {
    loading.value = true;
    const file = selectedFile.value[0];
    const chunkSize = 5000;

    let isDuplicateInSheet = await verifyExcelSheetDataDuplicate(file);
    if(!isDuplicateInSheet.status){
      console.log("No Duplicates in Sheet Proceed next for checking entries in table");
      await readExcelFileInOnce(file, chunkSize);
    }else{
      console.log("Potential duplicate IDs or phone numbers detected in the Excel sheet", isDuplicateInSheet);
      duplicateEmpIds.value = isDuplicateInSheet.EmpIds.join(",  ")
      duplicateEmpPhone.value = isDuplicateInSheet.EpmPhone.join(",  ");
      dialogueTitle.value = "Potential duplicate IDs or phone detected in the Excel sheet"
      dialog.value = true;
    }
  } catch (error) {
    console.error('Error reading Excel file:', error);
  } finally {
    loading.value = false;
  }
};

const readExcelFileInOnce = async (file, chunkSize) => {
  return new Promise(async (resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const range = XLSX.utils.decode_range(sheet['!ref']);
        const totalRows = range.e.r - range.s.r + 1;

        const delayBetweenChunks = 3000; // Set your desired delay in milliseconds

        for (let startRow = range.s.r; startRow <= range.e.r; startRow += chunkSize) {
          const endRow = Math.min(startRow + chunkSize - 1, range.e.r);
          const jsonData = [];

          for (let rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
            const row = {};
            for (let colIndex = range.s.c; colIndex <= range.e.c; colIndex++) {
              const cellAddress = XLSX.utils.encode_cell({ r: rowIndex, c: colIndex });
              const cellValue = sheet[cellAddress]?.v;
              const columnHeader = sheet[XLSX.utils.encode_cell({ r: range.s.r, c: colIndex })]?.v;

              row[columnHeader] = cellValue !== undefined ? cellValue : '';
            }
            jsonData.push(row);
          }

          // Process the chunk of data and push the promise to the array
          await new Promise((resolve) => {
            setTimeout(() => {
              verifyExcelSheetData(jsonData, file.name);
              resolve();
            }, delayBetweenChunks * startRow / chunkSize);
          });
        }
        loading.value = false;
        isVerify.value = true;
        console.log('Data processing complete');
        resolve();
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
};

// Verify If Excel Sheet rows already is in Database or not
const verifyExcelSheetData = async (StringJsonData,fileName) => {
  try {
    // console.log("chunk length at verify", StringJsonData.length);
    const response = await axios.post('/api/web/user/verify-bulk-data-sheet', { StringJsonData, fileName});
      let duplicateTableEmpIds = []
      let duplicateTableEmpPhones = []

      if (response.data.existingEmpIds) {
        dialogueTitle.value = "Given Employee Id Already Exists in Database";
        // loading.value = true;
        dialog.value = true;
        // array of duplicate ids
        duplicateTableEmpIds.push(response.data.existingEmpIds)
        // console.log("Response comming from Database",response.data);
        duplicateEmpIds.value = duplicateTableEmpIds.join(", ");
        // loading.value = false;
        errorForInvalidEmpId.value = true;

      }else if(response.data.existingEmpPhones){
        duplicateTableEmpPhones.push(response.data.existingEmpPhones);
        dialogueTitle.value = "Given Phone Number Already Exists in Database";
        duplicateEmpPhone.value = duplicateTableEmpPhones.join(", ")
        // loading.value = true;
        dialog.value = true;
        // console.log("Response comming from Database",response.data);
        // loading.value = false;
        errorForInvalidEmpId.value = true
      }else
      if (response.status == 200) {
        // totalData.value = totalData.value+response.data.data
        // console.log(totalData.value);
        // loading.value = false;
        console.log(response.data);
        // Data was successfully sent to the API
        successmessage.value = true;
        // You can handle success messages or further actions here
      } else {
        console.error('Failed to send data to the API');
        // loading.value = false;
        // Handle error or display error messages
      }
  } catch (error) {
    console.error('Error processing row:', error);
  }
};


// Verify If Excell Sheet Have Duplicate rows 
const verifyExcelSheetDataDuplicate = async (file, chunkSize=50000) => {
  try {
    return new Promise(async (resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const range = XLSX.utils.decode_range(sheet['!ref']);
        const totalRows = range.e.r - range.s.r + 1;

        const delayBetweenChunks = 3000; // Set your desired delay in milliseconds

        for (let startRow = range.s.r; startRow <= range.e.r; startRow += chunkSize) {
          const endRow = Math.min(startRow + chunkSize - 1, range.e.r);
          const jsonData = [];

          for (let rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
            const row = {};
            for (let colIndex = range.s.c; colIndex <= range.e.c; colIndex++) {
              const cellAddress = XLSX.utils.encode_cell({ r: rowIndex, c: colIndex });
              const cellValue = sheet[cellAddress]?.v;
              const columnHeader = sheet[XLSX.utils.encode_cell({ r: range.s.r, c: colIndex })]?.v;

              row[columnHeader] = cellValue !== undefined ? cellValue : '';
            }
            jsonData.push(row);
          }

          // Process the chunk of data and push the promise to the array
          // Extract EmpId and EmpPhone values from the jsonData
          const empIds = jsonData.map(row => row['EmpId']);
          const empPhones = jsonData.map(row => row['EmpPhone']);

          // Check for duplicate EmpId or EmpPhone
          let response = []
          const duplicateEmpIds = findDuplicates(empIds);
          const duplicateEmpPhones = findDuplicates(empPhones);
          totalData.value = totalData.value+empIds.length-1

          if (duplicateEmpIds.length > 0 || duplicateEmpPhones.length > 0) {
          resolve ({status:true, EmpIds: duplicateEmpIds, EpmPhone: duplicateEmpPhones})
          } else {
            resolve ({status: false})
          }
        }
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
  } catch (error) {
    console.error('Error verifying Excel sheet data:', error);
  }
};
const findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) !== index);




// ========Testing=========

const getImportedExcelSheetData = async(currentPage, rowPerPage) =>{
  if(selectedFile.value){
    let params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
    fileName: selectedFile.value[0].name,
  };

  let respons = axios.post(`/api/web/user/employee/fetch-excell-sheet/${rowPerPage}/?page=${currentPage.toString()}`, { ...params })
    .then(response => {
      uploadedSheetData = response.data.users_data.data;
      current_page.value = response.data.users_data.current_page
      console.log("==",response.data.users_data);
      totalPage.value = response.data.users_data.last_page;
      totalSheetData.value = response.data.users_data.total;
      if (response.status == 200) {
        successmessage.value = true;
      } else {
        errormessage.value = true;
      }
    })
    .catch(error => {
      errormessage.value = true;
    });
  }else{
    return;
  }
}

  watchEffect(() => {
    getImportedExcelSheetData(paginationRef.value, rowPerPage.value, selectedFile.value[0]);
  });

  watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = uploadedSheetData.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = uploadedSheetData.value.length + (currentPage.value - 1) * rowPerPage.value

  return `${firstIndex}-${lastIndex} of ${totalSheetData.value}`
})




</script>

<template>
  <section>

     <!--Error Dialogue tab -->
      <v-dialog v-model="dialog" width="700">
        <v-card>
          <VCardText >
            <!-- �??? Form -->
            <div class="text-h6" >{{dialogueTitle}}</div>
            <div class="text-body-2">Emp Ids: {{ duplicateEmpIds }}</div>
            <div class="text-body-2">Emp Phone: {{ duplicateEmpPhone }}</div>
          </VCardText>
          <VCol cols="12" class="d-flex gap-4 justify-center">
            <VBtn @click="dialog=false">OK</VBtn>
              
          </VCol>
        </v-card>
      </v-dialog>

    <VRow>
      <VCol cols="12" sm="12">
        <v-card title="Import Employees" class="px-3 pb-3">
          <div class="px-5 pb-3">Download A Sample excel sheet <button @click="downloadExcelFile" download class=" text-primary">Click Here</button></div>
          <div class="px-5 pb-3 ">Total Rows: {{ totalData }}</div>
          <div class="px-5 pb-3">Uploaded Rows: {{ uploadedData }}</div>
          <VForm class="mt-6" @submit.prevent="onFormSubmit">
            <VRow>
              <!-- 👉 input -->
              <VCol cols="12" md="12">
                <VFileInput label="File input" prepend-icon="bx-spreadsheet" v-model="selectedFile"
                  accept="application/excel" v-if="!loading"/>
                <div v-else class="d-flex gap-4 justify-center">
                  <!-- Show a loader here, e.g., a spinner or progress indicator -->
                  <VProgressCircular  indeterminate size="40" width="5" color="primary"></VProgressCircular>
                </div>
              </VCol>
              <VCol cols="12" class="d-flex gap-4 justify-center">
                <VBtn @click="verifyExcelSheet" >Verify your Sheet</VBtn>
              <!-- <VBtn @click="showImportedExcelSheet" v-if="!loading">Show Preview</VBtn> -->
              <VBtn type="reset" color="secondary" variant="tonal" >Reset</VBtn>
              <!-- <VBtn @click="sendJsonDataToApi" color="primary" v-if="!loading">Upload Data</VBtn> -->
              <!-- <VBtn @click="testUploadExcelSheet"  color="primary" v-if="!loading">Test Upload Data</VBtn> -->

              <VBtn @click="uploadExcelSheet"  color="primary" v-if="isVerify"  >Upload Data</VBtn>
              
              
            </VCol>
            </VRow>
          </VForm>
          


        </v-card>
      </VCol>
    </VRow>

    <VRow>
      <!-- Success snackbar -->
      <VSnackbar v-model="errormessage" location="top end" variant="flat" color="error">
        Some Error Occured :(
      </VSnackbar>
      <VSnackbar v-model="errorForInvalidEmpId" location="top end" variant="flat" color="error">
        Your Exesl Sheet Have Some Error Imployee Id :(
      </VSnackbar>
      <!-- Error snackbar -->
      <VSnackbar v-model="successmessage" location="top end" variant="flat" color="success">
        Request Sucessful :)
      </VSnackbar>
      <VCol cols="12">
        <VCard title="Preview Data">
          <VDivider />
          <VCardText class="d-flex flex-wrap gap-4">
            <VSpacer />
            <div class="app-user-search-filter d-flex align-center">
              <!-- 👉 Search  -->
              <VTextField v-model="searchQuery" placeholder="Search" density="compact" class="me-3" />
            </div>
          </VCardText>
          <VDivider />
          <VTable class="text-no-wrap"  height="27rem" fixed-header>
            <!-- 👉 table head -->
            <thead>
              <!-- <tr>
                <th v-for="(header, headerIndex) in headers" :key="headerIndex">{{ header }}</th>
              </tr> -->
              <tr>

                <th scope="col">
                  SR. NO.
                </th>
                <th scope="col">
                  Emp ID
                </th>
                <th scope="col">
                  Emp NAME
                </th>
                <th scope="col">
                  PHONE NUMBER
                </th>
                <th scope="col">
                  sex
                </th>
                <th scope="col">
                 Designation
                </th>
                <th scope="col">
                  Adhar Number
                </th>
                <th scope="col">
                  DOB
                </th>
                <th scope="col">
                  DOJ
                </th>
                <th scope="col">
                  marital_status
                </th>
                <th scope="col">
                  Emp Father Name
                </th>
                <th scope="col">
                  mother_toungue
                </th>
                <th scope="col">
                  pancard_number
                </th>
                <th scope="col">
                  payment_status
                </th>
                
                <th scope="col">
                  Bank Acc No
                </th>
                <th scope="col">
                  Bank Name
                </th>
                <th scope="col">
                  Bank IFSC
                </th>
                <th scope="col">
                  Emp Branch
                </th>
                <th scope="col">
                  Emp uan
                </th>
                <th scope="col">
                  emp_department
                </th>
                <th scope="col">
                  emp_division
                </th>
                <th scope="col">
                  emp_esi_applicable
                </th>

                <th scope="col">
                  emp_esi_number
                </th>
                <th scope="col">
                  emp_pf_applicable
                </th>
                <th scope="col">
                  emp_pf_no
                </th>
                <th scope="col">
                  emp_pt_applicable
                </th>
                <th scope="col">
                  emp_division
                </th>
                <th scope="col">
                  emp_permanent_address
                </th>
                <th scope="col">
                  emp_present_address
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <!-- <tr v-for="(row, rowIndex) in excelData" :key="rowIndex">
                <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
                
              </tr> -->
              <tr v-for="(row, rowIndex) in uploadedSheetData" :key="rowIndex">
                <td>
                  <span class="text-capitalize text-base"> {{ rowIndex + 1 }}</span>
                </td>
                <!-- <td >{{ row }}</td> -->
                <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_id }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_name }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.phone_number }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.sex }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.designation }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.aadhar_number }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                <span class="text-base">{{ row.dob }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.doj }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.marital_status }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_father_name }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.mother_tounge }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.pancard_number }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.payment_status }}</span>
               </td>

               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.bank_name }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.bank_ac_no }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.ifsc }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_branch }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.uan }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_department }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_division }}</span>
               </td>

               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_esi_applicable }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_esi_number }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_pf_applicable }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_pf_no }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_pt_applicable }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_division }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_permanent_address }}</span>
               </td>
               <td class="text-capitalize text-high-emphasis">
                 
                 <span class="text-base">{{ row.emp_present_address }}</span>
               </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!uploadedSheetData.length">
              <tr>
                <td v-if="loading" colspan="11" class="text-center text-body-1 ">
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
              <VSelect v-model="rowPerPage" density="compact" class="per-page-select" variant="plain"
                :items="[10, 20, 30, 50]" />
            </div>
            <!-- 👉 Total data in table -->
            <div class="d-flex align-center">
              <span class="text-sm text-no-wrap me-3">
                Total Data: {{ totalSheetData }} <!-- Remove -1 -->
              </span>
            </div>
            <!-- 👉 Pagination and pagination meta -->
            <div class="d-flex align-center">
              <VPagination v-model="paginationRef" :length="totalPage" color="primary" prev-icon="mdi-chevron-left"
                next-icon="mdi-chevron-right" first-icon="mdi-chevron-double-left" last-icon="mdi-chevron-double-right" 
              />
                
            </div>
          </VCardText>
          <!-- !SECTION -->
        </VCard>
      </VCol>
    </VRow>
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