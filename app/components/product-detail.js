import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {inject as service}from '@ember/service';
import {action} from '@ember/object';

export default class ProductDetailComponent extends Component {

@tracked bankActive;
@tracked creditActive;
@tracked emiActive;
@tracked offerPrice;
model = this.args.oneProduct;

// this action for active bank offer
@action
bankOffer(){
  this.bankActive = true;
  this.creditActive = false;
  this.emiActive = false;
  this.offerPrice = (this.model.price.current / 10) * 9;
}
// this action for credit card offer
@action
creditCardOffer(){
  this.creditActive = true;
  this.bankActive = false;
  this.emiActive = false;
  this.offerPrice = (this.model.price.current / 10) * 8;
}
// this action for EMI offer
@action
emiOffer(){
  this.emiActive = true;
  this.bankActive =false;
  this.creditActive = false;
  this.offerPrice = this.model.price.current / 12;
}
// inject shopCart service from shop-cart service.
@service('shopCart') cart;

// function for add item for add to cart page.
@action
addToCart(){
  this.cart.addItem({
    productName: this.model.productName,
    image : this.model.image,
    price:this.model.price.current,
    pDescription : this.model.description,
  });
}


 
}
