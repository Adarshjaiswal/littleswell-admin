import axios from 'axios';
import { defineStore } from 'pinia';

export const createAmount = defineStore('createAmount', {
  actions: {
    // 👉 Fetch users data
    fetchAmount(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/payment/amount/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
      // 👉 Update Role
      updateAmount(AmountData) {
        return new Promise((resolve, reject) => {
          axios.put(`/api/web/payment/update-amount/${AmountData.id}`, AmountData)
            .then(response => resolve(response))
            .catch(error => reject(error))
        })
      },

  },
})
