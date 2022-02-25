// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';

  if (Array.isArray(obj)) {
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]) + ',';
      if (i === obj.length - 1) {
        result = result.slice(0, -1);
      }
    }
    result += ']';
  } else if (typeof obj === 'object' && obj !== null) {
    result += '{';
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      if (typeof obj[keys[i]] === 'function' || obj[keys[i]] === undefined) {
        continue;
      }
      result += '"' + keys[i] + '":';
      result += stringifyJSON(obj[keys[i]]) + ',';
      if (i === keys.length - 1) {
        result = result.slice(0, -1);
      }
    }
    result += '}';
  } else if (typeof obj === 'string') {
    result += '"' + obj + '"';
  } else if (typeof obj === 'number') {
    result += '' + obj;
  } else {
    result += String(obj);
  }
  console.log(result);
  return result;
};
