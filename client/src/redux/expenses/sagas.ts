import { all, call, put, takeEvery } from 'redux-saga/effects';

import type { Expenses } from './reducer';
import { ADD_NEW_EXPENSE, GET_EXPENSES_LIST, setExpensesList } from './actions';
import type { AddNewExpenseAction } from './actions';
import { postNewExpense, getAllExpensesFromService } from '../../services/api';

function* sendNewExpense(action: AddNewExpenseAction) {
  const newExpense = action.payload.expense;
  yield call(postNewExpense, newExpense);
}

function* getAllExpenses() {
  const allExpenses: Expenses = yield call(getAllExpensesFromService);
  yield put(setExpensesList(allExpenses));
}

export function* rootExpensesSaga() {
  yield all([takeEvery(ADD_NEW_EXPENSE, sendNewExpense), takeEvery(GET_EXPENSES_LIST, getAllExpenses)]);
}
