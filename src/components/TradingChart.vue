<template>
<div ref="chart"></div>
</template>

<script>
import Highcharts from 'highcharts/highstock'
import HighchartsVue from 'highcharts-vue'
import darkUnica from 'highcharts/themes/dark-unica'

export default {
    name: 'StockAreaSplineChart',
    components: {
        HighchartsVue
    },
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    mounted () {
        this.renderChart()
    },
    methods: {
        renderChart () {
        darkUnica(Highcharts)
        Highcharts.stockChart(this.$refs.chart, {
            chart: {
            zoomType: 'x'
            },
            title: {
            text: ''
            },
            xAxis: {
            type: 'datetime'
            },
            yAxis: {
            title: {
                text: 'Price'
            }
            },
            series: [{
            type: 'areaspline',
            name: 'Stock Price',
            data: this.data,
            fillColor: {
                linearGradient: [0, 0, 0, 300],
                stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, 'rgba(0,0,0,0)']
                ]
            },
            threshold: null
            }]
        })
        }
    }
}
</script>