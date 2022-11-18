import type { StoreAction } from '../store';
import type { AddNewExpenseAction, SetExpensesListAction } from './actions';
import { GET_EXPENSES_LIST, SET_ALREADY_FETCHED, ADD_NEW_EXPENSE_LOCAL, SET_EXPENSES_LIST } from './actions';

export type Expense = {
  name: string;
  price: number;
  category: string;
  date: Date | null;
};

export type Expenses = Expense[];

export type ExpensesState = {
  expenses: Expenses;
  alreadyFetched: boolean;
};

const initialState: ExpensesState = {
  expenses: [],
  alreadyFetched: false,
};

function setExpensesList(state: ExpensesState, action: SetExpensesListAction): ExpensesState {
  return { ...state, expenses: [...state.expenses, ...action.payload.expenses] };
}

function addExpenseLocal(state: ExpensesState, action: AddNewExpenseAction): ExpensesState {
  return { ...state, expenses: [...state.expenses, action.payload.expense] };
}

const reducer = (state: ExpensesState = initialState, action: StoreAction) => {
  console.log(state);
  const { type } = action;

  switch (type) {
    case ADD_NEW_EXPENSE_LOCAL:
      return addExpenseLocal(state, action as AddNewExpenseAction);

    case SET_ALREADY_FETCHED:
      return {
        ...state,
        alreadyFetched: true,
      };

    case SET_EXPENSES_LIST:
      return setExpensesList(state, action as SetExpensesListAction);

    default:
      return state;
  }
};

export default reducer;
