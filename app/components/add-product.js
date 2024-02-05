import Component from '@glimmer/component';
import {action} from '@ember/object';
export default class AddProductComponent extends Component {

  model() {
    return {
      brand: '',
      model: '',
      image: '',
      description: '',
      a_price: '',
      c_price: '',
      features: '',
      about_this_item: '',
    };
  }

 @action
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted with values:', this.model);
    }
  
}
