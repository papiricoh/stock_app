<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <RouterLink to="/">Home</RouterLink>
    </div>
  </header>

  <RouterView />
</template>
