module.exports = mixin;

function mixin () { 
    this.mixin = function(/* mixin, mixin... */) { 
        for (i = 0, l = arguments.length; i < l; i++) {
            arguments[i].call(this); 
        }
    };
}

