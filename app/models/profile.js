import  {belongsTo} from '@ember-data/model';
import Model, {attr}  from '@ember-data/model';

export default class ProfileModel extends Model {
  @belongsTo('user')user;
  
  @attr('string')photo;
  @attr('string')name;
  @attr('string')phone;

}
