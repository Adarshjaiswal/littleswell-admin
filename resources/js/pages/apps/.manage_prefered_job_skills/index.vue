<script setup>
import Drawer from '@/pages/apps/manage_prefered_job_skills/createSkillDrawer/createSkillDrawer.vue';
import { createFrefredSkill } from '@/views/apps/preferedjobskills/useSkillStore';
import { ref } from 'vue';


const createFrefredSkill1 = createFrefredSkill()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalskills = ref(0)
const current_page = ref(1)
const skills = ref([])
const errormessage = ref(false)
const successmessage = ref(false)
const paginationRef = ref(currentPage.value)
const dialog = ref(false)
const sub_skill_dialog = ref(false)
const editSubSkillDialog = ref(false)
let isLoading = ref(false)

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


// �??? Fetching Roles
const fetchSkills = (currentPage, rowPerPage) => {
    isLoading.value = true;
    const pageQueryParam = currentPage.toString();
    const params = {
        searchQuery: searchQuery.value, // Get the search query from the search box
    };
    // Fetch prefered skills
    createFrefredSkill1.fetchSkills(pageQueryParam, rowPerPage, params)
        .then(response => {
            skills.value = response.data.skills_data.data;
            current_page.value = response.data.skills_data.current_page
            totalPage.value = response.data.skills_data.last_page;
            totalskills.value = response.data.skills_data.total;
            if (response.status === 200) {
                successmessage.value = true;
                isLoading.value = false;
            } else {
                errormessage.value = true;
            }
        })
        .catch(error => {
            errormessage.value = true;
        })
}

watchEffect(() => {
    fetchSkills(paginationRef.value, rowPerPage.value);
});

// �??? watching current page
watchEffect(() => {
    if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value
})


const iscreateJobDrawerVisible = ref(false)

// �??? watching current page
watchEffect(() => {
    if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value
})

// �??? Computing pagination data
const paginationData = computed(() => {
    const firstIndex = roles.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
    const lastIndex = roles.value.length + (currentPage.value - 1) * rowPerPage.value

    return `${firstIndex}-${lastIndex} of ${totalroles.value}`
})



const skill = async userdata => {
    const { skill_title, description } = userdata;
    try {
        const response = await createFrefredSkill.addSkill(skill_title, description);
        if (response.status === 201) {
            successmessage.value = true;
            iscreateJobDrawerVisible.value = false; // Close the drawer
            fetchSkills(paginationRef.value, rowPerPage.value); // Fetch updated roles
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
});

const selectedSkillData = ref({
    skill_title: '',
    description: '',
    id: ''
});
const selectedSubSkillData = ref({
    pre_sub_skill_title: '',
    id: ''
});
const SubSkillData = ref({
    id: '',
    pre_skill_id: '',
    title: '',
})
// Edit skill data
const openEditDialog = (skill) => {
    selectedSkillData.value = { ...skill };
    dialog.value = true;
};
// Edit sub skills
const openEditsubDialog = (subSkill) => {
    SubSkillData.value = { ...subSkill }
    editSubSkillDialog.value = true;
}
// open dialogue box for add sub skills
const openSubSkillDialog = (skill) => {
    selectedSubSkillData.value = { ...skill };
    sub_skill_dialog.value = true;
}

const updateSkill = async () => {
    try {
        const response = await createFrefredSkill.updateSkill(selectedSkillData.value);
        if (response.status === 200) {
            successmessage.value = true;
            dialog.value = false; // Close the dialog
            fetchSkills(paginationRef.value, rowPerPage.value); // Fetch updated roles
        } else {
            errormessage.value = true;
        }
    } catch (error) {
        errormessage.value = true;
    }
};

const updateSubSkill = async () => {
    // console.log([SubSkillData.value]);
    try {
        const response = await createFrefredSkill.updateSubSkill(SubSkillData.value);
        // console.log(response.data.data);
        if (response.status === 200) {
            successmessage.value = true;
            editSubSkillDialog.value = false; // Close the dialog
            fetchSkills(paginationRef.value, rowPerPage.value); // Fetch updated roles
        } else {
            errormessage.value = true;
        }
    } catch (error) {
        errormessage.value = true;
    }
}
const deleteSubSkill = async (id) => {
    try {
        const response = await createFrefredSkill.deleteSubSkill(id);
        if (response.status === 200) {
            successmessage.value = true;
            editSubSkillDialog.value = false; // Close the dialog
            fetchSkills(paginationRef.value, rowPerPage.value); // Fetch updated roles
        } else {
            errormessage.value = true;
        }
    } catch (error) {
        errormessage.value = true;
    }
}

const addSubSkill = async () => {
    try {
        const response = await createFrefredSkill.addSubSkill(selectedSubSkillData.value);
        if (response.status == 201) {
            successmessage.value = true;
            sub_skill_dialog.value = false; // Close the dialog
            fetchSkills(paginationRef.value, rowPerPage.value); // Fetch updated roles

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
const deleteSkill = async (skillId) => {
    // alert(roleId)
    if (confirm('Are you sure you want to delete this prefered skill title?')) {
        try {
            const response = await createFrefredSkill.deleteSkill(skillId);
            if (response.status === 200) {
                successmessage.value = true;
                iscreateJobDrawerVisible.value = false; // Close the drawer
                fetchSkills(paginationRef.value, rowPerPage.value); // Fetch updated roles
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

            <!-- edit prefered skill tab -->
            <v-dialog v-model="dialog" width="auto">
                <v-card>
                    <VCardText>
                        <!-- �??? Form -->
                        <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">

                            <VRow>
                                <!-- �??? Role -->
                                <VCol cols="12">
                                    <VTextField v-model="selectedSkillData.pre_skill_title" :rules="[requiredValidator]"
                                        label="prefered skill title" />
                                </VCol>


                                <input type="hidden" v-model="selectedSkillData.id" />
                                <!-- �??? Submit and Cancel -->
                                <VCol cols="12">
                                    <VBtn type="submit" @click="updateSkill" class="me-3">
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

            <!-- Add Prefered Sub Skills -->
            <v-dialog v-model="sub_skill_dialog" width="auto">
                <v-card>
                    <VCardText>
                        <!-- �??? Form -->
                        <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">

                            <VRow>
                                <!-- �??? Role -->
                                <VCol cols="12">
                                    <VTextField v-model="selectedSubSkillData.pre_sub_skill_title"
                                        :rules="[requiredValidator]" label="prefered sub skill title" />
                                </VCol>


                                <input type="hidden" v-model="selectedSubSkillData.id" />
                                <!-- �??? Submit and Cancel -->
                                <VCol cols="12">
                                    <VBtn type="submit" @click="addSubSkill" class="me-3">
                                        Submit
                                    </VBtn>

                                    <VBtn type="reset" variant="tonal" color="secondary" @click="sub_skill_dialog = false">
                                        Cancel
                                    </VBtn>
                                </VCol>
                            </VRow>

                        </VForm>
                    </VCardText>
                </v-card>
            </v-dialog>

            <!-- Edit Prefered Sub Skills -->
            <v-dialog v-model="editSubSkillDialog" width="800">
                <v-card>
                    <VCardText>
                        <!-- �??? Form -->
                        <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">

                            <VRow class="d-flex pa-5" v-for="(sub_skill, index) in SubSkillData" :key="sub_skill.id">
                                <!-- �??? Role -->
                                <VCol cols="10">
                                    <VTextField v-model="sub_skill.title" :rules="[requiredValidator]"
                                        label="prefered skill title" />
                                </VCol>
                                <VCol cols="2">

                                    <VRow class="d-flex justify-space-around pa-5">

                                        <VBtn type="submit" color="error" class="" @click="deleteSubSkill(sub_skill.id)">
                                            Delete
                                        </VBtn>
                                    </VRow>
                                    <input type="hidden" v-model="sub_skill.id" />
                                </VCol>
                                <!-- �??? Submit and Cancel -->
                                
                            </VRow>
                            <VRow cols="" class="d-flex gap-3 justify-center px-16 pt-10 pb-8">
                                    <VBtn type="submit" @click="updateSubSkill" class="">
                                        Submit
                                    </VBtn>

                                    <!-- <VBtn type="submit" color="error" class="" @click="deleteSubSkill">
                                        Delete
                                    </VBtn> -->

                                    <VBtn type="submit" variant="tonal" color="secondary"
                                        @click="editSubSkillDialog = false">
                                        Cancel
                                    </VBtn>
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
                <VCard title="All Skills">


                    <VDivider />

                    <VCardText class="d-flex flex-wrap gap-4">
                        <!-- �??? Export button -->


                        <VSpacer />

                        <div class="app-user-search-filter d-flex align-center">
                            <!-- �??? Search  -->
                            <VTextField v-model="searchQuery" placeholder="Search Skill" density="compact" class="me-3" />

                            <!-- �??? Add user button -->
                            <VBtn @click="iscreateJobDrawerVisible = true">
                                Add Skill
                            </VBtn>
                        </div>
                    </VCardText>

                    <VDivider />

                    <VTable class="text-no-wrap"  height="27rem" fixed-header>
                        <!-- �??? table head -->
                        <thead>
                            <tr>
                                <th scope="col" style="width: 48px;">
                                    SR. NO.
                                </th>

                                <th scope="col">
                                    SKILL
                                </th>
                                <th scope="col">
                                    SUB SKILLS
                                </th>

                                <th scope="col">
                                    CREATED DATE
                                </th>

                                <th scope="col">
                                    SUB SKILL ACTIONS
                                </th>

                                <!-- <th scope="col">
                                    STATUS
                                </th> -->
                                <th scope="col">
                                    ADD SUB SKILLS
                                </th>
                                <th scope="col">
                                    ACTIONS
                                </th>
                            </tr>
                        </thead>

                        <!-- �??? table body -->
                        <tbody>
                            <tr v-for="(skill, index) in skills" :key="skill.id">

                                <!-- �??? Checkbox -->
                                <td>
                                    <span class="text-capitalize text-base"> {{ (current_page - 1) * 10 + index + 1
                                    }}</span>
                                </td>
                                <!-- �??? Role -->
                                <td>

                                    <span class="text-capitalize text-base">{{ skill.pre_skill_title }}</span>
                                </td>
                                <!-- �??? Sub Skills -->
                                <!-- edit or delete sub skill data -->
                                <td>
                                 
                                    <span class="text-capitalize text-base">
                                        {{skill.sub_skills.map(subSkill=>subSkill.title).join()}}
                                    </span>
                                </td>

                                <!-- �??? CREATED DATE -->
                                <td class="text-capitalize text-high-emphasis">
                                    <span class="text-base">{{ formatDate(skill.created_at) }}</span>
                                </td>

                                <!-- Edit or delete subskills -->
                                <td class="text-center">
                                    <VBtn color="primary"  @click="openEditsubDialog(skill.sub_skills.map(subSkill=>subSkill))">
                                        Edit / DELETE
                                    </VBtn>
                                </td>

                                <!-- Add sub skill -->
                                <td class="text-center">
                                    <VBtn color="primary" @click="openSubSkillDialog(skill)">
                                        Add
                                    </VBtn>
                                    <!-- <v-icon @click="deleteSkill(skill.id)" color="error" size="24">bx-trash</v-icon>
                    <v-icon  color="primary"  @click="openEditDialog(skill)" size="24">bx-edit</v-icon> -->
                                </td>

                                <!-- �??? Actions -->
                                <td class="text-center" style="width: 80px;">
                                    <!-- <VBtn icon="bx-trash"  color="error" small>
               
              </VBtn> -->
                                    <v-icon @click="deleteSkill(skill.id)" color="error" size="24">bx-trash</v-icon>
                                    <v-icon color="primary" @click="openEditDialog(skill)" size="24">bx-edit</v-icon>
                                </td>
                            </tr>
                        </tbody>

                        <!-- �??? table footer  -->
                        <tfoot v-show="!skills.length">
                            <tr>
                                <td v-if="isLoading" colspan="11" class="text-center text-body-1 ">
                                    <VProgressCircular :size="60" color="primary" indeterminate class="my-5" />
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

                        <!-- �??? Rows per page -->
                        <div class="d-flex align-center" style="width: 171px;">
                            <span class="text-no-wrap text-sm me-3">Rows per page:</span>
                            <VSelect v-model="rowPerPage" density="compact" class="per-page-select" variant="plain"
                                :items="[10, 20, 30, 50]" />
                        </div>
                        <!-- �??? Total data in table-->
                        <div class="d-flex align-center">
                            <span class="text-sm text-no-wrap me-3">Total Data: {{ totalskills }}</span>
                        </div>

                        <!-- �??? Pagination and pagination meta -->
                        <div class="d-flex align-center">
                            <VPagination v-model="paginationRef" :length="totalPage" color="primary"
                                prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right"
                                first-icon="mdi-chevron-double-left" last-icon="mdi-chevron-double-right" />


                        </div>


                    </VCardText>
                    <!-- !SECTION -->
                </VCard>
            </VCol>
        </VRow>
        <!-- �??? Add New User -->
        <Drawer v-model:isDrawerOpen="iscreateJobDrawerVisible" @user-data="skill" />
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
