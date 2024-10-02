import axios from 'axios';
import { defineStore } from 'pinia';

export const paymentRefund = defineStore('paymentRefund', {
  actions: {
    // 👉 Fetch refund request data
    fetchRefundRequest(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/payment/all-refund-request/${rowPerPage}/?page=${currentPage}`, { params })
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
