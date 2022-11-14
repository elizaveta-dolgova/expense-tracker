// import { all, put, select, takeEvery } from 'redux-saga/effects';
// import { ADD_NEW_EXPENSE, SET_EXPENSES_LIST } from './actions';
// import type { Expenses } from './reducer';
// import { getLastExpense } from './selectors';
// import {postNewExpense, getAllExpenses} from '../../services/api';

// function* postNewExpense() {
//  const lastExpense: Expense = yield select(getLastExpense);
//  const response = yield call(postNewExpense, lastExpense);
// }

// function* getAllExpense() {
//    const allExpenses: Expenses = yield call(getAllExpenses);
//    yield put(setExpensesList(allExpenses));
// }

// export function* rootThemeSaga() {
//   yield all([
//      takeEvery(ADD_NEW_EXPENSE, postNewExpense), 
//      takeEvery(GET_ALL_EXPENSE, getAllExpenses)
//  ]);
// }
 export {};