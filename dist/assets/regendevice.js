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
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("regendevice/app", ["exports", "ember-resolver", "ember-load-initializers", "regendevice/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"regendevice/config/environment"eaimeta@70e063a35619d71f
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
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("regendevice/components/add-product", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
  
  <form {{on "submit" this.submitForm}} class="form" >
      <p class="title">Add Product </p>
      <p class="message">Here you can add your new Products! </p>
          
              
      <label>
          {{input class="input" type="text" value=model.brand}}
          <span>Brand </span>
      </label> 
          
      <label>
          {{input class="input" type="text" value=model.model}}
          <span>Product model</span>
      </label>
      <label>
          {{input class="input" type="url" value=model.image}}
          <span> Product Image URL</span>
      </label>
  
       <label>
          {{input class="input" type="text" value=model.description}}
          <span> Description</span>
      </label>
       <div class="flex">
          <label>
              {{input  class="input" type="number" name="radioGroup" value=model.a_price}}
              <span>Actual price in $</span>
          </label>
  
          <label>
              {{input class="input" type="number" name="radioGroup" value=model.c_price}}
              <span>Current price in $</span>
          </label>
      </div> 
      <label>
              {{textarea class="input" value=model.features name="features" id="features" cols="30" rows="1" }}
              <span>Features</span>
          </label>
  
          <label>
              {{textarea class="input" value=model.about_this_item name="aboutthisitem" id="aboutthisitem" cols="30" rows="1" }}
              <span>About this item</span>
          </label>
    {{!-- after this inputs for testing every inputs works in ember --}}
          <label>
              <select class="input" value={{model.product_type}} {{on "change" this.handleSelectChange}}>
                {{#each this.selectOptions as |opt| }}
  
                <option>{{opt}}</option>
  
                {{/each}}
              </select>
              <span>Product type</span>
          </label>
      <button class="submit">Submit</button>
  </form>
  */
  {
    id: "4ThVLY/R",
    block: "{\"symbols\":[\"opt\"],\"statements\":[[0,\"\\n\\n\"],[7,\"form\",false],[12,\"class\",\"form\"],[3,\"on\",[\"submit\",[23,0,[\"submitForm\"]]]],[8],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"title\"],[8],[0,\"Add Product \"],[9],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"message\"],[8],[0,\"Here you can add your new Products! \"],[9],[0,\"\\n        \\n            \\n    \"],[7,\"label\",true],[8],[0,\"\\n        \"],[1,[28,\"input\",null,[[\"class\",\"type\",\"value\"],[\"input\",\"text\",[24,[\"model\",\"brand\"]]]]],false],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Brand \"],[9],[0,\"\\n    \"],[9],[0,\" \\n        \\n    \"],[7,\"label\",true],[8],[0,\"\\n        \"],[1,[28,\"input\",null,[[\"class\",\"type\",\"value\"],[\"input\",\"text\",[24,[\"model\",\"model\"]]]]],false],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Product model\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"label\",true],[8],[0,\"\\n        \"],[1,[28,\"input\",null,[[\"class\",\"type\",\"value\"],[\"input\",\"url\",[24,[\"model\",\"image\"]]]]],false],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\" Product Image URL\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n     \"],[7,\"label\",true],[8],[0,\"\\n        \"],[1,[28,\"input\",null,[[\"class\",\"type\",\"value\"],[\"input\",\"text\",[24,[\"model\",\"description\"]]]]],false],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\" Description\"],[9],[0,\"\\n    \"],[9],[0,\"\\n     \"],[7,\"div\",true],[10,\"class\",\"flex\"],[8],[0,\"\\n        \"],[7,\"label\",true],[8],[0,\"\\n            \"],[1,[28,\"input\",null,[[\"class\",\"type\",\"name\",\"value\"],[\"input\",\"number\",\"radioGroup\",[24,[\"model\",\"a_price\"]]]]],false],[0,\"\\n            \"],[7,\"span\",true],[8],[0,\"Actual price in $\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[7,\"label\",true],[8],[0,\"\\n            \"],[1,[28,\"input\",null,[[\"class\",\"type\",\"name\",\"value\"],[\"input\",\"number\",\"radioGroup\",[24,[\"model\",\"c_price\"]]]]],false],[0,\"\\n            \"],[7,\"span\",true],[8],[0,\"Current price in $\"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\" \\n    \"],[7,\"label\",true],[8],[0,\"\\n            \"],[1,[28,\"textarea\",null,[[\"class\",\"value\",\"name\",\"id\",\"cols\",\"rows\"],[\"input\",[24,[\"model\",\"features\"]],\"features\",\"features\",\"30\",\"1\"]]],false],[0,\"\\n            \"],[7,\"span\",true],[8],[0,\"Features\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[7,\"label\",true],[8],[0,\"\\n            \"],[1,[28,\"textarea\",null,[[\"class\",\"value\",\"name\",\"id\",\"cols\",\"rows\"],[\"input\",[24,[\"model\",\"about_this_item\"]],\"aboutthisitem\",\"aboutthisitem\",\"30\",\"1\"]]],false],[0,\"\\n            \"],[7,\"span\",true],[8],[0,\"About this item\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"],[0,\"        \"],[7,\"label\",true],[8],[0,\"\\n            \"],[7,\"select\",false],[12,\"class\",\"input\"],[12,\"value\",[24,[\"model\",\"product_type\"]]],[3,\"on\",[\"change\",[23,0,[\"handleSelectChange\"]]]],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"selectOptions\"]]],null,{\"statements\":[[0,\"\\n              \"],[7,\"option\",true],[8],[1,[23,1,[]],false],[9],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[9],[0,\"\\n            \"],[7,\"span\",true],[8],[0,\"Product type\"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[7,\"button\",true],[10,\"class\",\"submit\"],[8],[0,\"Submit\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    meta: {
      moduleName: "regendevice/components/add-product.hbs"
    }
  });
  // import fetch from 'fetch';
  let AddProductComponent = _exports.default = (_dec = Ember.inject.service, _dec2 = Ember._tracked, _dec3 = Ember._action, _dec4 = Ember._action, (_class = class AddProductComponent extends _component.default {
    handleSelectChange(event) {
      const selectedValue = event.target.value;
      this.model.product_type = selectedValue;
    }
    // create the contructor while user enter the form page (if it's need)
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _defineProperty(this, "model", null);
      //   fetch('https://dummyjson.com/products/categories')
      // .then(res => res.json())
      // .then(console.log);
      _initializerDefineProperty(this, "selectedOption", _descriptor2, this);
      _defineProperty(this, "selectOptions", ['phone', 'laptop', 'watch']);
      this.model = this.store.createRecord('product', {
        // model : "realme 12 Pro",
        // brand : "realme",
        // product_type : "watch",
      });
    }
    submitForm(event) {
      event.preventDefault();
      // this.store.push(this.model);

      // Handle form submission logic here
      console.log('Form submitted with values:', store);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "selectedOption", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleSelectChange", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "handleSelectChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "submitForm", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "submitForm"), _class.prototype)), _class));
  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, AddProductComponent);
});
;define("regendevice/components/cart", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="cart-container">
    <div class="product-container">
    {{#each this.cart.itemList as |item|}}
    <div class="add-cart-price-content">
    <div class="product-card">
    <img class="product-image" src="{{item.image}}" alt="Product Image">
    
  </div>
  <div class="price-div">
    <input type="number" 
    class="increse-product" 
    value="{{item.count}}"
    {{on "input" (fn this.updateItemCount item)}}
    >
    <div class="product-des-div">
      <div class="product-details">
      <div class="product-name">{{item.productName}}</div>
      <div class="product-name">{{item.pDescription}}</div>
      <div class="product-price">{{currency item.price}}</div>
    
    </div>
      <p class="product-des"></p>
    </div> 
  </div>
  </div>
    {{/each}}
  
    </div>
  
      <div class="total-div">
        <div class="total-content">
      <div class="row">
        <span class="col">Subtotal : {{currency this.subtotal }}</span> 
      </div>
      <div class="row">
        <span class="col">Tax : {{currency this.tax }}</span>
      </div>
       <div class="row">
        <span class="col">Total : {{currency this.total}}</span> 
      </div>
      <div class="buy-btn-div">
        <button class="s-c-buy-btn">Buy Now</button>
      </div>
    </div>
        
        
      </div>
    
  </div>
  
  */
  {
    id: "JkAgHXuJ",
    block: "{\"symbols\":[\"item\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"cart-container\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"product-container\"],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"cart\",\"itemList\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"add-cart-price-content\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"product-card\"],[8],[0,\"\\n  \"],[7,\"img\",true],[10,\"class\",\"product-image\"],[11,\"src\",[29,[[23,1,[\"image\"]]]]],[10,\"alt\",\"Product Image\"],[8],[9],[0,\"\\n  \\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"price-div\"],[8],[0,\"\\n  \"],[7,\"input\",false],[12,\"class\",\"increse-product\"],[12,\"value\",[29,[[23,1,[\"count\"]]]]],[12,\"type\",\"number\"],[3,\"on\",[\"input\",[28,\"fn\",[[23,0,[\"updateItemCount\"]],[23,1,[]]],null]]],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"product-des-div\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"product-details\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"product-name\"],[8],[1,[23,1,[\"productName\"]],false],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"product-name\"],[8],[1,[23,1,[\"pDescription\"]],false],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"product-price\"],[8],[1,[28,\"currency\",[[23,1,[\"price\"]]],null],false],[9],[0,\"\\n  \\n  \"],[9],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"product-des\"],[8],[9],[0,\"\\n  \"],[9],[0,\" \\n\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"total-div\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"total-content\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"col\"],[8],[0,\"Subtotal : \"],[1,[28,\"currency\",[[23,0,[\"subtotal\"]]],null],false],[9],[0,\" \\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"col\"],[8],[0,\"Tax : \"],[1,[28,\"currency\",[[23,0,[\"tax\"]]],null],false],[9],[0,\"\\n    \"],[9],[0,\"\\n     \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"col\"],[8],[0,\"Total : \"],[1,[28,\"currency\",[[23,0,[\"total\"]]],null],false],[9],[0,\"\xA0\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"buy-btn-div\"],[8],[0,\"\\n      \"],[7,\"button\",true],[10,\"class\",\"s-c-buy-btn\"],[8],[0,\"Buy Now\"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n      \\n      \\n    \"],[9],[0,\"\\n  \\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "regendevice/components/cart.hbs"
    }
  });
  // import { tracked } from '@glimmer/tracking';
  let CartComponent = _exports.default = (_dec = Ember.inject.service('shopCart'), _dec2 = Ember._action, (_class = class CartComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "cart", _descriptor, this);
    }
    // @tracked price = item.price;
    // @tracked finalCount = 0;
    // @tracked tax = 0;
    // @tracked itemCount = item.count;

    get subtotal() {
      return this.cart.itemList.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
    }
    get tax() {
      return 0.09 * this.subtotal;
    }
    get total() {
      return this.subtotal + this.tax;
    }
    updateItemCount(item, event) {
      const count = event.target.value;
      if (count >= 0) {
        item.count = count;
        // this.finalCount = count;
      } else {
        item.count = 0;
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cart", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "updateItemCount", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "updateItemCount"), _class.prototype)), _class));
  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, CartComponent);
});
;define("regendevice/components/data/productdata", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.productArray = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  const productArray = _exports.productArray = [{
    "id": "1",
    "image": "https://m.media-amazon.com/images/I/61jmM8GL9BL._SX679_.jpg",
    "brand": "TECNO",
    "productName": "pova 5 Pro 5G",
    "description": "(Dark Illusion, 8GB RAM,256GB Storage)| Segment 1st 68W Ultra Fast Charging | India's 1st Multi-Colored Backlit ARC Interface | 50MP AI Dual Camera | 6.78”FHD+ Dot-in Display",
    "price": {
      "original": "198",
      "current": "98"
    },
    "features": ["Special Feature	 :  Front Camera, Camera, Fast Charging", "Connectivity Technology : Bluetooth, Wi-Fi, USB", "Memory Storage Capacity : 256 GB"],
    "about_item": ["Segment 1st 68W Ultra Fast Charging - 50% battery in just 15minutes | Bypass Charging for playing games | 5000mAh Battery | 10W Reverse Charging", "India's 1st Multi-colored Backlit ARC Interface | Customize New multi color light effect for Notifications, Calls, Gaming, Music and others", "Dimensity 6080 highly efficient 6nm 5G Processor | 2.4GHz powerful octa-core Processor with 390K antutu score | 10 5G Bands support | HyperEngine 3.0 Lite Game Engine and Panther Game Engine 3.0", "Upto 16GB Expandable RAM with memory fusion | 128GB internal storage | Dedicated SD Card slot", "6.78FHD+dot-in display| Buttery smooth with 120Hz refresh rate | 240Hz touch Sampling rate | 50MP high-res dual Rear Camera | F1.6 large aperture with PDAF | 16MP Selfie Camera | NFC for quick contactless operations"]
  }, {
    "id": "2",
    "image": "https://m.media-amazon.com/images/I/71b+-Y1SaML._SX679_.jpg",
    "brand": "TECNO",
    "productName": "TECNO cammon 20 Pro 5G",
    "description": "(Dark Welkin, 8GB RAM,128GB Storage)| India's 1st MediaTek Dimensity 8050 Processor | 16GB Expandable RAM | 64MP RGBW(G+P) OIS Rear Camera",
    "price": {
      "original": "290",
      "current": "250"
    },
    "features": ["Network Service Provider :	Unlocked", "Operating System :	Android 13.0", "Cellular Technology :	5G"],
    "about_item": ["Amazing night photography with 64MP RGBW(G+P) OIS lens & F1.65 large aperture | 32MP Selfie Camera for ultra-clear selfie | DSLR level portrait system, Pro-shooting modes and Video HDR", "6.67FHD+AMOLED 10bit Dot-in display| DC Dimming and 1920Hz PWM Dimming for flicker free display | TÜV Rheinland Low blue light emission certified Eye Protection | Ultra-fast In-display Fingerprint sensor", "India's 1st MediaTek Dimensity 8050 Processor", "Up to 256GB UFS 2.1 Internal Storage for seamless data experience | 8GB LPDDR4x RAM with 8GB Software powered Customizable RAM | Up to 1TB dedicated expandable storage slot", "7.8mm Ultra sleek design | Super Slim Leather finished back | Muse Design Award 2023 Gold winner | Ring Flashlight"]
  }, {
    "id": "3",
    "image": "https://m.media-amazon.com/images/I/71VW8LmqqPL._SX679_.jpg",
    "brand": "Redmi",
    "productName": "Redmi Note 13 5G",
    "description": "Arctic White, 6GB RAM, 128GB Storage) | MTK Dimensity 6080 5G | 7.6mm, Slimmest Note Ever",
    "price": {
      "original": "240",
      "current": "180"
    },
    "features": ["Network Service Provider :	Unlocked for All Carriers", "Operating System :	Android 13, MIUI 14", "Cellular Technology	: 5G"],
    "about_item": ["Display: 6.67 FHD+ pOLED (1080x2400) Ultra-narrow bezels Display with 120Hz Refresh rate; 1000nits peak brightness; Corning Gorilla Glass 5 Display Protection", "Processor:Mediatek Dimensity 6080 6nm Octa-core 5G processor for high performance ; Up to 2.4GHz; Upto 12GB RAM including 6GB Virtual RAM", "Camera: 108MP 3X in-sensor zoom AI Triple Camera with 8MP Ultra Wide sensor and 2MP Macro camera| 16MP Front camera", "Battery: 5000 mAh large battery with 33W fast charger in-box and Type-C connectivityt", "Memory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 | Dual SIM (nano+nano) 5G"]
  }, {
    "id": "4",
    "image": "https://m.media-amazon.com/images/I/61amb0CfMGL._SX679_.jpg",
    "brand": "OnePlus",
    "productName": "OnePlus 11 5G",
    "description": "(Eternal Green, 16GB RAM, 256GB Storage)",
    "price": {
      "original": "780",
      "current": "470"
    },
    "features": ["Network Service Provider :	Unlocked for All Carriers", "Operating System :	OxygenOS", "Cellular Technology	: 5G"],
    "about_item": ["Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 48MP Ultrawide Camera with Sony IMX581 (FOV: 115 degree) and 32MP Telephoto lens with Sony IMX709 (2X Optical Zoom); 16MP Front (Selfie) Camera with EIS support", "Camera Modes: Photo, Video, Night, PRO, PANO, Portrait, TIME-LAPSE, SLO-MO, Text scanner, Movie, Long Exposure, Dual-view video, TILT-SHIFT, XPAN, Scan, STICKER, and AI ID photo", "Display: 6.7 Inches; 120 Hz AMOLED QHD Display with Corning Gorilla Glass Victus; Resolution: 3216 X 1440 pixels; HDR 10+, sRGB, 10-bit Color Depth, PWM + DC dimming", "Operating System: OxygenOS based on Android 13 Processor: Snapdragon 8 Gen 2 Mobile Platform"]
  }, {
    "id": "5",
    "image": "https://m.media-amazon.com/images/I/41yAce7gd4L._SX300_SY300_QL70_FMwebp_.jpg",
    "brand": "iQOO",
    "productName": "iQOO Z7 Pro 5G",
    "description": "(Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimesity 7200 5G Processor | 64MP Aura Light OIS Camera | Segment's Slimmest & Lightest Smartphone",
    "price": {
      "original": "550",
      "current": "350"
    },
    "features": ["Network Service Provider	: Unlocked for All Carriers", "Operating System :	Funtouch OS 13 Based On Android 13", "Cellular Technology :	5G"],
    "about_item": ["Segment 1st 68W Ultra Fast Charging - 50% battery in just 15minutes | Bypass Charging for playing games | 5000mAh Battery | 10W Reverse Charging", "India's 1st Multi-colored Backlit ARC Interface | Customize New multi color light effect for Notifications, Calls, Gaming, Music and others", "Dimensity 6080 highly efficient 6nm 5G Processor | 2.4GHz powerful octa-core Processor with 390K antutu score | 10 5G Bands support | HyperEngine 3.0 Lite Game Engine and Panther Game Engine 3.0", "Upto 16GB Expandable RAM with memory fusion | 128GB internal storage | Dedicated SD Card slot", "6.78FHD+dot-in display| Buttery smooth with 120Hz refresh rate | 240Hz touch Sampling rate | 50MP high-res dual Rear Camera | F1.6 large aperture with PDAF | 16MP Selfie Camera | NFC for quick contactless operations"]
  }, {
    "id": "6",
    "image": "https://m.media-amazon.com/images/I/71G7wMeIZ8L._SX679_.jpg",
    "brand": "Samsung",
    "productName": "Samsung Galaxy S24 Plus 5G",
    "description": "(Cobalt Violet, 12GB, 512GB Storage) ",
    "price": {
      "original": "1200",
      "current": "950"
    },
    "features": ["Network Service Provider :	Unlocked for All Carriers", "Operating System	: Android 14.0", "Cellular Technology	: 5G"],
    "about_item": ["Easy to grip. Satisfying to hold. With their unified design and satin finish, Galaxy S24+ feels as smooth as it looks.", "They're the upgrades you've waited for. More screen. More battery. More processing power. There's so much more to love about Galaxy S24+. Especially now that Galaxy S24+ comes with the highest screen resolution on a Galaxy device: QHD+.", "A true pixel powerhouse that will not disappoint. Ever. Snap high-res pics for that will no doubt withstand the test of time for years to come.", "Search like never before with Circle to Search. Simply trace an object to get Google Search results. It's a new visual way to find what you're looking for."]
  }, {
    "id": "7",
    "image": "https://m.media-amazon.com/images/I/81WimZLWH1L._SX679_.jpg",
    "brand": "Realme",
    "productName": "realme narzo 60X 5G",
    "description": "（Stellar Green,6GB,128GB Storage ） Up to 2TB External Memory | 50 MP AI Primary Camera | Segments only 33W Supervooc Charge",
    "price": {
      "original": "198",
      "current": "125"
    },
    "features": ["Network Service Provider :	Unlocked for All Carriers", "Operating System	: Android 14.0", "Cellular Technology	: 5G"],
    "about_item": ["With a 33 W Powerful SUPERVOOC Charge, 30 minutes charge for 50% battery and full charge in 70 minutes,5000mAh massive battery, without ever being concerned about the battery running out", "50MP Primary Camera,street photography high-quality pictures that catch every details with astounding clarity", "Fast refresh displays cut blur in animations, scrolling and games to provide a notably better user experience. Multi levels of refresh rates means the display can save much energy and users can use for longer time", "According to the installation of a photo 4M to calculate: 128GB of memory can be installed 28000 + photos； According to a 720P TV series size of 250M to calculate: 128GB memory can be loaded with 450 + TV series"]
  }, {
    "id": "8",
    "image": "https://m.media-amazon.com/images/I/61JS7lF2aqL._SX679_.jpg",
    "brand": "iQOO",
    "productName": "iQOO Neo 7 5G",
    "description": "(Frost Blue, 8GB RAM, 128GB Storage) | Dimensity 8200, only 4nm Processor in The Segment | 50% Charge in 10 mins | Motion Control & 90 FPS Gaming",
    "price": {
      "original": "280",
      "current": "230"
    },
    "features": ["Network Service Provider	Unlocked for All Carriers", "Operating System	Funtouch OS 13 Based On Android 13", "Cellular Technology	: 5G"],
    "about_item": ["MediaTek Dimensity 8200 5G Mobile platform adopts TSMC 4nm process and has excellent Power Efficiency Performance. Also, Equipped with the LPDDR5 RAM & UFS 3.1 Storage.", "The 120W FlashCharge charges from 1% to 50% in just 10 minutes (25 minutes for a full charge)", "Motion Control powered by Gyroscope & Acceleration Sensors to give 6 additional Phone movement-based control options while Gaming", "6.78” 120Hz AMOLED Display with HDR 10+ Certification, Netflix HDR Support & 1300 Nits Peak Brightness"]
  }, {
    "id": "9",
    "image": "https://m.media-amazon.com/images/I/71E5zB1qbIL._SX679_.jpg",
    "brand": "Apple",
    "productName": "Apple iPhone 12",
    "description": "Apple iPhone 12 (256GB) - (Product) RED",
    "price": {
      "original": "940",
      "current": "650"
    },
    "features": ["Network Service Provider :	Unlocked for All Carriers", "Operating System	: iOS 14", "Cellular Technology	: 5G"],
    "about_item": ["6.1-inch (15.5 cm diagonal) Super Retina XDR display Ceramic Shield, tougher than any smartphone glass", "A14 Bionic chip, the fastest chip ever in a smartphone Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording ", "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording Industry-leading IP68 water resistance", "Supports MagSafe accessories for easy attach and faster wireless charging"]
  }, {
    "id": "10",
    "image": "https://m.media-amazon.com/images/I/51TK-AM4k0L._SX679_.jpg",
    "brand": "Lava",
    "productName": "Lava Blaze 5G",
    "description": "Glass Blue, 6GB RAM, UFS 2.2 128GB Storage) | 5G Ready | 50MP AI Triple Camera | Upto 11GB Expandable RAM | Charger Included | Clean Android (No Bloatware)",
    "price": {
      "original": "130",
      "current": "102"
    },
    "features": ["Network Service Provider :	Unlocked for All Carriers", "Operating System :	Android 13", "Cellular Technology	: 5G"],
    "about_item": ["Supports All India 5G Bands - All sub-6mm-wave bands being auctioned and bought by Operators in India", "6+5*GB RAM with UFS 2.2 compliant 128GB ROM, Expandable up to 1 TB (*Virtual RAM)", "16.55cm(6.5) HD+ 90Hz Display with Widevine L1 DRM Protection - Enjoy all your Content in High Resolution", "Clean Android 12 OS and Anonymous Call Recording | 2K Video Recording with EIS support | 5000mAh Lithium Polymer Battery | Side Fingerprint Sensor"]
  }];
});
;define("regendevice/components/general-container", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <nav class="nav">
    <div class="nav-content">
        <LinkTo @route="products" class="n-button">Products</LinkTo>
        {{!-- <LinkTo @route="about" class="n-button">About Us</LinkTo> --}}
        {{!-- <LinkTo @route="contact" class="n-button">Contact Us</LinkTo> --}}
    </div>
    <div class="nav-l-s">
      <i class="n-button">sign in</i>
      <i class="n-button">sign up</i>
      <LinkTo @route="cart">
  <i class="fas fa-cart-plus  shop-btn"></i>
  {{#if this.shopCart.itemList.length}}
    <span class="cart-count ">{{this.shopCart.itemList.length}}</span>
    {{/if}}
  </LinkTo>
    </div>
    
  </nav>
  
    
    {{yield}}
  
  
  */
  {
    id: "DmQYWvP5",
    block: "{\"symbols\":[\"&default\"],\"statements\":[[7,\"nav\",true],[10,\"class\",\"nav\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"nav-content\"],[8],[0,\"\\n      \"],[5,\"link-to\",[[12,\"class\",\"n-button\"]],[[\"@route\"],[\"products\"]],{\"statements\":[[0,\"Products\"]],\"parameters\":[]}],[0,\"\\n\"],[0,\"  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"nav-l-s\"],[8],[0,\"\\n    \"],[7,\"i\",true],[10,\"class\",\"n-button\"],[8],[0,\"sign in\"],[9],[0,\"\\n    \"],[7,\"i\",true],[10,\"class\",\"n-button\"],[8],[0,\"sign up\"],[9],[0,\"\\n    \"],[5,\"link-to\",[],[[\"@route\"],[\"cart\"]],{\"statements\":[[0,\"\\n\"],[7,\"i\",true],[10,\"class\",\"fas fa-cart-plus  shop-btn\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[23,0,[\"shopCart\",\"itemList\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"span\",true],[10,\"class\",\"cart-count \"],[8],[1,[23,0,[\"shopCart\",\"itemList\",\"length\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n  \"],[9],[0,\"\\n  \\n\"],[9],[0,\"\\n\\n  \\n  \"],[14,1],[0,\"\\n\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "regendevice/components/general-container.hbs"
    }
  });
  let GeneralContainerComponent = _exports.default = (_dec = Ember.inject.service, (_class = class GeneralContainerComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "shopCart", _descriptor, this);
    }
    get itemCount() {
      this.shopCart.itemList.reduce((total, item) => {
        return total += item.count;
      }, 0);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "shopCart", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, GeneralContainerComponent);
});
;define("regendevice/components/product-detail", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="p-d-content">
        <div class="p-d-img-div">
        <img class="p-d-img" src="{{this.model.image}}" alt="phone">
      </div>
      <div class="p-d-m_p-content">
  <div class="p-m-content">
  
    <h3>{{this.model.brand}}</h3>
      <h2> {{this.model.productName}} </h2>
        <h2>{{this.model.description}}</h2>
  
  </div>
  <div class="p-d-rpice-div">
    <section class="price_sec">
  <del style="text-decoration: line-through;" >{{currency this.model.price.original}}</del>
  <i style="font-weight: bold; color:red; ">{{currency this.model.price.current}}</i>
  
  </section>
  <div class="buy-div">
  <button {{on "click" this.addToCart}} class="add-cart-btn">ADD TO CART</button>
  <button class="buy-btn">BUY NOW</button>
  </div>
  <button class="offer-btn" {{on "click" (fn this.Offer 'emi')}}>EMI Option</button>
  <button class="offer-btn" {{on "click" (fn this.Offer 'bank')}} >Bank Offer</button>
  <button class="offer-btn" {{on "click" (fn this.Offer 'credit')}} >Credit Card Offer</button>
  
  {{!-- offer cards show here when user click offer button --}}
  {{#if this.active }}
  <div  class="offer-div">
    <p  class="off-div-head"> Offer</p>
    <p class="off-div-para"> {{currency this.offerPrice}}{{this.priceDetails}} </p>
    
  </div>
  {{/if}}
  
  </div>
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
      {{#each this.model.about_item  as |aboutItem| }}
      <li>{{aboutItem}}</li>
      {{/each}}
    </ul>
  </div>
    </div>
  */
  {
    id: "1KjrM7hl",
    block: "{\"symbols\":[\"aboutItem\",\"feature\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"p-d-content\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"p-d-img-div\"],[8],[0,\"\\n      \"],[7,\"img\",true],[10,\"class\",\"p-d-img\"],[11,\"src\",[29,[[23,0,[\"model\",\"image\"]]]]],[10,\"alt\",\"phone\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"p-d-m_p-content\"],[8],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"p-m-content\"],[8],[0,\"\\n\\n  \"],[7,\"h3\",true],[8],[1,[23,0,[\"model\",\"brand\"]],false],[9],[0,\"\\n    \"],[7,\"h2\",true],[8],[0,\" \"],[1,[23,0,[\"model\",\"productName\"]],false],[0,\" \"],[9],[0,\"\\n      \"],[7,\"h2\",true],[8],[1,[23,0,[\"model\",\"description\"]],false],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"p-d-rpice-div\"],[8],[0,\"\\n  \"],[7,\"section\",true],[10,\"class\",\"price_sec\"],[8],[0,\"\\n\"],[7,\"del\",true],[10,\"style\",\"text-decoration: line-through;\"],[8],[1,[28,\"currency\",[[23,0,[\"model\",\"price\",\"original\"]]],null],false],[9],[0,\"\\n\"],[7,\"i\",true],[10,\"style\",\"font-weight: bold; color:red; \"],[8],[1,[28,\"currency\",[[23,0,[\"model\",\"price\",\"current\"]]],null],false],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"buy-div\"],[8],[0,\"\\n\"],[7,\"button\",false],[12,\"class\",\"add-cart-btn\"],[3,\"on\",[\"click\",[23,0,[\"addToCart\"]]]],[8],[0,\"ADD TO CART\"],[9],[0,\"\\n\"],[7,\"button\",true],[10,\"class\",\"buy-btn\"],[8],[0,\"BUY NOW\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"button\",false],[12,\"class\",\"offer-btn\"],[3,\"on\",[\"click\",[28,\"fn\",[[23,0,[\"Offer\"]],\"emi\"],null]]],[8],[0,\"EMI Option\"],[9],[0,\"\\n\"],[7,\"button\",false],[12,\"class\",\"offer-btn\"],[3,\"on\",[\"click\",[28,\"fn\",[[23,0,[\"Offer\"]],\"bank\"],null]]],[8],[0,\"Bank Offer\"],[9],[0,\"\\n\"],[7,\"button\",false],[12,\"class\",\"offer-btn\"],[3,\"on\",[\"click\",[28,\"fn\",[[23,0,[\"Offer\"]],\"credit\"],null]]],[8],[0,\"Credit Card Offer\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[23,0,[\"active\"]]],null,{\"statements\":[[7,\"div\",true],[10,\"class\",\"offer-div\"],[8],[0,\"\\n  \"],[7,\"p\",true],[10,\"class\",\"off-div-head\"],[8],[0,\" Offer\"],[9],[0,\"\\n  \"],[7,\"p\",true],[10,\"class\",\"off-div-para\"],[8],[0,\" \"],[1,[28,\"currency\",[[23,0,[\"offerPrice\"]]],null],false],[1,[23,0,[\"priceDetails\"]],false],[0,\" \"],[9],[0,\"\\n  \\n\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"fea-content\"],[8],[0,\"\\n  \"],[7,\"h2\",true],[8],[0,\"Features\"],[9],[0,\"\\n  \"],[7,\"ul\",true],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"model\",\"features\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\",true],[8],[1,[23,2,[]],false],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"a-item-content\"],[8],[0,\"\\n  \"],[7,\"h2\",true],[8],[0,\"About this item\"],[9],[0,\"\\n  \"],[7,\"ul\",true],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"model\",\"about_item\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\",true],[8],[1,[23,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n  \"],[9]],\"hasEval\":false}",
    meta: {
      moduleName: "regendevice/components/product-detail.hbs"
    }
  });
  let ProductDetailComponent = _exports.default = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._action, _dec5 = Ember.inject.service('shopCart'), _dec6 = Ember._action, (_class = class ProductDetailComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "offerPrice", _descriptor, this);
      _initializerDefineProperty(this, "priceDetails", _descriptor2, this);
      _initializerDefineProperty(this, "active", _descriptor3, this);
      _defineProperty(this, "model", this.args.oneProduct);
      // inject shopCart service from shop-cart service.
      _initializerDefineProperty(this, "cart", _descriptor4, this);
    }
    // this action for active bank offer
    Offer(params) {
      this.active = true;
      if (params === "bank") {
        this.offerPrice = this.model.price.current / 10 * 9;
        this.priceDetails = "discount on select Net Banking.";
      } else if (params === "credit") {
        this.offerPrice = this.model.price.current / 10 * 8;
        this.priceDetails = "discount on select Credit Card payment.";
      } else if (params === "emi") {
        this.offerPrice = this.model.price.current / 12;
        this.priceDetails = "Per month!";
      }
    }
    // function for add item for add to cart page.
    addToCart() {
      this.cart.addItem({
        productName: this.model.productName,
        image: this.model.image,
        price: this.model.price.current,
        pDescription: this.model.description
      });
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "offerPrice", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "priceDetails", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "active", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "Offer", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "Offer"), _class.prototype), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "cart", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "addToCart", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "addToCart"), _class.prototype)), _class));
  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ProductDetailComponent);
});
;define("regendevice/components/product-list", ["exports", "@glimmer/component", "regendevice/components/data/productdata"], function (_exports, _component, _productdata) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"regendevice/components/data/productdata"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="cards_div">
  
    {{#each this.model as |productObj|}}
    <Product @item ={{productObj}} />
    {{/each}}
    
  
  </div>
  */
  {
    id: "LwodAlg6",
    block: "{\"symbols\":[\"productObj\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"cards_div\"],[8],[0,\"\\n\\n\"],[4,\"each\",[[23,0,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[5,\"product\",[],[[\"@item\"],[[23,1,[]]]]],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \\n\\n\"],[9]],\"hasEval\":false}",
    meta: {
      moduleName: "regendevice/components/product-list.hbs"
    }
  });
  // import { tracked } from '@glimmer/tracking';
  // import fetch from 'fetch';
  class ProductsComponent extends _component.default {
    model() {
      return _productdata.productArray;
    }

    // @tracked products;

    // constructor() {
    //   super(...arguments);

    //   fetch('/products').then(data => {
    //     this.products = data;
    //   });
    // }
  }
  _exports.default = ProductsComponent;
  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ProductsComponent);
});
;define("regendevice/components/product", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
  <div class="card">
     <div class="c_img_div">  
        <img class="c_img" src="{{this.args.item.image}}" alt="phone">
  
      </div>
      <div class="c_content_div">
        <h1>{{this.args.item.brand}}</h1>
        <h2>{{this.args.item.model}} </h2>
        <div class="rating-div">
          <li class="fas fa-star"></li>
          <li class="fas fa-star"></li>
          <li class="fas fa-star"></li>
          <li class="fas fa-star"></li>
          <li class="far fa-star"></li>
          {{!-- <li class="	fas fa-star-half-alt"></li> --}}
        </div>
    <section class="price_sec">
  <i style="text-decoration: line-through;" >{{currency this.args.item.price.original}}</i>
  <i style="font-weight: bold; color:red; ">{{currency this.args.item.price.current}}</i>
  </section>
  <div class="view_btn_div">
    <LinkTo @route="product-detail" @model="{{this.args.item.id}}" class="view_btn" href="#">View more</LinkTo> 
  </div>
      </div>
  
  </div>
  */
  {
    id: "3NCDviyc",
    block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"card\"],[8],[0,\"\\n   \"],[7,\"div\",true],[10,\"class\",\"c_img_div\"],[8],[0,\"  \\n      \"],[7,\"img\",true],[10,\"class\",\"c_img\"],[11,\"src\",[29,[[23,0,[\"args\",\"item\",\"image\"]]]]],[10,\"alt\",\"phone\"],[8],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"c_content_div\"],[8],[0,\"\\n      \"],[7,\"h1\",true],[8],[1,[23,0,[\"args\",\"item\",\"brand\"]],false],[9],[0,\"\\n      \"],[7,\"h2\",true],[8],[1,[23,0,[\"args\",\"item\",\"model\"]],false],[0,\" \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"rating-div\"],[8],[0,\"\\n        \"],[7,\"li\",true],[10,\"class\",\"fas fa-star\"],[8],[9],[0,\"\\n        \"],[7,\"li\",true],[10,\"class\",\"fas fa-star\"],[8],[9],[0,\"\\n        \"],[7,\"li\",true],[10,\"class\",\"fas fa-star\"],[8],[9],[0,\"\\n        \"],[7,\"li\",true],[10,\"class\",\"fas fa-star\"],[8],[9],[0,\"\\n        \"],[7,\"li\",true],[10,\"class\",\"far fa-star\"],[8],[9],[0,\"\\n\"],[0,\"      \"],[9],[0,\"\\n  \"],[7,\"section\",true],[10,\"class\",\"price_sec\"],[8],[0,\"\\n\"],[7,\"i\",true],[10,\"style\",\"text-decoration: line-through;\"],[8],[1,[28,\"currency\",[[23,0,[\"args\",\"item\",\"price\",\"original\"]]],null],false],[9],[0,\"\\n\"],[7,\"i\",true],[10,\"style\",\"font-weight: bold; color:red; \"],[8],[1,[28,\"currency\",[[23,0,[\"args\",\"item\",\"price\",\"current\"]]],null],false],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"view_btn_div\"],[8],[0,\"\\n  \"],[5,\"link-to\",[[12,\"class\",\"view_btn\"],[12,\"href\",\"#\"]],[[\"@route\",\"@model\"],[\"product-detail\",[29,[[23,0,[\"args\",\"item\",\"id\"]]]]]],{\"statements\":[[0,\"View more\"]],\"parameters\":[]}],[0,\" \\n\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[9]],\"hasEval\":false}",
    meta: {
      moduleName: "regendevice/components/product.hbs"
    }
  });
  class ProductComponent extends _component.default {}
  _exports.default = ProductComponent;
  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ProductComponent);
});
;define("regendevice/components/search-bar", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
      
  <form class="search-bar-f" action="/search" method="get">
  <div class="search-icon-div">
      <li class="fas fa-search serch-icon"></li>
  </div>  
          <input class="search-bar-i" type="text" id="search" name="q" placeholder="Enter your search term"> 
          <div class="add-product-btn-div">
              <LinkTo @route="addProduct" >
              <button class="add-product-btn">Add Product</button>
              </LinkTo>
          </div>  
      </form>
     
  */
  {
    id: "V0LvrOhV",
    block: "{\"symbols\":[],\"statements\":[[0,\"  \\n\"],[7,\"form\",true],[10,\"class\",\"search-bar-f\"],[10,\"action\",\"/search\"],[10,\"method\",\"get\"],[8],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"search-icon-div\"],[8],[0,\"\\n    \"],[7,\"li\",true],[10,\"class\",\"fas fa-search serch-icon\"],[8],[9],[0,\"\\n\"],[9],[0,\"  \\n        \"],[7,\"input\",true],[10,\"class\",\"search-bar-i\"],[10,\"id\",\"search\"],[10,\"name\",\"q\"],[10,\"placeholder\",\"Enter your search term\"],[10,\"type\",\"text\"],[8],[9],[0,\" \\n        \"],[7,\"div\",true],[10,\"class\",\"add-product-btn-div\"],[8],[0,\"\\n            \"],[5,\"link-to\",[],[[\"@route\"],[\"addProduct\"]],{\"statements\":[[0,\"\\n            \"],[7,\"button\",true],[10,\"class\",\"add-product-btn\"],[8],[0,\"Add Product\"],[9],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n        \"],[9],[0,\"  \\n    \"],[9],[0,\"\\n   \"]],\"hasEval\":false}",
    meta: {
      moduleName: "regendevice/components/search-bar.hbs"
    }
  });
  class SearchBarComponent extends _component.default {}
  _exports.default = SearchBarComponent;
  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SearchBarComponent);
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
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("regendevice/controllers/product-detail", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller"eaimeta@70e063a35619d71f
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
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("regendevice/helpers/app-version", ["exports", "regendevice/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"regendevice/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
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
;define("regendevice/helpers/currency", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper"eaimeta@70e063a35619d71f
  // import {tracked} from '@ember/tracking';

  class currency extends Ember.Helper {
    compute(params, hash = {}) {
      const [number] = params;
      const {
        sign = "$"
      } = hash;
      const dollars = Math.floor(number);
      let cents = Math.floor(number * 100 % 100);
      if (cents.toString().length === 1) {
        cents = '0' + cents;
      }
      return `${sign}${dollars}.${cents}`;
    }
  }
  _exports.default = currency;
});
;define("regendevice/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _exports.default = _pluralize.default;
});
;define("regendevice/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _exports.default = _singularize.default;
});
;define("regendevice/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "regendevice/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"regendevice/config/environment"eaimeta@70e063a35619d71f
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
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f
  var _default = _exports.default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define("regendevice/initializers/ember-cli-mirage", ["exports", "regendevice/config/environment", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage", "regendevice/mirage/config"], function (_exports, _environment, _getRfc232TestContext, _startMirage, config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"regendevice/config/environment",0,"ember-cli-mirage/get-rfc232-test-context",0,"ember-cli-mirage/start-mirage",0,"regendevice/mirage/config"eaimeta@70e063a35619d71f
  const {
    default: makeServer
  } = config;

  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  var _default = _exports.default = {
    name: 'ember-cli-mirage',
    initialize(application) {
      if (makeServer) {
        application.register('mirage:make-server', makeServer, {
          instantiate: false
        });
      }
      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};
      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(application.__container__, _environment.default);
      }
    }
  };
  function startMirage(owner, env = _environment.default) {
    return (0, _startMirage.default)(owner, {
      env,
      makeServer
    });
  }
  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }
    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    let defaultEnabled = _defaultEnabled(env, addonConfig);
    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';
    return usingInDev || usingInTest;
  }
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
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("regendevice/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f
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
  0; //eaimeta@70e063a35619d71f0,"ember",0,"regendevice/config/environment"eaimeta@70e063a35619d71f
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
;define("regendevice/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"], function (_exports, _emberCliMirageAutostart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"eaimeta@70e063a35619d71f
});
;define("regendevice/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data/initialize-store-service"eaimeta@70e063a35619d71f
  var _default = _exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define("regendevice/mirage/config", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // import {
  // //   discoverEmberDataModels,
  //    applyEmberDataSerializers,
  // } from 'ember-cli-mirage';
  // import { createServer } from 'miragejs';

  function _default(product) {
    this.namespace = 'api';

    // let allProducts = {
    //   ...product,
    //   // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
    //   models: {
    //     ...(product.store),
    //     ...product.models
    //   },
    //   // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    //   serializers: applyEmberDataSerializers(product.serializers),
    //   routes,
    // };
    // return createServer(allProducts);

    // these all are static data's in defined in routes.
    this.get('/products', () => {
      return {
        products: [{
          id: 1,
          name: 'phone'
        }, {
          id: 2,
          name: 'watch'
        }, {
          id: 3,
          name: 'laptop'
        }]
      };
    });

    // create a new  product
    this.post('/products', (schema, request) => {
      const attrs = JSON.parse(request.requestBody).product;
      return schema.products.create(attrs);
    });

    //Shorthands
    this.get('/products');
    this.post('/products');
    this.get('/products/:id');

    // Dynamic paths and query params
    this.get('/products/:id', (schema, request) => {
      return schema.products.find(request.params.id);
    });

    //     //Create a new unsaved model instance with attributes attrs.
    // let product = products.new({ productName: 'realme c3' })
    // product.productName;  // realme c3
    // product.id;      // null
    // product.isNew();

    // //Create a new model instance with attributes attrs, and insert it into the database.

    // let product = products.create({productName: 'realme c3'})
    // product.title;   // realme c3
    // product.id;      // 1
    // product.isNew(); // false

    //   let product  = products.find(1);
    //   product.attrs;

    //   console.log(product);

    this.passthrough();
  }

  // function routes() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).
     Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:
     this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
     https://miragejs.com/docs/getting-started/overview/
  */
  // }
});
;define("regendevice/mirage/factories/product", ["exports", "miragejs"], function (_exports, _miragejs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"miragejs"eaimeta@70e063a35619d71f
  var _default = _exports.default = _miragejs.Factory.extend({
    name(i) {
      return `Product ${i}`;
    },
    price: 28,
    available: false,
    image() {
      return _miragejs.faker.internet.image();
    }
  });
});
;define("regendevice/mirage/models/product", ["exports", "miragejs"], function (_exports, _miragejs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"miragejs"eaimeta@70e063a35619d71f
  var _default = _exports.default = _miragejs.Model.extend({});
});
;define("regendevice/mirage/scenarios/default", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  function _default(server) {
    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    server.createList('product', 10);
  }
});
;define("regendevice/mirage/serializers/application", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-mirage",0,"ember"eaimeta@70e063a35619d71f
  // Let’s say your backend server returns dasherized object keys instead of camel cased.
  // You can customize the response by extending the base Serializer and overwriting keyForAttribute
  //GET /authors/1
  // {
  //   author: {
  //     id: 1,
  //     firstName: 'Keyser',
  //     lastName: 'Soze',
  //     age: 145
  //   }
  // }
  const {
    dasherize
  } = Ember.String;
  var _default = _exports.default = _emberCliMirage.Serializer.extend({
    keyForAttribute(key) {
      return dasherize(key);
    }
  }); // after this Serializer it will look like this
  // GET /authors/1
  // {
  //   author: {
  //     id: 1,
  //     'first-name': 'Keyser',
  //     'last-name': 'Soze',
  //     age: 145
  //   }
  // }
});
;define("regendevice/mirage/serializers/product", ["exports", "regendevice/mirage/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"regendevice/mirage/serializers/application"eaimeta@70e063a35619d71f
  var _default = _exports.default = _application.default.extend({});
});
;define("regendevice/models/product", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let ProductModel = _exports.default = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('string'), _dec5 = (0, _model.attr)('number'), _dec6 = (0, _model.attr)('number'), _dec7 = (0, _model.attr)('string'), _dec8 = (0, _model.attr)('string'), _dec9 = (0, _model.attr)('string'), (_class = class ProductModel extends _model.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "brand", _descriptor, this);
      _initializerDefineProperty(this, "productName", _descriptor2, this);
      _initializerDefineProperty(this, "image", _descriptor3, this);
      _initializerDefineProperty(this, "description", _descriptor4, this);
      _initializerDefineProperty(this, "a_price", _descriptor5, this);
      _initializerDefineProperty(this, "c_price", _descriptor6, this);
      _initializerDefineProperty(this, "features", _descriptor7, this);
      _initializerDefineProperty(this, "about_item", _descriptor8, this);
      _initializerDefineProperty(this, "product_type", _descriptor9, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "brand", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "productName", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "image", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "a_price", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "c_price", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "features", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "about_item", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "product_type", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
});
;define("regendevice/models/profile", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model",0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let ProfileModel = _exports.default = (_dec = (0, _model.belongsTo)('user'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('string'), (_class = class ProfileModel extends _model.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "user", _descriptor, this);
      _initializerDefineProperty(this, "photo", _descriptor2, this);
      _initializerDefineProperty(this, "name", _descriptor3, this);
      _initializerDefineProperty(this, "phone", _descriptor4, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "user", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "photo", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "phone", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
});
;define("regendevice/models/user", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model",0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let UserModel = _exports.default = (_dec = (0, _model.belongsTo)('profile'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('string'), _dec5 = (0, _model.attr)('string'), _dec6 = (0, _model.attr)('string'), (_class = class UserModel extends _model.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "profile", _descriptor, this);
      _initializerDefineProperty(this, "username", _descriptor2, this);
      _initializerDefineProperty(this, "photo", _descriptor3, this);
      _initializerDefineProperty(this, "email", _descriptor4, this);
      _initializerDefineProperty(this, "password", _descriptor5, this);
      _initializerDefineProperty(this, "phone", _descriptor6, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "profile", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "username", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "photo", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "email", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "password", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "phone", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
});
;define("regendevice/router", ["exports", "regendevice/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"regendevice/config/environment"eaimeta@70e063a35619d71f
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
    this.route('addProduct');
  });
});
;define("regendevice/routes/add-product", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class AddProductRoute extends Ember.Route {}
  _exports.default = AddProductRoute;
});
;define("regendevice/routes/addnewphone/addphone", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class AddnewphoneAddphoneRoute extends Ember.Route {}
  _exports.default = AddnewphoneAddphoneRoute;
});
;define("regendevice/routes/cart", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class CartRoute extends Ember.Route {}
  _exports.default = CartRoute;
});
;define("regendevice/routes/not-found", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class NotFoundRoute extends Ember.Route {}
  _exports.default = NotFoundRoute;
});
;define("regendevice/routes/product-detail", ["exports", "regendevice/components/data/productdata"], function (_exports, _productdata) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"regendevice/components/data/productdata"eaimeta@70e063a35619d71f
  class ItemRoute extends Ember.Route {
    // find the product by product id!
    model(params) {
      const {
        product_id
      } = params;
      const oneProduct = _productdata.productArray.find(({
        id
      }) => id === product_id);
      return oneProduct;
    }
  }
  _exports.default = ItemRoute;
});
;define("regendevice/routes/products", ["exports", "regendevice/components/data/productdata"], function (_exports, _productdata) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"regendevice/components/data/productdata"eaimeta@70e063a35619d71f
  class ProductsRoute extends Ember.Route {
    model() {
      return _productdata.productArray;
    }
  }
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
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
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
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
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
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("regendevice/services/shop-cart", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor, _dec2, _class3, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  // create new class and create object for add item count and push object to array.
  let Item = (_dec = Ember._tracked, (_class = class Item {
    // create constructor for assign the value to arguments
    constructor(item) {
      _initializerDefineProperty(this, "count", _descriptor, this);
      _defineProperty(this, "productName", void 0);
      _defineProperty(this, "image", void 0);
      _defineProperty(this, "pDescription", void 0);
      _defineProperty(this, "price", void 0);
      this.count = item.count;
      this.productName = item.productName;
      this.image = item.image;
      this.pDescription = item.pDescription;
      this.price = item.price;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "count", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  let ShopCartService = _exports.default = (_dec2 = Ember._tracked, (_class3 = class ShopCartService extends Ember.Service {
    constructor(...args) {
      super(...args);
      // itemList = A([]);
      _initializerDefineProperty(this, "itemList", _descriptor2, this);
    }
    // add new item to add to cart page checking the item is already exiting or not.
    addItem(item) {
      const exitingItem = this.itemList.find(({
        productName,
        pDescription
      }) => {
        return productName === item.productName && pDescription === item.pDescription;
      });
      if (exitingItem) {
        exitingItem.count += 1;
      } else {
        // this.itemList.pushObject(item);
        this.itemList = [...this.itemList, new Item({
          ...item,
          count: 1
        })];
      }
    }
  }, (_descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "itemList", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  })), _class3));
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
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("regendevice/templates/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "r1h29hHu",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n    \"],[5,\"general-container\",[],[[],[]]],[0,\"\\n\\n\"],[0,\"      \\n       \\n\\n        \\n    \\n        \\n    \\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "regendevice/templates/about.hbs"
    }
  });
});
;define("regendevice/templates/add-product", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "k9Q0GOuq",
    "block": "{\"symbols\":[],\"statements\":[[5,\"add-product\",[],[[],[]]]],\"hasEval\":false}",
    "meta": {
      "moduleName": "regendevice/templates/add-product.hbs"
    }
  });
});
;define("regendevice/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
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
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "0ZSTldq1",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[5,\"general-container\",[],[[],[]]],[0,\"\\n\"],[5,\"cart\",[],[[],[]]],[0,\"\\n\\n\\n\"]],\"hasEval\":false}",
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
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "M4TKY8DB",
    "block": "{\"symbols\":[],\"statements\":[[5,\"general-container\",[],[[],[]]],[0,\"\\n\\n\"],[0,\"  \\n\\n\"]],\"hasEval\":false}",
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
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "bobukwZn",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[5,\"general-container\",[],[[],[]]],[0,\"\\n\\n\"],[7,\"div\",true],[8],[0,\"\\n  About Us\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"a-us-section\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"a-c-image\"],[8],[0,\"\\n        \"],[7,\"img\",true],[10,\"src\",\"https://assets-global.website-files.com/605826c62e8de87de744596e/6298b33e6aafa619b517757c_Blog-Coverasdfghjs.jpg\"],[10,\"alt\",\"Our Team\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"about-us-c-div\"],[8],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"a-us-content\"],[8],[0,\"Who We Are\"],[9],[0,\"\\n        \"],[7,\"p\",true],[8],[0,\"We are a passionate team dedicated to providing the latest and best mobile devices to our customers. With a focus on quality and customer satisfaction, we strive to offer a wide range of mobile phones at competitive prices.\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[8],[0,\"Contact Us\"],[9],[0,\"\\n\"],[0,\"    \"],[7,\"div\",true],[10,\"class\",\"contact-us-container\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"contact-img-div\"],[8],[0,\"\\n      \"],[7,\"img\",true],[10,\"src\",\"https://media.istockphoto.com/id/1457106246/photo/the-companys-product-quality-certificate-is-compliant-the-check-mark-symbol-represents-the.webp?b=1&s=170667a&w=0&k=20&c=0B-wEScFlzca10cZsOepMEmvm4tNX-9-v_uPJmmSTIw=\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"contact-form-div\"],[8],[0,\"\\n      \"],[7,\"form\",true],[10,\"class\",\"form\"],[8],[0,\"\\n    \\n    \"],[7,\"div\",true],[10,\"class\",\"flex\"],[8],[0,\"\\n        \"],[7,\"label\",true],[8],[0,\"\\n            \"],[7,\"input\",true],[10,\"class\",\"input\"],[10,\"placeholder\",\"\"],[10,\"required\",\"\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n            \"],[7,\"span\",true],[8],[0,\"first name\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[7,\"label\",true],[8],[0,\"\\n            \"],[7,\"input\",true],[10,\"class\",\"input\"],[10,\"placeholder\",\"\"],[10,\"required\",\"\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n            \"],[7,\"span\",true],[8],[0,\"last name\"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"  \\n            \\n    \"],[7,\"label\",true],[8],[0,\"\\n        \"],[7,\"input\",true],[10,\"class\",\"input\"],[10,\"placeholder\",\"\"],[10,\"required\",\"\"],[10,\"type\",\"email\"],[8],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"email\"],[9],[0,\"\\n    \"],[9],[0,\" \\n        \\n    \"],[7,\"label\",true],[8],[0,\"\\n        \"],[7,\"input\",true],[10,\"class\",\"input\"],[10,\"placeholder\",\"\"],[10,\"required\",\"\"],[10,\"type\",\"tel\"],[8],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"contact number\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"label\",true],[8],[0,\"\\n        \"],[7,\"textarea\",true],[10,\"class\",\"input-textarea\"],[10,\"placeholder\",\"\"],[10,\"rows\",\"3\"],[10,\"required\",\"\"],[8],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"message\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \\n    \"],[7,\"button\",true],[10,\"href\",\"#\"],[10,\"class\",\"contact-us-submit-btn\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"contact-us-submit-text\"],[8],[0,\"submit\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"]],\"hasEval\":false}",
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
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
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
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "9pyIFz5D",
    "block": "{\"symbols\":[],\"statements\":[[5,\"general-container\",[],[[],[]]],[0,\"\\n\\n  \"],[5,\"product-detail\",[],[[\"@oneProduct\"],[[23,0,[\"model\"]]]]],[0,\"\\n  \\n\"]],\"hasEval\":false}",
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
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "Dx4KB3in",
    "block": "{\"symbols\":[\"productObj\"],\"statements\":[[5,\"general-container\",[],[[],[]]],[0,\"\\n\\n\"],[5,\"search-bar\",[],[[],[]]],[0,\"\\n\\n\\n\"],[7,\"div\",true],[10,\"class\",\"cards_div\"],[8],[0,\"\\n\\n\"],[4,\"each\",[[23,0,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[5,\"product\",[],[[\"@item\"],[[23,1,[]]]]],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \\n\\n\"],[9],[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
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
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
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
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
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
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
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
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
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
            require("regendevice/app")["default"].create({"name":"regendevice","version":"0.0.0+d1688aee"});
          }
        
//# sourceMappingURL=regendevice.map
