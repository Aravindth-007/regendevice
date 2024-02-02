import Service from '@ember/service';
import { A } from '@ember/array';

export default class ShopCartService extends Service {
  itemList = A([]);

  addItem(item) {
    this.itemList.pushObject(item);
  }
}
