const fruits = require('./fruits/fruits.service.js');
const people = require('./people/people.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(fruits);
  app.configure(people);
};
