import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object';
export default class ProductDetailComponent extends Component {
@tracked active ;
@action
offerStatus(){
  this.active = true;
}
 
}
