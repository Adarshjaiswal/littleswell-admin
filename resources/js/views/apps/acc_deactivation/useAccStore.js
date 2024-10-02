import axios from 'axios';
import { defineStore } from 'pinia';

export const useAcc = defineStore('useAcc', {
  actions: {
    // 👉 Fetch users data
    fetchRequests(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/account/deactivation-requests/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    
        // 👉 Status Toggle
        toggleStatus(id) {
          return new Promise((resolve, reject) => {
            axios.put(`/api/web/account/change-status/${id}`).then(response => resolve(response))
              .catch(error => reject(error))
          })
        },
     
  },
})
