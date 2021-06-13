(function () {
    Vue.component('widget-top-summary-card', {
        template: `
            <div class="p-3 shadow-sm rounded bg-white-pure row">
                <div class="col-6">
                    <p class="">{{title}}</p>
                    <div class="d-flex align-items-center">
                        <h3>{{data.Total || " - "}}</h3>
                    </div>
                </div>
                <div class="col-6 align-self-center">
                    <canvas ref="chartCanvas"></canvas>
                </div>
            </div>
        `,
        props: {
            title: {
                type: String,
                requied: true
            },
            data: {
                type: Object,
                required: true,
                default: () => { return { DataSet: [], Growth: 0, Total: 0 } }
            },
        },
        data: function () {
            return {
                chart: undefined
            }
        },
        updated() {
            var filtered = this.data.DataSet.filter((x, i) => i < 10);
            this.chart.data.labels = filtered.map(x => x.Title);
            this.chart.data.datasets[0].data = filtered.map(x => x.Sum);

            this.chart.update()
        },
        mounted() {

            var dataSet = this.data.DataSet || [];

            var ctx = this.$refs.chartCanvas.getContext('2d');

            function getGradient(ctx, chartArea) {
                let width, height, gradient;

                const chartWidth = chartArea.right - chartArea.left;
                const chartHeight = chartArea.bottom - chartArea.top;
                if (gradient === null || width !== chartWidth || height !== chartHeight) {
                    // Create the gradient because this is either the first render
                    // or the size of the chart has changed
                    width = chartWidth;
                    height = chartHeight;
                    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, 'rgba(255, 99, 132, 0.0)');
                    gradient.addColorStop(1, 'rgba(255, 99, 132, 0.4)');
                }

                return gradient;
            }

            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dataSet.map(x => x.Title),
                    datasets: [{
                        label: this.title,
                        data: dataSet.map(x => x.Sum),
                        fill: true,
                        backgroundColor: function (context) {
                            const chart = context.chart;
                            const { ctx, chartArea } = chart;

                            if (!chartArea) {
                                // This case happens on initial chart load
                                return null;
                            }
                            return getGradient(ctx, chartArea);
                        },
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1,
                        radius: 0, // HIDE POINT
                        tension: 0.5,
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            display: false,
                        },
                        x: {
                            display: false,
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
    })
})();
