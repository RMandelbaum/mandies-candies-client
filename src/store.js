import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import chocolates from './reducers/chocolates';
import chocolateFormData from './reducers/chocolateFormData';

const reducers = combineReducers({
  chocolates,
  chocolateFormData
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)

);
