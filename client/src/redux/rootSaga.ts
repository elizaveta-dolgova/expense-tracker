import { all, fork } from 'redux-saga/effects';
import { rootExpensesSaga } from './expenses/sagas';

export function* rootSaga() {
  yield all([fork(rootExpensesSaga)]);
}
export {};
