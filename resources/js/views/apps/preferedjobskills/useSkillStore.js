import axios from 'axios';
import { defineStore } from 'pinia';

export const createFrefredSkill = defineStore('createFrefredSkill', {
  actions: {
    // 👉 Fetch users data
    fetchSkills(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/skill/all-prefered-skills/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    // 👉 Add Role
    addSkill(skill_title,description) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/web/prefered-skill/create-skill`, {
          skill_title
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },


      // 👉 Delete Role
      deleteSkill(id) {
        return new Promise((resolve, reject) => {
          axios.delete(`/api/web/prefered-skill/delete/${id}`).then(response => resolve(response))
            .catch(error => reject(error))
        })
      },
      // 👉 Update Role
      updateSkill(skillData) {
        return new Promise((resolve, reject) => {
          axios.put(`/api/web/prefered-skill/update-skill/${skillData.id}`, skillData)
            .then(response => resolve(response))
            .catch(error => reject(error))
        })
      },

      // Update Sub skills
      updateSubSkill(subSkillData) {
        return new Promise((resolve, reject) => {
          axios.put(`/api/web/prefered-subskill/update-subskill`, {subSkillsData:subSkillData})
            .then(response => resolve(response))
            .catch(error => reject(error))
        })
      },

      // Delete sub skill 
      deleteSubSkill(id) {
        return new Promise((resolve, reject) => {
          axios.delete(`/api/web/prefered-subskill/delete-subskill/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
        })
      },

      // Prefered Sub Skills data........
      
      addSubSkill(skillData) {
        return new Promise((resolve, reject) => {
          axios.post(`/api/web/prefered-sub-skill/create-skill/${skillData.id}`, skillData)
            .then(response => resolve(response))
            .catch(error => reject(error))
        })
      },

      fetchSubSkills(currentPage,rowPerPage, params) {
        return new Promise((resolve, reject) => {
          axios.get(`/api/web/skill/all-prefered-sub-skills/${rowPerPage}/?page=${currentPage}`, { params })
            .then(response => resolve(response))
            .catch(error => reject(error))
        })
      },



    // 👉 fetch single user
    fetchUser(id) {
      return new Promise((resolve, reject) => {
        axios.get(`/apps/users/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
