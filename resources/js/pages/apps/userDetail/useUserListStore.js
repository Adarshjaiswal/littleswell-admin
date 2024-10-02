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
   

    // 👉 fetch single user
    fetchUser(id) {
      return new Promise((resolve, reject) => {
        axios.get(`/apps/users/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
