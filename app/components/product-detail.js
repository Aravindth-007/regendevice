import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {inject as service}from '@ember/service';
import {action} from '@ember/object';


export default class ProductDetailComponent extends Component {
@tracked active ;
@action
offerStatus(){
  this.active = true;
}
@service('shopCart') cart;

@action
addToCart(){
  const { model, image, price ,pDescription} = this.args;
  this.cart.addItem({
    model,
    image,
    price:price.current,
    pDescription,
    
  });
}
 
}
