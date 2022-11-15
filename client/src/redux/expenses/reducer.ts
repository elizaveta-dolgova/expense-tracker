import type { StoreAction } from '../store';
import type { AddNewExpenseAction, SetExpensesListAction } from './actions';
import { ADD_NEW_EXPENSE, SET_EXPENSES_LIST } from './actions';

export type Expense = {
  name: string;
  price: number;
  category: string;
  date: Date | null;
};

export type Expenses = Expense[];

function setExpensesList(action: SetExpensesListAction): Expenses {
  return [...action.payload.expenses];
}

// function addExpense(state: Expenses, action: AddNewExpenseAction): Expenses {
//   return [...state, action.payload.expense];
// }

const reducer = (state: Expenses = [], action: StoreAction) => {
  const { type } = action;

  switch (type) {
    // case ADD_NEW_EXPENSE:
    //   return addExpense(state, action as AddNewExpenseAction);
    case SET_EXPENSES_LIST:
      return setExpensesList(action as SetExpensesListAction);

    default:
      return state;
  }
};

export default reducer;
