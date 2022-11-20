import { all, delay, put, select, takeEvery } from 'redux-saga/effects';
import { SET_ERROR, SET_SUCCESS, cleanAlertById as cleanAlert } from './actions';
import type { AlertState } from './reducer';
import { getCurrentAlerts } from './selectors';

function* setErrorAlert() {
  const { error }: AlertState = yield select(getCurrentAlerts);
  if (error.length !== 0) {
    const actualError = error[error.length - 1];
    yield delay(actualError.expired);
    yield put(cleanAlert('error', actualError.id));
  }
}

function* setSuccessAlert() {
  const { success }: AlertState = yield select(getCurrentAlerts);
  if (success.length !== 0) {
    const actualSuccess = success[success.length - 1];
    yield delay(actualSuccess.expired);
    yield put(cleanAlert('success', actualSuccess.id));
  }
}

export function* rootAlertSaga() {
  yield all([takeEvery(SET_ERROR, setErrorAlert), takeEvery(SET_SUCCESS, setSuccessAlert)]);
}
