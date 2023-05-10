<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex main_app">
    <header class="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-gray-900 flex-col">
      <div class="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
        <RouterLink class="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded" to="/">
          <div class="text-base leading-4">Dashboard</div>
        </RouterLink>
      </div>
    </header>
    <div>
      dwhudihwh
    </div>
    <RouterView />
    
  </div>
</template>
