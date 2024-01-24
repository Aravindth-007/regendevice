'use strict';

define("regendevice/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/addnewphone.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/addnewphone.js should pass ESLint\n\n');
  });
});
define("regendevice/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('regendevice/templates/addnewphone.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'regendevice/templates/addnewphone.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('regendevice/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'regendevice/templates/application.hbs should pass TemplateLint.\n\nregendevice/templates/application.hbs\n  7:6  error  If the `alt` attribute is present and the value is an empty string, `role="presentation"` or `role="none"` must be present  require-valid-alt-text\n');
  });
});
define("regendevice/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/addnewphone-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/addnewphone-test.js should pass ESLint\n\n');
  });
});
define("regendevice/tests/test-helper", ["regendevice/app", "regendevice/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("regendevice/tests/unit/routes/addnewphone-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | addnewphone', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:addnewphone');
      assert.ok(route);
    });
  });
});
define('regendevice/config/environment', [], function() {
  var prefix = 'regendevice';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('regendevice/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
