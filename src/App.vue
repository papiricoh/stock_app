<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex main_app">
    <header>
      <div class="top_menu">
        <h2>Stock_app</h2>
        <input type="text" placeholder="Search company by label" maxlength="4">
        <button class="button is-black">EXIT</button>
      </div>
      <div class="lateral_menu">
        <RouterLink class="menu_button" to="/">
          <font-awesome-icon icon="fa-solid fa-grip" class="icon" />
          <div class="">Dashboard</div>
        </RouterLink>
        <RouterLink class="menu_button" to="/">
          <font-awesome-icon icon="fa-solid fa-chart-line" class="icon" />
          <div class="">Stocks</div>
        </RouterLink>
      </div>
    </header>
    <RouterView class="main_view" />
    
  </div>
</template>
