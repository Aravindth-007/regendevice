'use strict';



;define("regendevice/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("regendevice/app", ["exports", "ember-resolver", "ember-load-initializers", "regendevice/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class App extends Ember.Application {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("regendevice/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("regendevice/components/data/productdata", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.productArray = void 0;
  const productArray = _exports.productArray = [{
    "id": "1",
    "image": "https://m.media-amazon.com/images/I/61jmM8GL9BL._SX679_.jpg",
    "brand": "TECNO",
    "model": "pova 5 Pro 5G",
    "description": "(Dark Illusion, 8GB RAM,256GB Storage)| Segment 1st 68W Ultra Fast Charging | India's 1st Multi-Colored Backlit ARC Interface | 50MP AI Dual Camera | 6.78”FHD+ Dot-in Display",
    "price": {
      "original": "$198.00",
      "current": "$98.00"
    },
    "features": ["Special Feature	 :  Front Camera, Camera, Fast Charging", "Connectivity Technology : Bluetooth, Wi-Fi, USB", "Memory Storage Capacity : 256 GB"],
    "about_this_item": ["Segment 1st 68W Ultra Fast Charging - 50% battery in just 15minutes | Bypass Charging for playing games | 5000mAh Battery | 10W Reverse Charging", "India's 1st Multi-colored Backlit ARC Interface | Customize New multi color light effect for Notifications, Calls, Gaming, Music and others", "Dimensity 6080 highly efficient 6nm 5G Processor | 2.4GHz powerful octa-core Processor with 390K antutu score | 10 5G Bands support | HyperEngine 3.0 Lite Game Engine and Panther Game Engine 3.0", "Upto 16GB Expandable RAM with memory fusion | 128GB internal storage | Dedicated SD Card slot", "6.78FHD+dot-in display| Buttery smooth with 120Hz refresh rate | 240Hz touch Sampling rate | 50MP high-res dual Rear Camera | F1.6 large aperture with PDAF | 16MP Selfie Camera | NFC for quick contactless operations"]
  }];
});
;define("regendevice/components/general-container", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <nav class="nav">
    <div class="nav-content">
        <LinkTo @route="products" class="n-button">Products</LinkTo>
        <LinkTo @route="about" class="n-button">About Us</LinkTo>
        <LinkTo @route="contact" class="n-button">Contact Us</LinkTo>
    </div>
    <div class="nav-l-s">
      <i class="n-button">sign in</i>
      <i class="n-button">sign up</i>
      <LinkTo @route="cart">
  <i class="fas fa-cart-plus  shop-btn"></i>
  </LinkTo>
    </div>
    
  </nav>
  
    
    {{yield}}
  
  
  */
  {
    id: "RoqWAgPN",
    block: "{\"symbols\":[\"&default\"],\"statements\":[[7,\"nav\",true],[10,\"class\",\"nav\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"nav-content\"],[8],[0,\"\\n      \"],[5,\"link-to\",[[12,\"class\",\"n-button\"]],[[\"@route\"],[\"products\"]],{\"statements\":[[0,\"Products\"]],\"parameters\":[]}],[0,\"\\n      \"],[5,\"link-to\",[[12,\"class\",\"n-button\"]],[[\"@route\"],[\"about\"]],{\"statements\":[[0,\"About Us\"]],\"parameters\":[]}],[0,\"\\n      \"],[5,\"link-to\",[[12,\"class\",\"n-button\"]],[[\"@route\"],[\"contact\"]],{\"statements\":[[0,\"Contact Us\"]],\"parameters\":[]}],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"nav-l-s\"],[8],[0,\"\\n    \"],[7,\"i\",true],[10,\"class\",\"n-button\"],[8],[0,\"sign in\"],[9],[0,\"\\n    \"],[7,\"i\",true],[10,\"class\",\"n-button\"],[8],[0,\"sign up\"],[9],[0,\"\\n    \"],[5,\"link-to\",[],[[\"@route\"],[\"cart\"]],{\"statements\":[[0,\"\\n\"],[7,\"i\",true],[10,\"class\",\"fas fa-cart-plus  shop-btn\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n  \"],[9],[0,\"\\n  \\n\"],[9],[0,\"\\n\\n  \\n  \"],[14,1],[0,\"\\n\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "regendevice/components/general-container.hbs"
    }
  });
  class GeneralContainerComponent extends _component.default {}
  _exports.default = GeneralContainerComponent;
  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, GeneralContainerComponent);
});
;define("regendevice/components/product-detail", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="p-d-content">
        <div class="p-d-img-div">
        <img class="p-d-img" src="{{image}}" alt="phone">
  
      </div>
  <div class="p-m-content">
    <h3>{{this.model.brand}}</h3>
      <h2> {{this.model.model}} </h2>
        <h2>{{this.model.description}}</h2>
  
  </div>
  <div class="p-d-rpice-div">
    <section class="price_sec">
  <i style="text-decoration: line-through;" >{{this.model.price.original}}</i>
  <i style="font-weight: bold; color:red; ">{{this.model.price.current}}</i>
  </section>
  </div>
  <div class="fea-content">
    <h2>Features</h2>
    <ul>
      {{#each this.model.features  as |feature|}}
      <li>{{feature}}</li>
      {{/each}}
    </ul>
  </div>
  <div class="a-item-content">
    <h2>About this item</h2>
    <ul>
      {{#each this.model.about_this_item  as |aboutItem| }}
      <li>{{aboutItem}}</li>
      {{/each}}
    </ul>
  </div>
    </div>
  */
  {
    id: "PZ4lne4p",
    block: "{\"symbols\":[\"aboutItem\",\"feature\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"p-d-content\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"p-d-img-div\"],[8],[0,\"\\n      \"],[7,\"img\",true],[10,\"class\",\"p-d-img\"],[11,\"src\",[29,[[22,\"image\"]]]],[10,\"alt\",\"phone\"],[8],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"p-m-content\"],[8],[0,\"\\n  \"],[7,\"h3\",true],[8],[1,[23,0,[\"model\",\"brand\"]],false],[9],[0,\"\\n    \"],[7,\"h2\",true],[8],[0,\" \"],[1,[23,0,[\"model\",\"model\"]],false],[0,\" \"],[9],[0,\"\\n      \"],[7,\"h2\",true],[8],[1,[23,0,[\"model\",\"description\"]],false],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"p-d-rpice-div\"],[8],[0,\"\\n  \"],[7,\"section\",true],[10,\"class\",\"price_sec\"],[8],[0,\"\\n\"],[7,\"i\",true],[10,\"style\",\"text-decoration: line-through;\"],[8],[1,[23,0,[\"model\",\"price\",\"original\"]],false],[9],[0,\"\\n\"],[7,\"i\",true],[10,\"style\",\"font-weight: bold; color:red; \"],[8],[1,[23,0,[\"model\",\"price\",\"current\"]],false],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"fea-content\"],[8],[0,\"\\n  \"],[7,\"h2\",true],[8],[0,\"Features\"],[9],[0,\"\\n  \"],[7,\"ul\",true],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"model\",\"features\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\",true],[8],[1,[23,2,[]],false],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"a-item-content\"],[8],[0,\"\\n  \"],[7,\"h2\",true],[8],[0,\"About this item\"],[9],[0,\"\\n  \"],[7,\"ul\",true],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"model\",\"about_this_item\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\",true],[8],[1,[23,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n  \"],[9]],\"hasEval\":false}",
    meta: {
      moduleName: "regendevice/components/product-detail.hbs"
    }
  });
  class ProductDetailComponent extends _component.default {}
  _exports.default = ProductDetailComponent;
  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ProductDetailComponent);
});
;define("regendevice/components/product", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
  <div class="card">
     <div class="c_img_div">  
        <img class="c_img" src="https://m.media-amazon.com/images/I/61jmM8GL9BL._SX679_.jpg" alt="phone">
  
      </div>
      <div class="c_content_div">
        <h1>TECNO</h1>
        <h2>Pova 5 Pro 5G </h2>
        <div class="rating-div">
          <li class="fas fa-star"></li>
          <li class="fas fa-star"></li>
          <li class="fas fa-star"></li>
          <li class="fas fa-star"></li>
          <li class="far fa-star"></li>
          {{!-- <li class="	fas fa-star-half-alt"></li> --}}
        </div>
    <section class="price_sec">
  <i style="text-decoration: line-through;" >$198.00</i>
  <i style="font-weight: bold; color:red; ">$120.00</i>
  </section>
  <div class="view_btn_div">
    <LinkTo @route="product-detail" @model="1" class="view_btn" href="#">View more</LinkTo> 
  </div>
      </div>
  
  </div>
  */
  {
    id: "FC3C03nP",
    block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"card\"],[8],[0,\"\\n   \"],[7,\"div\",true],[10,\"class\",\"c_img_div\"],[8],[0,\"  \\n      \"],[7,\"img\",true],[10,\"class\",\"c_img\"],[10,\"src\",\"https://m.media-amazon.com/images/I/61jmM8GL9BL._SX679_.jpg\"],[10,\"alt\",\"phone\"],[8],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"c_content_div\"],[8],[0,\"\\n      \"],[7,\"h1\",true],[8],[0,\"TECNO\"],[9],[0,\"\\n      \"],[7,\"h2\",true],[8],[0,\"Pova 5 Pro 5G \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"rating-div\"],[8],[0,\"\\n        \"],[7,\"li\",true],[10,\"class\",\"fas fa-star\"],[8],[9],[0,\"\\n        \"],[7,\"li\",true],[10,\"class\",\"fas fa-star\"],[8],[9],[0,\"\\n        \"],[7,\"li\",true],[10,\"class\",\"fas fa-star\"],[8],[9],[0,\"\\n        \"],[7,\"li\",true],[10,\"class\",\"fas fa-star\"],[8],[9],[0,\"\\n        \"],[7,\"li\",true],[10,\"class\",\"far fa-star\"],[8],[9],[0,\"\\n\"],[0,\"      \"],[9],[0,\"\\n  \"],[7,\"section\",true],[10,\"class\",\"price_sec\"],[8],[0,\"\\n\"],[7,\"i\",true],[10,\"style\",\"text-decoration: line-through;\"],[8],[0,\"$198.00\"],[9],[0,\"\\n\"],[7,\"i\",true],[10,\"style\",\"font-weight: bold; color:red; \"],[8],[0,\"$120.00\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"view_btn_div\"],[8],[0,\"\\n  \"],[5,\"link-to\",[[12,\"class\",\"view_btn\"],[12,\"href\",\"#\"]],[[\"@route\",\"@model\"],[\"product-detail\",\"1\"]],{\"statements\":[[0,\"View more\"]],\"parameters\":[]}],[0,\" \\n\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[9]],\"hasEval\":false}",
    meta: {
      moduleName: "regendevice/components/product.hbs"
    }
  });
  class ProductComponent extends _component.default {}
  _exports.default = ProductComponent;
  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ProductComponent);
});
;define("regendevice/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("regendevice/controllers/cart", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class CartController extends Ember.Controller {
    get subtotal() {
      return this.model.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
    }
    get tax() {
      return 0.09 * this.subtotal;
    }
    get total() {
      return this.subtotal + this.tax;
    }
  }
  _exports.default = CartController;
});
;define("regendevice/controllers/product-detail", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class ItemController extends Ember.Controller {}
  _exports.default = ItemController;
});
;define("regendevice/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("regendevice/helpers/app-version", ["exports", "regendevice/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = Ember.Helper.helper(appVersion);
});
;define("regendevice/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _pluralize.default;
});
;define("regendevice/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _singularize.default;
});
;define("regendevice/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "regendevice/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("regendevice/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define("regendevice/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("regendevice/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define("regendevice/initializers/export-application-global", ["exports", "regendevice/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }
      var value = _environment.default.exportApplicationGlobal;
      var globalName;
      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }
      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }
  var _default = _exports.default = {
    name: 'export-application-global',
    initialize: initialize
  };
});
;define("regendevice/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define("regendevice/router", ["exports", "regendevice/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('about');
    this.route('contact', {
      path: 'contact-us'
    });
    this.route('home');
    this.route('product-detail', {
      path: '/product/:product_id'
    });
    this.route('not-found', {
      path: '/*path'
    });
    this.route('cart', {
      path: 'shop-cart'
    });
    this.route('products');
  });
});
;define("regendevice/routes/addnewphone/addphone", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class AddnewphoneAddphoneRoute extends Ember.Route {}
  _exports.default = AddnewphoneAddphoneRoute;
});
;define("regendevice/routes/cart", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class CartRoute extends Ember.Route {
    model() {
      const items = [{
        price: 12999
      }, {
        price: 20000
      }];
      return items;
    }
  }
  _exports.default = CartRoute;
});
;define("regendevice/routes/not-found", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class NotFoundRoute extends Ember.Route {}
  _exports.default = NotFoundRoute;
});
;define("regendevice/routes/product-detail", ["exports", "regendevice/components/data/productdata"], function (_exports, _productdata) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class ItemRoute extends Ember.Route {
    model(params) {
      const {
        product_id
      } = params;
      const oneProduct = _productdata.productArray.find(({
        id
      }) => id === product_id);
      console.log(oneProduct);
      return oneProduct;
    }
  }
  _exports.default = ItemRoute;
});
;define("regendevice/routes/products", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class ProductsRoute extends Ember.Route {}
  _exports.default = ProductsRoute;
});
;define("regendevice/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("regendevice/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("regendevice/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("regendevice/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("regendevice/templates/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "fViLtPG6",
    "block": "{\"symbols\":[],\"statements\":[[5,\"general-container\",[],[[],[]]],[0,\"\\n\\n\"],[7,\"h2\",true],[8],[0,\"About Us\"],[9],[0,\"\\n    \"],[7,\"section\",true],[8],[0,\"\\n        \"],[7,\"img\",true],[10,\"src\",\"https://lh3.googleusercontent.com/proxy/bf-7VYznqTFJjY2nE4YT7NZ7eZmtg8sWFrjkEunHekyV-Pa3llblTILsWqJv5_RLBm-UnCcgWXri-s8nc1c\"],[10,\"alt\",\"Our Team\"],[8],[9],[0,\"\\n        \"],[7,\"h2\",true],[8],[0,\"Who We Are\"],[9],[0,\"\\n        \"],[7,\"p\",true],[8],[0,\"We are a passionate team dedicated to providing the latest and best mobile devices to our customers. With a focus on quality and customer satisfaction, we strive to offer a wide range of mobile phones at competitive prices.\"],[9],[0,\"\\n\\n        \"],[7,\"h2\",true],[8],[0,\"Our Mission\"],[9],[0,\"\\n        \"],[7,\"p\",true],[8],[0,\"Our mission is to make cutting-edge mobile technology accessible to everyone. We believe in delivering exceptional value through high-quality products and excellent customer service.\"],[9],[0,\"\\n\\n        \"],[7,\"h2\",true],[8],[0,\"Meet the Team\"],[9],[0,\"\\n        \"],[7,\"p\",true],[8],[0,\"Our team consists of experienced professionals in the field of mobile technology. We work together to bring you the latest trends and innovations in the mobile industry.\"],[9],[0,\"\\n      \\n    \"],[9],[0,\"\\n\\n    \"],[7,\"footer\",true],[8],[0,\"\\n        © 2024 Mobile Sale Website \\n\\n    \"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "regendevice/templates/about.hbs"
    }
  });
});
;define("regendevice/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "GQOM8lGz",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "regendevice/templates/application.hbs"
    }
  });
});
;define("regendevice/templates/cart", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "mGL8VswH",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\\n\"],[7,\"main\",true],[10,\"class\",\"container mt-5\"],[8],[0,\"\\n  \"],[7,\"h1\",true],[8],[0,\"Shopping cart\"],[9],[0,\"\\n  \"],[7,\"ol\",true],[10,\"class\",\"breadcrumb\"],[8],[0,\"\\n\"],[0,\"     \"],[7,\"li\",true],[10,\"class\",\"breadcrumb-item\"],[8],[0,\"Shopping cart\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"section\",true],[10,\"class\",\"w-50 ml-auto text-right mb-5\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"col\"],[8],[0,\"Subtotal\"],[9],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"col\"],[8],[1,[23,0,[\"subtotal\"]],false],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"col\"],[8],[0,\"Tax\"],[9],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"col\"],[8],[1,[23,0,[\"tax\"]],false],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"col\"],[8],[0,\"Total\"],[9],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"col\"],[8],[1,[23,0,[\"total\"]],false],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "regendevice/templates/cart.hbs"
    }
  });
});
;define("regendevice/templates/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "6tYO184N",
    "block": "{\"symbols\":[],\"statements\":[[5,\"general-container\",[],[[],[]]],[0,\"\\n\\n  \"],[7,\"h2\",true],[8],[0,\"Contact Us\"],[9],[0,\"\\n  \"],[7,\"img\",true],[10,\"src\",\"https://media.istockphoto.com/id/1457106246/photo/the-companys-product-quality-certificate-is-compliant-the-check-mark-symbol-represents-the.webp?b=1&s=170667a&w=0&k=20&c=0B-wEScFlzca10cZsOepMEmvm4tNX-9-v_uPJmmSTIw=\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n  \"],[7,\"p\",true],[8],[0,\"\\n    Regendevice Representatives would love to help you\"],[7,\"br\",true],[8],[9],[0,\"\\n    choose a destination or answer any questions you may have.\\n  \"],[9],[0,\"\\n  \"],[7,\"address\",true],[8],[0,\"\\n    Regendevice HQ\\n    \"],[7,\"p\",true],[8],[0,\"\\n      1212 Test Address Avenue\"],[7,\"br\",true],[8],[9],[0,\"\\n      Testington, OR 97233\\n    \"],[9],[0,\"\\n \\n  \"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "regendevice/templates/contact.hbs"
    }
  });
});
;define("regendevice/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "28IV6442",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[5,\"general-container\",[],[[],[]]],[0,\"\\n\\n\\n\\n    \\n\\n  \"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "regendevice/templates/index.hbs"
    }
  });
});
;define("regendevice/templates/not-found", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "D3XazEva",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\\n    \"],[7,\"style\",true],[8],[0,\"\\n        body {\\n            background-color: #f4f4f4;\\n            color: #333;\\n            font-family: 'Arial', sans-serif;\\n            text-align: center;\\n            margin: 0;\\n            padding: 0;\\n            display: flex;\\n            align-items: center;\\n            justify-content: center;\\n            height: 100vh;\\n        }\\n\\n        .container {\\n            max-width: 600px;\\n            padding: 20px;\\n            background-color: #fff;\\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\\n            border-radius: 5px;\\n        }\\n\\n        h1 {\\n            color: #e44d26;\\n            font-size: 120px;\\n            margin: 0;\\n        }\\n\\n        p {\\n            font-size: 18px;\\n            margin-top: 10px;\\n        }\\n\\n        a {\\n            color: #3498db;\\n            text-decoration: none;\\n            font-weight: bold;\\n        }\\n\\n        a:hover {\\n            text-decoration: underline;\\n        }\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n        \"],[7,\"h1\",true],[8],[0,\"404\"],[9],[0,\"\\n        \"],[7,\"p\",true],[8],[0,\"Oops! The page you are looking for might be in another castle.\"],[9],[0,\"\\n        \"],[5,\"link-to\",[],[[\"@route\"],[\"index\"]],{\"statements\":[[0,\"Return \"]],\"parameters\":[]}],[0,\"\\n    \"],[9],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "regendevice/templates/not-found.hbs"
    }
  });
});
;define("regendevice/templates/product-detail", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "ky+1fcGo",
    "block": "{\"symbols\":[\"aboutItem\",\"feature\"],\"statements\":[[5,\"general-container\",[],[[],[]],{\"statements\":[[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"p-d-content\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"p-d-img-div\"],[8],[0,\"\\n      \"],[7,\"img\",true],[10,\"class\",\"p-d-img\"],[11,\"src\",[29,[[23,0,[\"model\",\"image\"]]]]],[10,\"alt\",\"phone\"],[8],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"p-d-m_p-content\"],[8],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"p-m-content\"],[8],[0,\"\\n  \"],[7,\"h3\",true],[8],[1,[23,0,[\"model\",\"brand\"]],false],[9],[0,\"\\n    \"],[7,\"h2\",true],[8],[0,\" \"],[1,[23,0,[\"model\",\"model\"]],false],[0,\" \"],[9],[0,\"\\n      \"],[7,\"h2\",true],[8],[1,[23,0,[\"model\",\"description\"]],false],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"p-d-rpice-div\"],[8],[0,\"\\n  \"],[7,\"section\",true],[10,\"class\",\"price_sec\"],[8],[0,\"\\n\"],[7,\"i\",true],[10,\"style\",\"text-decoration: line-through;\"],[8],[1,[23,0,[\"model\",\"price\",\"original\"]],false],[9],[0,\"\\n\"],[7,\"i\",true],[10,\"style\",\"font-weight: bold; color:red; \"],[8],[1,[23,0,[\"model\",\"price\",\"current\"]],false],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"fea-content\"],[8],[0,\"\\n  \"],[7,\"h2\",true],[8],[0,\"Features\"],[9],[0,\"\\n  \"],[7,\"ul\",true],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"model\",\"features\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\",true],[8],[1,[23,2,[]],false],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"a-item-content\"],[8],[0,\"\\n  \"],[7,\"h2\",true],[8],[0,\"About this item\"],[9],[0,\"\\n  \"],[7,\"ul\",true],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"model\",\"about_this_item\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\",true],[8],[1,[23,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \\n\"],[7,\"p\",true],[8],[0,\"model \"],[1,[23,0,[\"model\",\"id\"]],false],[0,\"\\nworks \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "regendevice/templates/product-detail.hbs"
    }
  });
});
;define("regendevice/templates/products", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "1GIQX8Kd",
    "block": "{\"symbols\":[],\"statements\":[[5,\"general-container\",[],[[],[]]],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"cards_div\"],[8],[0,\"\\n  \"],[5,\"product\",[],[[],[]]],[0,\"\\n\\n\"],[0,\"\\n \"],[7,\"div\",true],[10,\"class\",\"card\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"c_img_div\"],[8],[0,\"\\n      \"],[7,\"img\",true],[10,\"class\",\"c_img\"],[10,\"src\",\"https://m.media-amazon.com/images/I/71Ftzmh3XWL._SX679_.jpg\"],[10,\"alt\",\"phone\"],[8],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"c_content_div\"],[8],[0,\"\\n      \"],[7,\"h1\",true],[8],[0,\"Realme\"],[9],[0,\"\\n      \"],[7,\"h2\",true],[8],[0,\"realme narzo N55 \"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"c_price\"],[8],[7,\"span\",true],[10,\"class\",\"rs_tag\"],[8],[0,\"Rs\\\\-\"],[9],[0,\"10,000\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"view_btn_div\"],[8],[0,\"\\n  \"],[5,\"link-to\",[[12,\"class\",\"view_btn\"],[12,\"href\",\"#\"]],[[\"@route\",\"@model\"],[\"product-detail\",\"2\"]],{\"statements\":[[0,\"View more\"]],\"parameters\":[]}],[0,\" \\n\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"],[0,\" \"],[7,\"div\",true],[10,\"class\",\"card\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"c_img_div\"],[8],[0,\"\\n      \"],[7,\"img\",true],[10,\"class\",\"c_img\"],[10,\"src\",\"https://m.media-amazon.com/images/I/71b+-Y1SaML._SX679_.jpg\"],[10,\"alt\",\"phone\"],[8],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"c_content_div\"],[8],[0,\"\\n      \"],[7,\"h1\",true],[8],[0,\"TECNO\"],[9],[0,\"\\n      \"],[7,\"h2\",true],[8],[0,\"Tecno camon 20 pro 5G \"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"c_price\"],[8],[7,\"span\",true],[10,\"class\",\"rs_tag\"],[8],[0,\"Rs\\\\-\"],[9],[0,\"20,000\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"view_btn_div\"],[8],[0,\"\\n  \"],[5,\"link-to\",[[12,\"class\",\"view_btn\"],[12,\"href\",\"#\"]],[[\"@route\",\"@model\"],[\"product-detail\",\"3\"]],{\"statements\":[[0,\"View more\"]],\"parameters\":[]}],[0,\" \\n\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\\n\"],[0,\"\\n \"],[7,\"div\",true],[10,\"class\",\"card\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"c_img_div\"],[8],[0,\"\\n      \"],[7,\"img\",true],[10,\"class\",\"c_img\"],[10,\"src\",\"https://m.media-amazon.com/images/I/81H7FJtH4SL._SX679_.jpg\"],[10,\"alt\",\"phone\"],[8],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"c_content_div\"],[8],[0,\"\\n      \"],[7,\"h1\",true],[8],[0,\"Redmi\"],[9],[0,\"\\n      \"],[7,\"h2\",true],[8],[0,\"Redmi 13C 5G \"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"c_price\"],[8],[7,\"span\",true],[10,\"class\",\"rs_tag\"],[8],[0,\"Rs\\\\-\"],[9],[0,\"12,999\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"view_btn_div\"],[8],[0,\"\\n  \"],[5,\"link-to\",[[12,\"class\",\"view_btn\"],[12,\"href\",\"#\"]],[[\"@route\",\"@model\"],[\"product-detail\",\"4\"]],{\"statements\":[[0,\"View more\"]],\"parameters\":[]}],[0,\"  \\n\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"],[0,\" \"],[7,\"div\",true],[10,\"class\",\"card\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"c_img_div\"],[8],[0,\"\\n      \"],[7,\"img\",true],[10,\"class\",\"c_img\"],[10,\"src\",\"https://m.media-amazon.com/images/I/61uUEqO5uQL._SX679_.jpg\"],[10,\"alt\",\"phone\"],[8],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"c_content_div\"],[8],[0,\"\\n      \"],[7,\"h1\",true],[8],[0,\"POCO\"],[9],[0,\"\\n      \"],[7,\"h2\",true],[8],[0,\"POCO C51 \"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"c_price\"],[8],[7,\"span\",true],[10,\"class\",\"rs_tag\"],[8],[0,\"Rs\\\\-\"],[9],[0,\"5,999\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"view_btn_div\"],[8],[0,\"\\n  \"],[5,\"link-to\",[[12,\"class\",\"view_btn\"],[12,\"href\",\"#\"]],[[\"@route\",\"@model\"],[\"product-detail\",\"5\"]],{\"statements\":[[0,\"View more\"]],\"parameters\":[]}],[0,\"  \\n\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "regendevice/templates/products.hbs"
    }
  });
});
;define("regendevice/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("regendevice/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("regendevice/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("regendevice/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('regendevice/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("regendevice/app")["default"].create({"name":"regendevice","version":"0.0.0+2c89eb47"});
          }
        
//# sourceMappingURL=regendevice.map
