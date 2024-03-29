import Component from '@glimmer/component';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';
import { inject as service } from '@ember/service';
// import fetch from 'fetch';
export default class AddProductComponent extends Component {

  @service store;
  model = null;


//   fetch('https://dummyjson.com/products/categories')
// .then(res => res.json())
// .then(console.log);

  @tracked selectedOption =  null;
  
  selectOptions = ['phone','laptop','watch']
  

  @action
  handleSelectChange(event) {
    const selectedValue = event.target.value;
    this.model.product_type = selectedValue;
  }
  // create the contructor while user enter the form page (if it's need)
  constructor() {
    super(...arguments);


    this.model = this.store.createRecord('product', {
      // model : "realme 12 Pro",
      // brand : "realme",
      // product_type : "watch",
    });
  
    
  }

 
 @action
    submitForm(event) {
      event.preventDefault();
      // this.store.push(this.model);
      
      // Handle form submission logic here
      console.log('Form submitted with values:', store);
    }
  
}
