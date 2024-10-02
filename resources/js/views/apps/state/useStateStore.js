import axios from 'axios';
import { defineStore } from 'pinia';

export const useState = defineStore('useState', {
  actions: {
    // 👉 Fetch users data
    fetchState(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/state/all-states/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    // 👉 Add Role
    addRole(role_title,description) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/web/create-role`, {
          role_title,description
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },


      // 👉 Delete State
      deleteState(id) {
        return new Promise((resolve, reject) => {
          axios.delete(`/api/web/state/delete/${id}`).then(response => resolve(response))
            .catch(error => reject(error))
        })
      },
        // 👉 Status Toggle
        toggleStatus(id) {
          return new Promise((resolve, reject) => {
            axios.put(`/api/web/state/${id}/toggle-active`).then(response => resolve(response))
              .catch(error => reject(error))
          })
        },
      // 👉 Update Role
      updateRole(roleData) {
        return new Promise((resolve, reject) => {
          axios.put(`/api/web/update-role/${roleData.id}`, roleData)
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
