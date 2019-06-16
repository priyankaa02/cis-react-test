import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { registration } from './registration';
import { users } from './user';
import { invoice } from './invoice';
import { units } from './units';
import { alert } from './alert';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  invoice,
  units
});

export default rootReducer;
