
let {
    extend
    } = angular;

export default function __func() {
    return class CheckDirective {
        constructor(options) {
            extend(this, {
                events: {}
            }, options);

            this.bind();
        }
        /**
         * Bind events
         */
         bind() {
            for (let key in this.events) {
                this.element.bind(key, this.events[key]);
            }
         }
    }
}