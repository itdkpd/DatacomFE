<script setup lang="ts">
import Header from '@/pages/header/headerView.vue'
</script>

<template>
  <main>
    <div class="main-container">
      <Header />
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
