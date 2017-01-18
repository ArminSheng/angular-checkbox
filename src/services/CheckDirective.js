
let {
    extend
    } = angular;

export default function __func() {
    return class CheckDirective {
        constructor(options) {
            extend(this, {
                events: {}
            }, options);

            this._saveLinks();
            this.bind();

        }
        /**
         * Bind events
         */
         bind() {
            for (let key in this.events) {
                var prop = this.events[key];
                this.element.bind(key, this[prop]);
            }
         }
         /**
         * Saves links to functions
         * @private
         */
        _saveLinks() {
            for(var key in this.events) {
                var prop = this.events[key];
                this[prop] = this[prop].bind(this);
            }
        }
    }
}