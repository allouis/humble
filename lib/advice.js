module.exports = advice;

function advice () {

    this.before = function (method, func) {
        var original = this[method] = this[method] || function() {};
        this[method] = function () {
            func.apply(this, arguments);
            return original.apply(this, arguments);
        };
    };

    this.after = function (method, func) {
        var original = this[method] = this[method] || function() {};
        this[method] = function () {
            var ret = original.apply(this, arguments);
            func.apply(this, arguments);
            return ret;
        };
    };

}
