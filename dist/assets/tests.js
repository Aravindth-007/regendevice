'use strict';

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
define("regendevice/tests/integration/components/product-detail-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | product-detail', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ProductDetail />
      */
      {
        id: "tciWxO15",
        block: "{\"symbols\":[],\"statements\":[[5,\"product-detail\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ProductDetail>
              template block text
            </ProductDetail>
          
      */
      {
        id: "AroxJq8Z",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"product-detail\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("regendevice/tests/integration/components/product-detail/aboutitem-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | product-detail/aboutitem', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ProductDetail::Aboutitem />
      */
      {
        id: "tTnnjlZ6",
        block: "{\"symbols\":[],\"statements\":[[5,\"product-detail/aboutitem\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ProductDetail::Aboutitem>
              template block text
            </ProductDetail::Aboutitem>
          
      */
      {
        id: "52ClFG2R",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"product-detail/aboutitem\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("regendevice/tests/integration/components/product-detail/description-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | product-detail/description', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ProductDetail::Description />
      */
      {
        id: "nylQ1fjn",
        block: "{\"symbols\":[],\"statements\":[[5,\"product-detail/description\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ProductDetail::Description>
              template block text
            </ProductDetail::Description>
          
      */
      {
        id: "1mwZ51Zs",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"product-detail/description\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("regendevice/tests/integration/components/product-detail/features-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | product-detail/features', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ProductDetail::Features />
      */
      {
        id: "0zRiSCS/",
        block: "{\"symbols\":[],\"statements\":[[5,\"product-detail/features\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ProductDetail::Features>
              template block text
            </ProductDetail::Features>
          
      */
      {
        id: "vAVVdTmh",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"product-detail/features\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
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
define("regendevice/tests/unit/controllers/item-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | item', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:item');
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
define("regendevice/tests/unit/routes/products-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | products', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:products');
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
