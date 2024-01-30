'use strict';

define("regendevice/tests/acceptance/regendevice-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | regendevice', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /regendevice', async function (assert) {
      await (0, _testHelpers.visit)('/regendevice');
      assert.equal((0, _testHelpers.currentURL)(), '/regendevice');
    });
  });
});
define("regendevice/tests/integration/components/general-container-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | general-container', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <GeneralContainer />
      */
      {
        id: "+P4pAYId",
        block: "{\"symbols\":[],\"statements\":[[5,\"general-container\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <GeneralContainer>
              template block text
            </GeneralContainer>
          
      */
      {
        id: "KvX8Z+us",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"general-container\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("regendevice/tests/integration/components/my-component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | my-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <MyComponent />
      */
      {
        id: "T1j3v+5P",
        block: "{\"symbols\":[],\"statements\":[[5,\"my-component\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <MyComponent>
              template block text
            </MyComponent>
          
      */
      {
        id: "ZiFp0Ic4",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"my-component\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("regendevice/tests/integration/components/product-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | product', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Product />
      */
      {
        id: "TN5m0AXc",
        block: "{\"symbols\":[],\"statements\":[[5,\"product\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Product>
              template block text
            </Product>
          
      */
      {
        id: "mBt4D7F+",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"product\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("regendevice/tests/integration/components/product/detail-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | product/detail', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Product::Detail />
      */
      {
        id: "XCINBSn8",
        block: "{\"symbols\":[],\"statements\":[[5,\"product/detail\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Product::Detail>
              template block text
            </Product::Detail>
          
      */
      {
        id: "2cl9NDfp",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"product/detail\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("regendevice/tests/integration/components/product/image-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | product/image', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Product::Image />
      */
      {
        id: "NQYC8u7p",
        block: "{\"symbols\":[],\"statements\":[[5,\"product/image\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Product::Image>
              template block text
            </Product::Image>
          
      */
      {
        id: "aQBmIcQA",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"product/image\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("regendevice/tests/integration/components/sampl1-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | sampl1', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Sampl1 />
      */
      {
        id: "+CVtKV31",
        block: "{\"symbols\":[],\"statements\":[[5,\"sampl1\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Sampl1>
              template block text
            </Sampl1>
          
      */
      {
        id: "r8iKTzci",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"sampl1\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("regendevice/tests/integration/components/sample-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | sample', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Sample />
      */
      {
        id: "3VWhts9s",
        block: "{\"symbols\":[],\"statements\":[[5,\"sample\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Sample>
              template block text
            </Sample>
          
      */
      {
        id: "WpEuP3SJ",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"sample\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("regendevice/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/general-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/general-container.js should pass ESLint\n\n');
  });
  QUnit.test('components/product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/product.js should pass ESLint\n\n');
  });
  QUnit.test('components/product/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/product/detail.js should pass ESLint\n\n');
  });
  QUnit.test('components/product/image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/product/image.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/cart.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/cart.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/addnewphone.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/addnewphone.js should pass ESLint\n\n');
  });
  QUnit.test('routes/addnewphone/addphone.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/addnewphone/addphone.js should pass ESLint\n\n');
  });
  QUnit.test('routes/cart.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cart.js should pass ESLint\n\n');
  });
  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });
  QUnit.test('routes/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/item.js should pass ESLint\n\n');
  });
  QUnit.test('routes/not-found.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/not-found.js should pass ESLint\n\n');
  });
});
define("regendevice/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('regendevice/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'regendevice/templates/about.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('regendevice/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'regendevice/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('regendevice/templates/cart.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'regendevice/templates/cart.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('regendevice/templates/contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'regendevice/templates/contact.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('regendevice/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'regendevice/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('regendevice/templates/item.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'regendevice/templates/item.hbs should pass TemplateLint.\n\nregendevice/templates/item.hbs\n  14:3  error  elements cannot have inline styles  no-inline-styles\n  15:3  error  elements cannot have inline styles  no-inline-styles\n');
  });
  QUnit.test('regendevice/templates/not-found.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'regendevice/templates/not-found.hbs should pass TemplateLint.\n\n');
  });
});
define("regendevice/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/regendevice-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/regendevice-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/general-container-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/general-container-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/my-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/my-component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/product-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/product-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/product/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/product/detail-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/product/image-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/product/image-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/sampl1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sampl1-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/sample-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sample-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/cart-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/cart-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/addnewphone-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/addnewphone-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/addnewphone/addphone-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/addnewphone/addphone-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/cart-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cart-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/item-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/not-found-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/not-found-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/sample-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sample-test.js should pass ESLint\n\n');
  });
});
define("regendevice/tests/test-helper", ["regendevice/app", "regendevice/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("regendevice/tests/unit/controllers/cart-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | cart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:cart');
      assert.ok(controller);
    });
  });
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
define("regendevice/tests/unit/routes/addnewphone/addphone-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | addnewphone/addphone', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:addnewphone/addphone');
      assert.ok(route);
    });
  });
});
define("regendevice/tests/unit/routes/cart-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | cart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:cart');
      assert.ok(route);
    });
  });
});
define("regendevice/tests/unit/routes/home-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home');
      assert.ok(route);
    });
  });
});
define("regendevice/tests/unit/routes/item-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | item', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:item');
      assert.ok(route);
    });
  });
});
define("regendevice/tests/unit/routes/not-found-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | not-found', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:not-found');
      assert.ok(route);
    });
  });
});
define("regendevice/tests/unit/routes/sample-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | sample', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:sample');
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
