module.exports = mixin;

function mixin () { this.mixin = function (mixin) { mixin.call(this); }; }

