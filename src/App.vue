<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex main_app">
    <header>
      <div class="">Stock Market</div>
      <RouterLink class="menu_button" to="/">
        <font-awesome-icon icon="fa-solid fa-grip" />
        <div class="text-base leading-4">Dashboard</div>
      </RouterLink>
      <RouterLink class="menu_button" to="/">
        <font-awesome-icon icon="fa-solid fa-chart-line" />
        <div class="text-base leading-4">Stocks</div>
      </RouterLink>
      <RouterLink class="menu_button" to="/">
        <font-awesome-icon icon="fa-solid fa-building" />
        <div class="text-base leading-4">Companies</div>
      </RouterLink>
      <RouterLink class="menu_button" to="/">
        <font-awesome-icon icon="fa-solid fa-users-line" />
        <div class="text-base leading-4">Groups</div>
      </RouterLink>
    </header>
    <div>
      dwhudihwh
    </div>
    <RouterView />
    
  </div>
</template>
