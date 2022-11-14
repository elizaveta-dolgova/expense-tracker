import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import type { Store } from 'redux';
import logger from 'redux-logger';

// import { rootSaga } from './rootSaga';
import type { RootState } from './rootReducer';
import { rootReducer } from './rootReducer';

export interface StoreAction {
  type: string;
  payload?: {
    [key: string]: any;
  };
}

let store: Store<RootState, StoreAction>;

export const getStore = (): Store<RootState, StoreAction> => {
  if (store) return store;

  const sagaMiddleware = createSagaMiddleware();
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

  //   if (sagaMiddleware) {
  //     sagaMiddleware.run(rootSaga);
  //   }

  return store;
};
