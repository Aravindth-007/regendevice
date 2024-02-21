// Let’s say your backend server returns dasherized object keys instead of camel cased.
// You can customize the response by extending the base Serializer and overwriting keyForAttribute

//GET /authors/1

// {
//   author: {
//     id: 1,
//     firstName: 'Keyser',
//     lastName: 'Soze',
//     age: 145
//   }
// }

import { Serializer } from 'ember-cli-mirage';
import Ember from 'ember';
  const { dasherize } = Ember.String;

export default Serializer.extend({

  keyForAttribute(key) {
    return dasherize(key);
  }
});
// after this Serializer it will look like this

// GET /authors/1

// {
//   author: {
//     id: 1,
//     'first-name': 'Keyser',
//     'last-name': 'Soze',
//     age: 145
//   }
// }



