import axios from 'axios';
import { defineStore } from 'pinia';

export const useJobs = defineStore('useJobs', {
  actions: {
    // 👉 Fetch users data
    fetchJobs(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/all-vaccine/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },



    
    // 👉 Add Vaccine
    addJob(vaccine_name, description, vac_time, time_value, status) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/web/vaccine/create-vaccine`, {
          vaccine_name, description, vac_time, time_value, status
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },







      // 👉 Delete Role
      deleteJob(id) {
        return new Promise((resolve, reject) => {
          axios.delete(`/api/web/vaccine/delete/${id}`).then(response => resolve(response))
            .catch(error => reject(error))
        })
      },
       // 👉 Update Job
       updateJob(jobData) {
        return new Promise((resolve, reject) => {
          axios.put(`/api/web/update-job/${jobData.id}`, jobData)
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
