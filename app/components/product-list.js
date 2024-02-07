import Component from '@glimmer/component';
import { productArray } from './data/productdata';
// import { tracked } from '@glimmer/tracking';
// import fetch from 'fetch';
export default class ProductsComponent extends Component {
  model(){
    return productArray;
  }

  // @tracked products;

  // constructor() {
  //   super(...arguments);

  //   fetch('/products').then(data => {
  //     this.products = data;
  //   });
  // }

}
