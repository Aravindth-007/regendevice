import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
export default class GeneralContainerComponent extends Component {

  @service shopCart;

  get itemCount(){
    this.shopCart.itemList.reduce((total, item) => {
      return total +=item.count;
    },0);
  }
}
