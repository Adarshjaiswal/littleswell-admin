import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserListStore = defineStore('UserListStore', {
  actions: {
    // 👉 Fetch users data
    fetchUsers(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/user/all-user/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    fetchEmployees(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/emp/all-emp-on-report-section/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
   

    // 👉 fetch single user
    fetchUser(id) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/user/details/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },

    // 👉 Change Aadhar status
    ChangeAadharStatus(id) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/user/change-aadhar-status/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },

    fetchUsersForDownloadReports(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/user/all-users-report/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    fetchNonApplicantUserReports(currentPage,rowPerPage,params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/user/non-applicant-users-report/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
})
