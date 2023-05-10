<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
    components: {
    },
    props: [
    ],
    data () {
        return {
          page: 'home',
        }
    },
    async mounted () {
        
    },
    created () {
    },
    computed: {
    },
    methods: {
        
    },
    watch: {
    }
}
</script>

<template>
  <div class="flex main_app">
    <header>
      <div class="top_menu">
        <h2>Stock_app</h2>
        <input type="text" placeholder="Search company by label" maxlength="4">
        <button class="button is-black">EXIT</button>
      </div>
      <div class="lateral_container">
        <div class="lateral_menu">
          <RouterLink v-if="page == 'home'" class="menu_button button_active" to="/">
            <font-awesome-icon icon="fa-solid fa-grip" class="icon" />
            <div class="">Dashboard</div>
          </RouterLink>
          <RouterLink v-else class="menu_button" to="/" @click="page = 'home'">
            <font-awesome-icon icon="fa-solid fa-grip" class="icon" />
            <div class="">Dashboard</div>
          </RouterLink>
          <RouterLink v-if="page == 'stocks'" class="menu_button button_active" to="/stocks/">
            <font-awesome-icon icon="fa-solid fa-chart-line" class="icon" />
            <div class="">Stocks</div>
          </RouterLink>
          <RouterLink v-else class="menu_button" to="/stocks/" @click="page = 'stocks'">
            <font-awesome-icon icon="fa-solid fa-chart-line" class="icon" />
            <div class="">Stocks</div>
          </RouterLink>
          <RouterLink v-if="page == 'companies'" class="menu_button button_active" to="/">
            <font-awesome-icon icon="fa-solid fa-building" class="icon" />
            <div class="">Companies</div>
          </RouterLink>
          <RouterLink v-else class="menu_button" to="/" @click="page = 'companies'">
            <font-awesome-icon icon="fa-solid fa-building" class="icon" />
            <div class="">Companies</div>
          </RouterLink>
          <RouterLink v-if="page == 'groups'" class="menu_button button_active" to="/">
            <font-awesome-icon icon="fa-solid fa-users-line" class="icon" />
            <div class="">Groups</div>
          </RouterLink>
          <RouterLink v-else class="menu_button" to="/" @click="page = 'groups'">
            <font-awesome-icon icon="fa-solid fa-users-line" class="icon" />
            <div class="">Groups</div>
          </RouterLink>
        </div>
        <RouterView class="main_view" />
      </div>
    </header>
    
  </div>
</template>
