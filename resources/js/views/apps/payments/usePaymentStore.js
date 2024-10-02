import axios from 'axios';
import { defineStore } from 'pinia';

export const payments = defineStore('Payments', {
  actions: {
    // 👉 Fetch refund request data
    fetchPaymentsRequest(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/payment/all-payments/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

     // 👉 Fetch users refund payment data
     fetchRefundPayments(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/payment/all-refund-payments/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
   
  },
})
