import { all, delay, put, select, takeEvery } from 'redux-saga/effects';
import { SET_ERROR, SET_SUCCESS, cleanAlertById as cleanAlert } from './actions';
import type { AlertState, Error, Success } from './reducer';
import { getCurrentAlerts } from './selectors';

function* cleanAlertById(item: Error | Success, field: 'error' | 'success') {
  yield delay(item.expired);
  yield put(cleanAlert(field, item.id));
}

function* setErrorAlert() {
  const alerts: AlertState = yield select(getCurrentAlerts);
  if (alerts.error.length !== 0) {
    alerts.error.forEach((item) => cleanAlertById(item, 'error'));
  }
}

function* setSuccessAlert() {
  const alerts: AlertState = yield select(getCurrentAlerts);
  if (alerts.success.length !== 0) {
    alerts.success.forEach((item) => cleanAlertById(item, 'success'));
  }
}

export function* rootAlertSaga() {
  yield all([takeEvery(SET_ERROR, setErrorAlert), takeEvery(SET_SUCCESS, setSuccessAlert)]);
}
