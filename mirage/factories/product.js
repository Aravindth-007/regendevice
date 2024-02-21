import { Factory , faker} from 'miragejs';

export default Factory.extend({

  name(i) {
    return `Product ${i}`;
  },

  price: 28,

  available: false,

  image() {
    return faker.internet.image();
  }
  
});

