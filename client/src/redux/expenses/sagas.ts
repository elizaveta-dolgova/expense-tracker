import { all, call, put, select, takeEvery } from 'redux-saga/effects';

import {
  addNewExpenseLocal,
  ADD_NEW_EXPENSE,
  GET_EXPENSES_LIST,
  setExpensesList,
  getExpensesList,
  setAlreadyFetched,
} from './actions';

import { setError, setSuccess } from '../alerts/actions';
import type { AddNewExpenseAction } from './actions';
import type { ResponseWithError, SereverResponse } from '../../services/api';
import { postNewExpense, getAllExpensesFromServer } from '../../services/api';
import { alreadyFetchedExpanses } from './selectors';

function* sendNewExpense(action: AddNewExpenseAction) {
  console.log('saga post new starts here');
  const newExpense = action.payload.expense;
  const fetched: boolean = yield select(alreadyFetchedExpanses);
  const error: ResponseWithError = yield call(postNewExpense, newExpense);

  if (!error) {
    if (fetched) {
      console.log('add to list localy');
      yield put(addNewExpenseLocal(newExpense));
    } else {
      console.log('saga post new call get-expenses-list');
      yield put(getExpensesList());
    }
    yield put(setSuccess('Success! New expense was added'));
  } else {
    yield put(setError(error.errorMessage));
  }
}

function* getAllExpenses() {
  console.log('saga get all runs');
  const fetched: boolean = yield select(alreadyFetchedExpanses);
  if (fetched) return;
  yield put(setAlreadyFetched());
  const [allExpenses, error]: SereverResponse = yield call(getAllExpensesFromServer);
  if (error) {
    yield put(setError(error.errorMessage));
    return;
  }
  if (allExpenses) {
    yield put(setExpensesList(allExpenses));
  }
}

export function* rootExpensesSaga() {
  yield all([takeEvery(ADD_NEW_EXPENSE, sendNewExpense), takeEvery(GET_EXPENSES_LIST, getAllExpenses)]);
}
