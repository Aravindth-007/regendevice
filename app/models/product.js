import Model,{attr} from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') brand;
  @attr('string') model;
  @attr('string') image;
  @attr('string') description;
  @attr('number') a_price;
  @attr('number') c_price;
  @attr('string') features;
  @attr('string') about_this_item;
  @attr('string') product_type;
}
