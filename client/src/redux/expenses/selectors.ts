import type { RootState } from '../rootReducer';
import type { Expenses } from './reducer';

export const getCurrentExpenses = (state: RootState): Expenses => {
  return state.expenses.expenses;
};

export const alreadyFetchedExpanses = (state: RootState): boolean => {
  return state.expenses.alreadyFetched;
};
