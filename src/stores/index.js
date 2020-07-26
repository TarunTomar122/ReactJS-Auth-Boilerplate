import { combineReducers } from 'redux';
import rootSaga from '../sagas';
import configureStore from './createStore';
import { reducer as AuthReducer } from './auth/Reducers';

export default () => {
  const rootReducer = combineReducers({
    authentication: AuthReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
