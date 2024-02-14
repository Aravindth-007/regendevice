import Model,{attr} from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default class UserModel extends Model {
@belongsTo('profile')profile;

  @attr('string') username;
  @attr('string') photo;
  @attr('string') email;
  @attr('string') password;
  @attr('string') phone;

}
