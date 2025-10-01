<script setup lang="ts">
import mainStore from '@/stores/mainStore'
import { computed } from 'vue'
// Stores
const store = mainStore()

// Computed
const userDetails = computed(() => store.userDetails)
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo">Kitcode</RouterLink>
    <input id="header-menu-btn" class="header-menu-btn" type="checkbox" />
    <label class="header-menu-icon" for="header-menu-btn"><span class="navicon"></span></label>
    <ul class="header-menu">
      <li>
        <a href="" :class="{ hide: userDetails.role }">{{ userDetails.role }}</a>
      </li>
      <li>
        <a href="" :class="{ hide: userDetails.userName }">{{ userDetails.userName }}</a>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
@use './headerView.scss';
</style>
