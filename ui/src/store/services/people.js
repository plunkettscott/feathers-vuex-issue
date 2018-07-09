import feathersVuex from 'feathers-vuex';
import feathersClient from '../api';

const { service } = feathersVuex(feathersClient, { idField: '_id' });
const servicePath = 'people';
const servicePlugin = service(servicePath, {
  instanceDefaults: {
    name: '',
    fruitId: null,
    fruit: 'Fruit',
  },
});
feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
});
export default servicePlugin;
