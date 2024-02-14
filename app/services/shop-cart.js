import Service from '@ember/service';
// import { A } from '@ember/array';
import {tracked} from '@glimmer/tracking';

// create new class and create object for add item count and push object to array.
class Item{
  @tracked count;
  productName;
  image;
  pDescription;
  price;

  // create constructor for assign the value to arguments
  constructor(item){
    this.count = item.count;
    this.productName = item.productName;
    this.image = item.image;
    this.pDescription = item.pDescription;
    this.price = item.price;
  }
}

export default class ShopCartService extends Service {
  // itemList = A([]);
  @tracked itemList =[];

  // add new item to add to cart page checking the item is already exiting or not.
  addItem(item) {
    const exitingItem = this.itemList.find(({ productName, pDescription}) => {
      return productName === item.productName && pDescription === item.pDescription;
    });

    if (exitingItem){
      exitingItem.count += 1;
    }else{
      // this.itemList.pushObject(item);
      this.itemList = [...this.itemList,
        new Item({...item,
        count: 1,
      })];
    }
   
  }

}
