import Component from '@glimmer/component';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';
export default class AddProductComponent extends Component {

  @tracked dropdowm = {
    selectedOption: null,
    selectOptions: ['phone','laptop','watch']
  }

 @action
    submitForm() {
      event.preventDefault();
      // Handle form submission logic here
      console.log('Form submitted with values:', );
    }
  
}
