import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {tracked} from '@glimmer/tracking';
import itemList from '@ember/array';
export default class CartController extends Controller {
  @service ('shopCart') cart;

  @tracked total = 0;

 get subtotal(){
  return this.cart.itemList(acc, item =>{
    return acc + item.price;
   },0);
 }
  
 get tax(){
  return 0.09 * this.subtotal;
 }
  
 get total(){
  return this.subtotal + this.tax;
 }
}
