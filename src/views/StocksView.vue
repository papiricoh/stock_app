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
            isLoading: true,
            search_arguments: null,
            player: { id: 'steam:2024302' },
            user_wallet: {},
            companies: [],
            company_loading: true,
            current_company: null,
        }
    },
    async mounted () {
        this.companies = await this.getAllCompaniesList();
        this.isLoading = false;
    },
    created () {
    },
    computed: {
    },
    methods: {
        async setCompanyData(label) {
            try {
                this.company_loading = true;
                const response = await fetch('http://localhost:8080/api/company/' + label);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                this.current_company = data;
                this.company_loading = false;
            } catch (error) {
                console.error('Error:', error);
            }
        },
        async getAllCompaniesList() {
            try {
                const response = await fetch('http://localhost:8080/api/companies');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error:', error);
            }
        }
    },
    watch: {
    }
}
</script>

<template>
  <main>
    <div class="stock_dashboard">
        <div v-if="isLoading" class="companies_menu loading">
            <div class="spinner"></div>
        </div>
        <div v-else class="companies_menu">
            <div class="stock_button_parent" v-for="company in companies">
                <div v-if=" current_company == null || company.company_label != current_company.company_label" class="stock_button" @click="setCompanyData(company.company_label)">{{company.company_label}}</div>
                <div v-else class="stock_button button_active">{{company.company_label}}</div>
            </div>
        </div>
        <div v-if="current_company == null" class="chart_parent_container loading">
            SELECT A COMPANY FROM THE LIST
        </div>
        <div v-else-if="company_loading" class="chart_parent_container loading">
            <div class="spinner"></div>
        </div>
        <div v-else class="chart_parent_container">
            <h2 class="subtitle">{{current_company.company_label}} - {{current_company.company_name}}</h2>
        </div>
    </div>
  </main>
</template>

<style scoped>
* {
    color: #dee2e6;
}

.stock_button {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-items: center;
    text-align: center;
    padding: 1rem;
    transition: .4s;
    cursor: pointer;
}

.stock_button:hover {
    color: #dee2e6;
    background-color: #1c1e205e;
    transition: .4s;
}

.stock_button:active {
    color: #dee2e6;
    background-color: #495057;
    border-right: 4px solid #adb5bd;
    transition: .4s;
}

.chart_parent_container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
}

.companies_menu {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 12rem;
    border-bottom-left-radius:.4rem;
    border-top-left-radius:.4rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    border-right: 1px solid #495057;
}

.stock_dashboard {
    display: flex;
    justify-content: stretch;
    background-color: #6c757d;
    border-radius: .4rem;
    width: 100%;
    min-height: 30rem;
}

.loading {
    align-items: center;
    justify-content: flex-start;
    text-align: center;
}

.spinner {
    /* Spinner size and color */
    width: 40%;
    aspect-ratio: 1/1;
    border-top-color: #c4c4c4;
    border-left-color: #6c6c6c;

    /* Additional spinner styles */
    animation: spinner 600ms linear infinite;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-style: solid;
    border-width: 10px;
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