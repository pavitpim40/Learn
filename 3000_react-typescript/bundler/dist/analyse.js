// Object : List of Import
// key : relative path to file
// value : function for save export statement of that file

var webpack_modules = {
  './src/message.js': (module) => {
    module.exports = 'Hi there';
  },
};

// Function for solve Export value when you give moduleId(relative path to file)
function webpack_require(moduleId) {
  var moduleFn = webpack_modules[moduleId];
  //# moduleFn = (module) => {module.exports = 'Hi there'}

  var module = { exports: {} };
  // # prepare exports value as a empty object

  moduleFn(module);
  //#1 ((module) => {module.exports = 'Hi there'})({exports:{}})
  //#2 module = {exports : 'Hi there'}
  return module.exports; // "Hi there"
}

// index.js
const message = webpack_require('./src/message.js');
console.log(message);
