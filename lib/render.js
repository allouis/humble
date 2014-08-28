module.exports = render;

function getAttr(obj, props) {
  props = props.split('.');
  var prop = props.shift();
  if (props.length) {
    return getAttr(obj[prop], props.join('.'));
  }
  return obj[prop] === undefined ? '' : obj[prop];
}

var templateMatcher = /(?:{{(.*?)}})/g;

function render (str, data) {
  return str.replace(templateMatcher, function (match, prop) {
    return getAttr(data, prop.trim()); 
  });
}
