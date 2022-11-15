import type { RootState } from '../rootReducer';
import type { Expense, Expenses } from './reducer';

export const getCurrentExpenses = (state: RootState): Expenses => {
  return state.expenses;
};

export const getLastExpense = (state: RootState): Expense => {
  return state.expenses[state.expenses.length - 1];
};
