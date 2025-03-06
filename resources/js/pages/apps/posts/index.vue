<script setup>
//import Drawer from '@/pages/apps/vaccine/createJobDrawer/createJobDrawer.vue';
import { useJobs } from '@/views/apps/jobs/usejobStore';
import axios from 'axios'; // Import axios here
const UseJobs = useJobs()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const current_page = ref(1)
const totaljobs = ref(0)
const jobs = ref([])
const errormessage = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage.value)
const dialog = ref(false)
const location = ref([]); // Initialize as an empty array for multiple selections
const states = ref([])
// const skills = ref([])
const selectedStates = ref([]) // Array to hold selected state IDs
const cities = ref([]) // Holds the fetched cities
const selectedSkillId = ref(null);
let isLoading = ref(false)
const editDialog = ref(false); // Controls edit modal visibility
const jobToEdit = ref(null); // Holds the job data for editing
const fileInput = ref(null);

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
// 👉 Fetching Jobs
const fetchPosts = (currentPage, rowPerPage) => {
  isLoading.value = true;
  const pageQueryParam = currentPage.toString();
  const params = {
    searchQuery: searchQuery.value, // Get the search query from the search box
  };

  UseJobs.fetchPosts(pageQueryParam, rowPerPage, params)
    .then(response => {
      jobs.value = response.data.posts_data.data;
      current_page.value = response.data.posts_data.current_page
      totalPage.value = response.data.posts_data.last_page;
      totaljobs.value = response.data.posts_data.total;
      if (response.status === 200) {

        successmessage.value = true;
      } else {
        alert("Error")
        errormessage.value = true;
      }
    })
    .catch(error => {
      errormessage.value = true;
    }).finally(()=>isLoading.value = false);
}
watchEffect(() => {
  fetchPosts(paginationRef.value, rowPerPage.value);
});
// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})
// 👉 search filters

const iscreateJobDrawerVisible = ref(false)
// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})
// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = jobs.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = jobs.value.length + (currentPage.value - 1) * rowPerPage.value
  return `${firstIndex}-${lastIndex} of ${totaljobs.value}`
})



// delete
// Function to delete a job
const deleteJob = (jobId) => {
  if (confirm('Are you sure you want to delete this job?')) {
    axios.delete(`/api/web/posts/delete/${jobId}`)
      .then(response => {
        alert('Job deleted successfully!');
        fetchPosts(currentPage.value, rowPerPage.value); // Refresh job list
      })
      .catch(error => {
        alert('Failed to delete job. Please try again.');
      });
  }
};


const openEditDialog = (job) => {
  jobToEdit.value = { ...job }; // Clone job data
  editDialog.value = true;
};

// Function to handle file upload
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    jobToEdit.value.content_path = URL.createObjectURL(file); // Preview the file
  }
};

// Function to update job details
// Function to update job details
const updateJob = () => {
  // Create FormData object
  const formData = new FormData();
  
  // Add job data to FormData
  formData.append('type', jobToEdit.value.type || '');
  formData.append('text', jobToEdit.value.text || '');
  
  // Handle file upload - only add file if a new one was selected
  if (fileInput.value && fileInput.value.files && fileInput.value.files.length > 0) {
    formData.append('content', fileInput.value.files[0]);
  }
  
  // Send the request
  axios.post(`/api/web/posts/update/${jobToEdit.value.id}`, formData, {
    headers: { 
      'Content-Type': 'multipart/form-data',
      'X-HTTP-Method-Override': 'PUT'
    }
  })
  .then(response => {
    console.log('Success response:', response);
    alert('Job updated successfully!');
    editDialog.value = false;
    fetchPosts(currentPage.value, rowPerPage.value); // Refresh list
  })
  .catch(error => {
    console.error('Error updating job:', error);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
    alert('Failed to update job. Please try again.');
  });
};


// Add these variables to your existing <script setup> section, near the other ref declarations
const addDialog = ref(false);
const newPost = ref({
  type: 'image',
  text: '',
  previewUrl: null
});
const newFileInput = ref(null);

// Add this function to handle file uploads for new posts
const handleNewFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    newPost.value.previewUrl = URL.createObjectURL(file);
  }
};

// Add this function to submit the new post
const createPost = () => {
  // Validate form fields
  if (!newPost.value.type || !newPost.value.text || !newFileInput.value?.files[0]) {
    alert('Please fill in all fields and upload a file');
    return;
  }

  const formData = new FormData();
  formData.append('type', newPost.value.type);
  formData.append('text', newPost.value.text);
  formData.append('content', newFileInput.value.files[0]);

  isLoading.value = true;
  axios.post('/api/web/posts/add', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  .then(response => {
    alert('Post created successfully!');
    addDialog.value = false;
    // Reset form
    newPost.value = {
      type: 'image',
      text: '',
      previewUrl: null
    };
    // Refresh the post list
    fetchPosts(currentPage.value, rowPerPage.value);
  })
  .catch(error => {
    console.error('Error creating post:', error);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
    alert('Failed to create post. Please try again.');
  })
  .finally(() => {
    isLoading.value = false;
  });
};




</script>
<template>
  <section>

    <VDialog v-model="editDialog" max-width="500px">
  <VCard>
    <VCardTitle>Edit Job</VCardTitle>
    <VCardText>
      <VSelect v-model="jobToEdit.type" :items="['image', 'video']" label="Post Type" class="mb-4" />
      <VTextarea v-model="jobToEdit.text" label="Description" class="mb-4" />
      <div v-if="jobToEdit.type === 'image'" class="mb-4">
  <img v-if="jobToEdit.content_path" :src="jobToEdit.content_path" alt="Preview" style="width: 100px; height: auto;" />
  <VFileInput 
    ref="fileInput"
    @change="handleFileUpload" 
    label="Upload Image" 
    accept="image/*" 
    class="mt-2" 
  />
</div>

<!-- For video files -->
<div v-else-if="jobToEdit.type === 'video'" class="mb-4">
  <video v-if="jobToEdit.content_path" :src="jobToEdit.content_path" controls style="width: 100px; height: auto;"></video>
  <VFileInput 
    ref="fileInput"
    @change="handleFileUpload" 
    label="Upload Video" 
    accept="video/*" 
    class="mt-2" 
  />
</div>
    </VCardText>
    <VCardActions>
      <VBtn color="error" @click="editDialog = false">Cancel</VBtn>
      <VBtn color="primary" @click="updateJob">Update</VBtn>
    </VCardActions>
  </VCard>
</VDialog>





<!-- Add this inside your <template> section, before the closing </section> tag -->
  <VDialog v-model="addDialog" max-width="500px">
  <VCard>
    <VCardTitle>Add New Post</VCardTitle>
    <VCardText>
      <VSelect v-model="newPost.type" :items="['image', 'video']" label="Post Type" class="mb-4" required />
      <VTextarea v-model="newPost.text" label="Description" class="mb-4" required />
      <div v-if="newPost.type === 'image'" class="mb-4">
        <VFileInput 
          ref="newFileInput"
          @change="handleNewFileUpload" 
          label="Upload Image" 
          accept="image/*" 
          class="mt-2"
          required 
        />
        <img v-if="newPost.previewUrl" :src="newPost.previewUrl" alt="Preview" style="width: 100px; height: auto; margin-top: 10px;" />
      </div>
      <div v-else-if="newPost.type === 'video'" class="mb-4">
        <VFileInput 
          ref="newFileInput"
          @change="handleNewFileUpload" 
          label="Upload Video" 
          accept="video/*" 
          class="mt-2"
          required 
        />
        <video v-if="newPost.previewUrl" :src="newPost.previewUrl" controls style="width: 100px; height: auto; margin-top: 10px;"></video>
      </div>
    </VCardText>
    <VCardActions>
      <VBtn color="error" @click="addDialog = false">Cancel</VBtn>
      <VBtn color="primary" @click="createPost">Add Post</VBtn>
    </VCardActions>
  </VCard>
</VDialog>


    <VRow>
      <VCol cols="12">
        <VCard title="Vaccine">
      
          <VCardText class="d-flex flex-wrap gap-4">
         
            <VSpacer />
            <div class="app-user-search-filter d-flex align-center">
         
            
              <!-- 👉 Add user button -->
             <!-- Replace the commented out button in your VCardText section with this -->
<VBtn @click="addDialog = true" color="primary" prepend-icon="mdi-plus">
  Add Post
</VBtn>
            </div>
          </VCardText>
          <VDivider />
          <VTable class="text-no-wrap" height="23.7rem" fixed-header>
  <!-- 👉 table head -->
  <thead>
    <tr>
      <th scope="col" style="inline-size: 48px;"> SR. NO. </th>
      <th scope="col"> Post Type </th>
      <th scope="col"> Content Path </th>
      <th scope="col"> Created At </th>
      <th scope="col" class="text-center"> Actions </th>
    </tr>
  </thead>

  <!-- 👉 table body -->
  <tbody>
    <tr v-for="(job, index) in jobs" :key="job.id">
      <!-- 👉 SR. NO. -->
      <td>
        <span class="text-capitalize text-base">
          {{ (current_page - 1) * 10 + index + 1 }}
        </span>
      </td>

      <!-- 👉 Post Type -->
      <td>
        <span class="text-capitalize text-base">{{ job.type }}</span>
      </td>

      <!-- 👉 Content Path (Show Image or Video) -->
      <td>
        <template v-if="job.type === 'image'">
          <img
            :src="job.content_path"
            alt="Image"
            style="width: 50px; height: 100px; object-fit: cover; border-radius: 5px;"
          />
        </template>

        <template v-else-if="job.type === 'video'">
          <video
            :src="job.content_path"
            controls
            style="width: 50px; height: 100px; object-fit: cover; border-radius: 5px;"
          ></video>
        </template>

        <template v-else>
          <span class="text-capitalize text-base">N/A</span>
        </template>
      </td>

      <!-- 👉 CREATED DATE -->
      <td class="text-capitalize text-high-emphasis">
        <span class="text-base">{{ formatDate(job.created_at) }}</span>
      </td>

      <!-- 👉 Actions (Edit & Delete) -->
      <td class="text-center">
        <!-- Edit Button -->
        <v-btn icon color="primary" @click="openEditDialog(job)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <!-- Delete Button -->
        <v-btn icon color="error" @click="deleteJob(job.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </td>
    </tr>
  </tbody>

  <!-- 👉 table footer -->
  <tfoot v-show="!jobs.length">
    <tr>
      <td v-if="isLoading" colspan="11" class="text-center text-body-1 ">
        <VProgressCircular :size="60" color="primary" indeterminate class="my-5" />
      </td>
      <td v-else colspan="11" class="text-center text-body-1 "> No data available </td>
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
            <!-- 👉 Total data in table-->
            <div class="d-flex align-center">
              <span class="text-sm text-no-wrap me-3">Total Data: {{ totaljobs }}</span>
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
    <Drawer v-model:isDrawerOpen="iscreateJobDrawerVisible" @user-data="job" />
  </section>
</template>




<style lang="scss">
.scrollable-city {
  max-block-size: 100px !important;

  /* Adjust the max height as needed */
  overflow-y: auto !important;

  /* Enable vertical scrolling */
}

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
