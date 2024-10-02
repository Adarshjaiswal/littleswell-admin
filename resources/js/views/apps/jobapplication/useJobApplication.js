import axios from 'axios';
import { defineStore } from 'pinia';

export const JobApplication = defineStore('JobApplication', {
  actions: {
    // 👉 Fetch users data
    fetchApplication(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/all-job-application/${rowPerPage}/?page=${currentPage}`, { params })
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
    fetchUserDetails(id) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/application/user-job-status-details/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})

export const JobApplicationReport = defineStore('JobApplicationReport', {
  actions: {
    // 👉 Fetch users data
    fetchApplication(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/all-job-application-report/${rowPerPage}/?page=${currentPage}`, { params })
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
    fetchUserDetails(id) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/application/user-job-status-details/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },

    fetchFilterDate() {
            const customRanges = {
              Today: [new Date(), new Date()],
              Yesterday: [
                new Date(new Date().setDate(new Date().getDate() - 1)),
                new Date(new Date().setDate(new Date().getDate() - 1)),
              ],
              'Last 7 Days': [
                new Date(new Date().setDate(new Date().getDate() - 6)),
                new Date(new Date()),
              ],
              'Last 30 Days': [
                new Date(new Date().setDate(new Date().getDate() - 29)),
                new Date(new Date()),
              ],
              'This Month': [
                new Date(new Date().setDate(1)),
                new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
              ],
              'Last Month': [
                new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
                new Date(new Date().getFullYear(), new Date().getMonth(), 0),
              ],
            }
            return { 
              customRanges,
            }
    },

  },
})
