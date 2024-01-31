import Route from '@ember/routing/route';
import { productArray } from '../components/data/productdata';
export default class ProductsRoute extends Route {

  model(){
    return productArray;
  }
  
}
