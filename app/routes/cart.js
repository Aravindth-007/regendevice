import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model(){
    const items = [{price:12999},{price:20000}];
    return items;
  }

}