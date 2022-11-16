import type { Expense, Expenses } from '../expenses/reducer';
export const ADD_NEW_EXPENSE = '@expenses/ADD_NEW_EXPENSE';
export const ADD_NEW_EXPENSE_LOCAL = 'ADD_NEW_EXPENSE_LOCAL';
export const SET_EXPENSES_LIST = 'SET_EXPENSES_LIST';
export const GET_EXPENSES_LIST = 'GET_EXPENSES_LIST';
export const API_REQUEST_FAILED = 'FETCH_REQUEST_FAILED';
export const CLEAN_ERRORS = 'CLEAN_ERRORS';
export const SET_ALREADY_FETCHED = 'SET_ALREADY_FETCHED';

export const TEST_DELAY = 'TEST_DELAY';

export const addNewExpense = (expense: Expense) => ({
  type: ADD_NEW_EXPENSE,
  payload: {
    expense,
  },
});

export type AddNewExpenseAction = ReturnType<typeof addNewExpense>;

export const addNewExpenseLocal = (expense: Expense) => ({
  type: ADD_NEW_EXPENSE_LOCAL,
  payload: {
    expense,
  },
});

export type AddNewExpenseLocalAction = ReturnType<typeof addNewExpenseLocal>;

export const getExpensesList = () => ({
  type: GET_EXPENSES_LIST,
});

export type GetExpensesListAction = ReturnType<typeof getExpensesList>;

export const setExpensesList = (expenses: Expenses) => ({
  type: SET_EXPENSES_LIST,
  payload: {
    expenses,
  },
});

export type SetExpensesListAction = ReturnType<typeof setExpensesList>;

export const apiRequestFailed = (message: string) => ({
  type: API_REQUEST_FAILED,
  payload: {
    error: message,
  },
});

export type ApiRequestFailed = ReturnType<typeof apiRequestFailed>;

export const cleanErrors = () => ({
  type: CLEAN_ERRORS,
});

export type CleanErrors = ReturnType<typeof cleanErrors>;

export const setAlreadyFetched = () => ({
  type: SET_ALREADY_FETCHED,
});

export type SetAlreadyFetched = ReturnType<typeof setAlreadyFetched>;

export const testDelay = () => ({
  type: TEST_DELAY,
});

export type TestDelay = ReturnType<typeof testDelay>;