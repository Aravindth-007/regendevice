import Route from '@ember/routing/route';
import { productArray } from '../components/data/productdata';

export default class ItemRoute extends Route {
// find the product by product id!
  model(params){
    const {
      product_id 
    } = params;
    
    const oneProduct = productArray.find(({id}) => id === product_id); 
    return oneProduct;
  }
}
