import axios from 'axios';
import { defineStore } from 'pinia';

export const createRole = defineStore('createRole', {
  actions: {
    // 👉 Fetch users data
    fetchRoles(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/all-roles/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    // 👉 Add Role
    addRole(name, email, password, role) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/web/create-role`, {
          name, email, password, role
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },


      // 👉 Delete Role
      deleteRole(id) {
        return new Promise((resolve, reject) => {
          axios.delete(`/api/web/role/delete/${id}`).then(response => resolve(response))
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
