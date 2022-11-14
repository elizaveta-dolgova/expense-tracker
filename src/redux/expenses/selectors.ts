import type { RootState } from '../rootReducer';
import type { Expenses } from './reducer';

export const getCurrentExpenses = (state: RootState): Expenses => {
  return state.expenses;
};
