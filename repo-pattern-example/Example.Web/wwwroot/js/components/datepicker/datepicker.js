Vue.component('date-picker', {
    template: `
        <div>
            <v-date-picker v-model="Value" mode="date" :is24hr="is24hr" :is-dark="isDark" :masks="DataPickerMasks">
                <template v-slot="{ inputValue, inputEvents}">
                    <input class="form-control form-control-sm"
                           :class="{'form-control-dark' : isDark}"
                           :placeholder="placeholder"
                           :value="inputValue"
                           v-on="inputEvents" />
                </template>
            </v-date-picker>
        </div>
    `,
    props: {
        value: {
            required: true,
        },
        isDark: {
            type: [Boolean, String],
            validator: val => ["true", "false"].indexOf(val.toString()) > -1,
            default: false
        },
        is24hr: {
            type: [Boolean, String],
            validator: val => ["true", "false"].indexOf(val.toString()) > -1,
            default: true
        },
        showWeeknumbers: {
            type: [Boolean, String],
            validator: val => ["true", "false"].indexOf(val.toString()) > -1,
            default: true
        },
        type: {
            type: String,
            validator: val => ["date", "datetime", "time"].indexOf(val.toString()) > -1,
            default: "date"
        },
        placeholder: {
            type: String,
        },
        format: {
            type: String,
        }
    },
    methods: {
        getFormat: function () {
            var defaultFormats = {
                "date": "DD.MM.YYYY",
                "datetime": "DD.MM.YYYY HH:mm",
                "time": "HH:mm",
            }

            return this.format || defaultFormats[this.type];
        }
    },
    computed: {
        Value: {
            get: function () { return this.value },
            set: function (value) { this.$emit("input", value); },
        },
        DataPickerMasks: function () {
            return {
                "show-weeknumbers": this.showWeeknumbers.toString() == "true",
                input: this.getFormat(),
                inputDateTime: this.getFormat(),
                inputDateTime24hr: this.getFormat(),
            }
        }
    }
});