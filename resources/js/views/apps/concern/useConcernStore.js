import axios from 'axios';
import { defineStore } from 'pinia';

export const useConcern = defineStore('useConcern', {
  actions: {
    // 👉 Fetch users data
    fetchConcern(currentPage,rowPerPage, params) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/web/concern/all-concern/${rowPerPage}/?page=${currentPage}`, { params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
})
