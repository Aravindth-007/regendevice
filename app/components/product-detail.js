import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {inject as service}from '@ember/service';
import {action, set} from '@ember/object';

export default class ProductDetailComponent extends Component {


@tracked offerPrice ;
@tracked priceDetails;
@tracked active;
model = this.args.oneProduct;

// this action for active bank offer
@action
Offer(params){
 this.active = true;
  if(params === "bank"){
    this.offerPrice = (this.model.price.current / 10) * 9;
    this.priceDetails = "discount on select Net Banking."
  }else if(params === "credit"){
    this.offerPrice = (this.model.price.current / 10) * 8;
    this.priceDetails = "discount on select Credit Card payment."
  }else if(params === "emi"){
    this.offerPrice = this.model.price.current / 12;
    this.priceDetails = "Per month!"
  }
  
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
