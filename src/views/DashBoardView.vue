<script setup>

</script>

<script>
export default {
    components: {
    },
    props: [
    ],
    data () {
        return {
            isLoading: false,
            player: { id: 'steam:2019302' }
        }
    },
    mounted () {
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
  <main>
    <div class="dashboard">
        <div v-if="isLoading" class="dashboard_box loading">
            <div class="spinner"></div>
        </div>
        <div v-else class="dashboard_box">
            <div class="title">Total porfolio value:</div>
        </div>
    </div>
  </main>
</template>

<style scoped>
* {
    color: #c4c4c4;
}
.dashboard {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.dashboard_box {
    width: 100%;
    background-color: #343a40;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding: 1.4rem;
    color: #c4c4c4;
}

.loading {
    align-items: center;
    justify-content: center;
}

.spinner {
    /* Spinner size and color */
    width: 20%;
    aspect-ratio: 1/1;
    border-top-color: #c4c4c4;
    border-left-color: #6c6c6c;

    /* Additional spinner styles */
    animation: spinner 600ms linear infinite;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-style: solid;
    border-width: 20px;
    border-radius: 50%;  
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
}

/* Animation styles */
@keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>