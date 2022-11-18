import { all, fork } from 'redux-saga/effects';
import { rootAlertSaga } from './alerts/sagas';
import { rootExpensesSaga } from './expenses/sagas';

export function* rootSaga() {
  yield all([fork(rootExpensesSaga), fork(rootAlertSaga)]);
}
