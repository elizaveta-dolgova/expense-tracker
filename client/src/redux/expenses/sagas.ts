import { all, call, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';

import { addNewExpenseLocal, ADD_NEW_EXPENSE, GET_EXPENSES_LIST, setExpensesList, apiRequestFailed, setAlreadyFetched, getExpensesList, testDelay, TEST_DELAY } from './actions';
import type { AddNewExpenseAction } from './actions';
import type { SereverResponse } from '../../services/api';
import { postNewExpense, getAllExpensesFromServer } from '../../services/api';
import { alreadyFetchedExpanses } from './selectors';

// type CallReturn = Awaited<ReturnType<typeof postNewExpense>>;
type CallReturn = ReturnType<typeof postNewExpense>

function* sendNewExpense(action: AddNewExpenseAction) {
  const newExpense = action.payload.expense;
  const fetched: boolean = yield select(alreadyFetchedExpanses);
  const error: CallReturn = yield call(postNewExpense, newExpense);
  if (!error) {
    if (fetched) {
      yield put(addNewExpenseLocal(newExpense));
    } else {
      yield put(getExpensesList());
    }
  } else {
    yield put(apiRequestFailed(`${error}`));
  }
}

function* getAllExpenses() {
  const fetched: boolean = yield select(alreadyFetchedExpanses);
  if (fetched) return;
  yield put(setAlreadyFetched());

  const [allExpenses, error]: SereverResponse = yield call(getAllExpensesFromServer);
  if (error || !allExpenses) {
    yield put(apiRequestFailed(error));
    return;
  }
  yield put(setExpensesList(allExpenses));
}

function* delayTest() {
  console.log('Run delay test');
  yield delay(2000);
  console.log('Delay test ends');
}

export function* rootExpensesSaga() {
  yield all([takeEvery(ADD_NEW_EXPENSE, sendNewExpense), takeEvery(GET_EXPENSES_LIST, getAllExpenses), takeEvery(TEST_DELAY, delayTest)]);
}
