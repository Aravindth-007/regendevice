import Model,{attr} from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') brand;
  @attr('string') productName;
  @attr('string') image;
  @attr('string') description;
  @attr('number') a_price;
  @attr('number') c_price;
  @attr('string') features;
  @attr('string') about_item;
  @attr('string') product_type;
}
