<script>
export default {
    props: {
        page: {
            type: Number,
            default: 1,
        },
        limit: {
            type: Number,
            default: 20,
        },
        /**
         * The size of the button allows only some values
         * @values small, medium, large
         */
        size: {
            default: 'normal',
        },
    },
    computed: {
        /**
         * Returns active users.
         */
        active() {},
    },
    methods: {
        /**
         * Load users.
         * @method
         */
        async load() {},

        /**
         * Sets the order
         *
         * @public
         * @version 1.0.5
         * @since Version 1.0.1
         * @param {string} key Key to order
         * @returns {string} Test
         */
        sortBy: function (key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;

            /**
             * Success event.
             *
             * @event success
             * @type {object}
             */
            this.$emit('success', {
                demo: 'example',
            });
        },

        emitSuccess() {
            /**
             * Success event.
             *
             * @event success
             * @property {string} content content of the first prop passed to the event
             * @property {object} example the demo example
             */
            this.$emit('success', content, {
                demo: 'example',
            });
        },
    },
};
</script>

<template>
    <div>
        user select
        <!--
        @slot Modal footer
        @binding active an item passed to the footer
		-->
        <slot :active="active"></slot>
    </div>
</template>
