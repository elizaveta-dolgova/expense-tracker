import type { RootState } from '../rootReducer';
import type { Expenses } from './reducer';

export const getCurrentExpenses = (state: RootState): Expenses => {
  return state.expenses.expenses;
};

export const getCurrentError = (state: RootState): string | null => {
  return state.expenses.error;
};

export const alreadyFetchedExpanses = (state: RootState): boolean => {
  return state.expenses.alreadyFetched;
};