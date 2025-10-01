<script setup lang="ts">
import Loading from '@/components/loading/CmpLoading.vue'
import mainStore from '@/stores/mainStore'
import { computed } from 'vue'

// Stores
const store = mainStore()

// Computed
const isLoading = computed(() => store.isLoading)
</script>

<template>
  <Loading v-show="isLoading" />
  <router-view v-show="!isLoading" />
</template>
