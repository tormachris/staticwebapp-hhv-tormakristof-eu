<script setup lang="ts">
import WeekNumber from './components/WeekNumber.vue'
</script>

<template>
  <main>
    <WeekNumber />
  </main>
</template>

<style>
@import './assets/base.css';


  body {
    display: flex;
    place-items: center;
    background-color: var(--bs-dark);
  }

  main {
    left: 50%;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

</style>
