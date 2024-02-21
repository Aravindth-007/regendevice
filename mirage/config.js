// import {
// //   discoverEmberDataModels,
//    applyEmberDataSerializers,
// } from 'ember-cli-mirage';
// import { createServer } from 'miragejs';

export default function (product) {
  this.namespace = 'api';
  
  // let allProducts = {
  //   ...product,
  //   // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
  //   models: {
  //     ...(product.store),
  //     ...product.models
  //   },
  //   // uncomment to opt into ember-cli-mirage to auto discover ember serializers
  //   serializers: applyEmberDataSerializers(product.serializers),
  //   routes,
  // };
  // return createServer(allProducts);

  // these all are static data's in defined in routes.
  this.get('/products', () => {
    return {
      products: [
        {id: 1, name: 'phone'},
        {id: 2, name: 'watch'},
        {id: 3, name: 'laptop'},
      ]
    };
  });

  // create a new  product
  this.post('/products', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).product;
  
    return schema.products.create(attrs);
  });

  //Shorthands
    this.get('/products');
    this.post('/products');
    this.get('/products/:id');  

  // Dynamic paths and query params
    this.get('/products/:id', (schema, request) => {
      return schema.products.find(request.params.id);
    });


  //     //Create a new unsaved model instance with attributes attrs.
  // let product = products.new({ productName: 'realme c3' })
  // product.productName;  // realme c3
  // product.id;      // null
  // product.isNew();
  
  // //Create a new model instance with attributes attrs, and insert it into the database.
  
  // let product = products.create({productName: 'realme c3'})
  // product.title;   // realme c3
  // product.id;      // 1
  // product.isNew(); // false
  
  //   let product  = products.find(1);
  //   product.attrs;

  //   console.log(product);
  
    this.passthrough();

}





































// function routes() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://miragejs.com/docs/getting-started/overview/
  */
// }
