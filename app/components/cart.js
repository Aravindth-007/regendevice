import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import {action} from '@ember/object';
// import { tracked } from '@glimmer/tracking';
export default class CartComponent extends Component {
  @service ('shopCart') cart;

  // @tracked price = item.price;
  // @tracked finalCount = 0;
  // @tracked tax = 0;
  // @tracked itemCount = item.count;

  
 get subtotal() {
   return this.cart.itemList.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);
 } 
 
 get tax(){
  return  0.09 * this.subtotal;
 }
  
 get total(){
  return  this.subtotal + this.tax;
 }

 @action
 updateItemCount(item, event){
  const count = event.target.value;
  if(count >= 0){
    item.count = count;
    // this.finalCount = count;
  }else{
    item.count = 0;
  }
 }
}
