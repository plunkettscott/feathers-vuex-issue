import feathersVuex from 'feathers-vuex';
import feathersClient from '../api';

const { service } = feathersVuex(feathersClient, { idField: '_id' });
const servicePath = 'fruits';
const servicePlugin = service(servicePath, {
  instanceDefaults: {
    name: '',
    description: '',
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
