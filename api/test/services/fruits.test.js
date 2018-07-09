const assert = require('assert');
const app = require('../../src/app');

describe('\'fruits\' service', () => {
  it('registered the service', () => {
    const service = app.service('fruits');

    assert.ok(service, 'Registered the service');
  });
});
