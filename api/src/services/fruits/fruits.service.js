// Initializes the `fruits` service on path `/fruits`
const createService = require('feathers-nedb');
const createModel = require('../../models/fruits.model');
const hooks = require('./fruits.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/fruits', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('fruits');

  service.hooks(hooks);
};
