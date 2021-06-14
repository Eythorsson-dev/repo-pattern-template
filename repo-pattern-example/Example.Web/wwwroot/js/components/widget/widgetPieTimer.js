(function () {
    Vue.component('widget-pie-timer', {
        template: `
            <svg :width="size" :height="size" :viewbox="'0 0 ' + size + ' ' + size" class="pie-timer text-primary cursor-pointer" @click="isPlaying = !isPlaying">
              <path class="pie-timer-border" :transform="'translate(' + size/2 + ', ' + size/2 + ')'" ref="border"/>
              <path class="pie-timer-loader" :transform="'translate(' + size/2 + ', ' + size/2 + ') scale(.84)'" ref="loader"/>
            </svg>
        `,
        props: {
            size: {
                type: Number,
                default: 15
            },
            speed: {
                type: Number,
                default: 15
            }
        },
        data: function () {
            return {
                isPlaying: true,
                π: Math.PI,
                α: 0
            }
        },
        methods: {
            draw: function () {
                    
                this.α++;
                this.α %= 360;
                var r = (this.α * this.π / 180)
                    , x = Math.sin(r) * this.size / 2
                    , y = Math.cos(r) * - this.size / 2
                    , mid = (this.α > 180) ? 1 : 0
                    , anim = 'M 0 0 v -' + (this.size / 2) + ' A ' + (this.size / 2) + ' ' + (this.size / 2) + ' 1 '
                        + mid + ' 1 '
                        + x + ' '
                        + y + ' z';


                this.$refs.loader.setAttribute('d', anim);
                this.$refs.border.setAttribute('d', anim);

                if (this.α % 360 == 0) this.$emit("done");
                if (this.isPlaying) setTimeout(this.draw, this.speed);
            }
        },
        watch: {
            'isPlaying': function (val) {
                if (val) this.draw();
            }
        },
        mounted: function() {
            this.draw();
        }
    })
})();
