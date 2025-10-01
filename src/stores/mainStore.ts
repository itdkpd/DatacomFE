import { defineStore } from 'pinia'

export default defineStore('mainStore', {
  state: () => ({
    loading: false,
    loadingState: 100,
    userDetails: {
      role: 'Admin',
      userName: 'Kevin Keith Damaso',
      currentDate: new Date(),
    },
  }),
  getters: {
    isLoading(state) {
      return state.loading
    },
  },
  actions: {
    updateLoading(value: boolean) {
      this.loading = value
    },
    updateLoadingState(value: number) {
      this.loadingState = value
    },
  },
})
