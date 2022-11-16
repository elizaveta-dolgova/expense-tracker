import type { StoreAction } from '../store';
import { AddNewExpenseAction, ApiRequestFailed, CLEAN_ERRORS, GET_EXPENSES_LIST, SetExpensesListAction, SET_ALREADY_FETCHED } from './actions';
import { API_REQUEST_FAILED, ADD_NEW_EXPENSE_LOCAL, SET_EXPENSES_LIST } from './actions';

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
  error: string | null;
};

const initialState: ExpensesState = {
  expenses: [],
  alreadyFetched: false,
  error: null,
};

function setExpensesList(state: ExpensesState, action: SetExpensesListAction): ExpensesState {
  return { ...state, expenses: [...state.expenses, ...action.payload.expenses] };
}

function addExpenseLocal(state: ExpensesState, action: AddNewExpenseAction): ExpensesState {
  return { ...state, expenses: [...state.expenses, action.payload.expense] };
}

function apiRequestFaild(state: ExpensesState, action: ApiRequestFailed): ExpensesState {
  return { ...state, error: action.payload.error as string };
}

const reducer = (state: ExpensesState = initialState, action: StoreAction) => {
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

    case API_REQUEST_FAILED:
      return apiRequestFaild(state, action as ApiRequestFailed);
    
    case CLEAN_ERRORS:
      return {...state, error: null};

    default:
      return state;
  }
};

export default reducer;
