import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(),
);

const store = createStore(rootReducer, enhancers);

export default store;
