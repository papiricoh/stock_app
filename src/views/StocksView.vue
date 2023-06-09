<script setup>
import TradingChart from '../components/TradingChart.vue';
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
            current_stock_data: [],
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
                this.current_stock_data = await this.generateStockData(data);
                this.company_loading = false;
            } catch (error) {
                console.error('Error:', error);
            }
        },
        async generateStockData(data) {
            const stock_data = data.history;
            let returned_data = [];
            for (let index = 0; index < stock_data.length; index++) {
                returned_data[index] = [new Date(stock_data[index].movement_date).getTime(), stock_data[index].price];
            }
            return returned_data;
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
            <div style="width: 10%;" class="spinner"></div>
        </div>
        <div v-else class="chart_parent_container">
            <h2 class="subtitle">{{current_company.company_label}} - {{current_company.company_name}}</h2>
            <div class="chart_transaction_container">
                <TradingChart style="width: 70%; height: 28rem;" :data="current_stock_data"></TradingChart>
                <div class="operations_box">
                    Market buy and sell
                </div>
            </div>
        </div>
    </div>
  </main>
</template>

<style scoped>
* {
    color: #dee2e6;
}

.operations_box {
    background-color: #6c6c6c;
    padding: 1rem;
    width: 30%;
    border-radius: .4rem;
}

.chart_transaction_container {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    gap: 1rem;
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
    overflow-y: scroll;
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