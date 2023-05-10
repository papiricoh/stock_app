<script setup>

</script>

<template>
  <main>
    <div class="dashboard">
        <div class="dashboard_box">

        </div>
        <div class="dashboard_box">

        </div>
        <div class="dashboard_box">
            <button class="button"></button>
        </div>
        <div class="dashboard_box">

        </div>
        <div class="dashboard_box">

        </div>
        <div class="dashboard_box">

        </div>
        <div class="dashboard_box">

        </div>
    </div>
  </main>
</template>

<style scoped>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}
.dashboard_box {
    width: 100%;
    background-color: #343a40;
    height: 20rem;
}
</style>