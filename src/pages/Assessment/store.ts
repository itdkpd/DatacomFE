import mainStore from '@/stores/mainStore'
import axios from 'axios'
import { defineStore } from 'pinia'

export default defineStore('assessment', {
  state: () => ({
    name: '',
    detailsObject: {} as { name: string; age: string; gender: string },
    detailsMessages: '',
    errorMessages: '',
  }),
  actions: {
    fetchDetails() {
      mainStore().updateLoading(true)
      this.clearMessages()
      axios
        .get(`http://localhost:5098/datacom?name=${this.name}`)
        .then((response) => {
          if (response.data.isSuccess) {
            this.detailsObject = response.data.responseObject
            this.detailsMessages = `The name ${this.detailsObject.name} has average age of ${this.detailsObject.age} and gender is ${this.detailsObject.gender}.`
          } else {
            this.errorMessages = response.data.message
          }
          mainStore().updateLoading(false)
        })
        .catch((error) => {
          this.errorMessages = 'An error occurred while fetching details. Please try again later.'
          console.error('Error fetching details:', error)
          mainStore().updateLoading(false)
        })
    },
    clearMessages() {
      this.detailsMessages = ''
      this.errorMessages = ''
    },
  },
})
