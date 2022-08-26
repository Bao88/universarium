<script setup lang="ts">

</script>

<template>
  <q-layout class="fullscreen background">
    <router-view class="fullscreen"></router-view>
  </q-layout>
</template>

<style scoped>
.background {
  background: white url("./assets/background.svg") fixed center;
  background-size: cover;
}
</style>
