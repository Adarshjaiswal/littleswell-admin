import axios from 'axios';
import { defineStore } from 'pinia';

export const useSalarySlip = defineStore('useSalarySlip', {
  actions: {
    // 👉 Fetch users data
    fetchEmps(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/emp/all-emp/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    // 👉 Add Role
    addJob(skill_id,location,job_title,company_name,exp_date,salary,job_description,experience,designation) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/web/job/create-job`, {
          skill_id,location,job_title,company_name,exp_date,salary,job_description,experience,designation
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
      // 👉 Delete Role
      deleteJob(id) {
        return new Promise((resolve, reject) => {
          axios.delete(`/api/web/job/delete/${id}`).then(response => resolve(response))
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
