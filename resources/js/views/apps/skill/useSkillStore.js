import axios from 'axios';
import { defineStore } from 'pinia';

export const createSkill = defineStore('createSkill', {
  actions: {
    // 👉 Fetch users data
    fetchSkills(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/skill/all-skills/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    // 👉 Add Role
    addSkill(skill_title,description) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/web/skill/create-skill`, {
          skill_title,description
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },


      // 👉 Delete Role
      deleteSkill(id) {
        return new Promise((resolve, reject) => {
          axios.delete(`/api/web/skill/delete/${id}`).then(response => resolve(response))
            .catch(error => reject(error))
        })
      },
      // 👉 Update Role
      updateSkill(skillData) {
        return new Promise((resolve, reject) => {
          axios.put(`/api/web/skill/update-skill/${skillData.id}`, skillData)
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
