// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var body = document.body;

  var getElements = function(e) {
    var children = e.childNodes;
    var classes = e.classList;
    for (var i = 0; i < classes.length; i++) {
      if (className === classes[i]) {
        result.push(e);
      }
    }
    for (var j = 0; j < children.length; j++) {
      if (children[j].classList !== undefined) {
        getElements(children[j]);
      }
    }
  };

  getElements(body);

  return result;
};
