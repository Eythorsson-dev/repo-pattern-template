(function () {
    new Vue({
        el: "#app",
        data: function () {
            return {
                order: {
                    isLoading: false,
                    filter: {
                        CurrentPage: 1,
                        ItemsPerPage: 50,
                        OrderBy: 6,
                        OrderByDesc: true
                    },
                    items: [],

                    // MODAL
                    modal: undefined,
                    details: {},
                },
            }
        },
        methods: {
            fetchOrders: function () {
                this.order.isLoading = true;

                return apiService.Get("order", this.order.filter)
                    .then(data => {
                        this.order.items = this.order.items.concat(data.Items);
                        this.order.TotalNumberOfItems = data.TotalNumberOfItems;
                        this.order.CurrentPage = data.CurrentPage;

                        pagination.InfiniteScroll(this.$refs.orderTable, data, this.getNextPage);
                    })
                    .finally(() => { this.order.isLoading = false; });
            },

            saveOrder: function () {
                if (this.order.details.OrderId > 0) return;

                this.order.isLoading = true;

                return apiService.Post("order", this.order.details)
                    .then(() => {
                        this.order.modal.hide();
                        this.filterChanged()
                    });
            },

            createNewOrder: function () {
                this.order.details = {};
                this.order.modal.show();
            },
            showOrderDetails: function (order) {
                this.order.details = order;
                this.order.modal.show();
            },

            getNextPage: function () {
                this.order.filter.CurrentPage++;
                this.fetchOrders();
            },
            filterChanged: function () {
                this.order.items = [];
                this.order.filter.CurrentPage = 1;
                this.fetchOrders();
            },
            filterChangedTimeout: function () {
                clearTimeout(filterTimeout);
                filterTimeout = setTimeout(this.filterChanged, 500);
            },
            orderBy: function (value) {
                this.order.filter = orderByHandler.Handle(this.order.filter, value);
                this.filterChanged();
            },

            datetimeLong: function (item) {
                return dayjs(item).format("DD.MM.YYYY HH:mm")
            }
        },
        computed: {

        },
        watch: {
            'order.isLoading': function (value) {
                if (value) loadHandler.AddTableLoader(this.$refs.orderTable);
                else loadHandler.RemoveTableLoader(this.$refs.orderTable);
            }
        },
        mounted: function () {
            this.fetchOrders();

            this.order.modal = new bootstrap.Modal(this.$refs.orderModal);
        },
    });
})();