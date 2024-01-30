import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | regendevice', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /regendevice', async function(assert) {
    await visit('/regendevice');

    assert.equal(currentURL(), '/regendevice');
  });
});
