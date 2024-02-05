import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('contact',{path: 'contact-us'});
  this.route('home');
  this.route('product-detail', {path: '/product/:product_id'});
  this.route('not-found',{path: '/*path'});
  this.route('cart',{path: 'shop-cart'});
  this.route('products');
  this.route('addProduct');
});
