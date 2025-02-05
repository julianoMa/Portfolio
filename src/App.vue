<script setup>
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <div>
    <div class="noise"></div>
    <div class="scanline"></div>
    <main class="container">
      <HeaderComponent />
      <NavbarComponent />
      <router-view />
    </main>
  </div>
</template>

<style scoped>
</style>
