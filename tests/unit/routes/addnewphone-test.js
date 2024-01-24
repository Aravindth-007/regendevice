import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | addnewphone', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:addnewphone');
    assert.ok(route);
  });
});
