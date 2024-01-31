import Route from '@ember/routing/route';
import { productArray } from '../components/data/productdata';

export default class ItemRoute extends Route {

  model(params){
    const {
      product_id 
    } = params;
    const oneProduct = productArray.find(({id}) => id === product_id);
    console.log(oneProduct); 
    return oneProduct;
  }

}
