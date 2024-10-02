import axios from 'axios';
import { defineStore } from 'pinia';

export const useCity = defineStore('useCity', {
  actions: {
  
    // 👉 Add Role
    addRole(role_title,description) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/web/create-role`, {
          role_title,description
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
      // 👉 Delete State
      deleteCity(id) {
        return new Promise((resolve, reject) => {
          axios.delete(`/api/web/city/delete/${id}`).then(response => resolve(response))
            .catch(error => reject(error))
        })
      },
        // 👉 Status Toggle
        toggleCityStatus(id) {
          return new Promise((resolve, reject) => {
            axios.put(`/api/web/city/${id}/toggle-active`).then(response => resolve(response))
              .catch(error => reject(error))
          })
        }, 
  },
})
