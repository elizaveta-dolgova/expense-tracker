import type { StoreAction } from '../store';
import type { AddNewExpenseAction } from './actions';
import { ADD_NEW_EXPENSE } from './actions';

export type Expense = {
  name: string;
  price: string;
  category: string;
  date: string
};

export type Expenses = Expense[];

function addExpense(state: Expenses, action: AddNewExpenseAction): Expenses {
  return [
    ...state, action.payload.expense
  ]
}

const reducer = (state: Expenses = [], action: StoreAction) => {
  const { type } = action;

  switch (type) {
    case ADD_NEW_EXPENSE:
      return addExpense(state, action as AddNewExpenseAction);
    default:
      return state;
  }
};

export default reducer;
