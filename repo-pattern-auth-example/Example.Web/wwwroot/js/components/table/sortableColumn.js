Vue.component('sortable-column', {
    template: `<th class="sortable-th user-select-none" v-on:click="emitEvent()">
                <slot></slot>
                <span v-show="filter.OrderBy==value">
                    <i v-show="!filter.OrderByDesc" class="fas fa-sort-amount-up-alt"></i>
                    <i v-show="filter.OrderByDesc" class="fas fa-sort-amount-down"></i>
                </span>
            </th>`,
    props: {
        value: {
            type: [Number, String],
            validator: val => val > 0,
            default: null
        },
        filter: {
            type: Object,
            default: function () {
                return {
                    OrderBy: 1,
                    OrderByDesc: true
                }
            }
        },
        eventName: {
            type: String,
            default: "order-by-changed"
        }
    },
    methods: {
        emitEvent: function () {
            this.$emit(this.eventName, this.value);
        }
    }
});