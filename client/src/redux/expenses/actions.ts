import type { Expense, Expenses } from '../expenses/reducer';
export const ADD_NEW_EXPENSE = 'ADD_NEW_EXPENSE';
export const SET_EXPENSES_LIST = 'SET_EXPENSES_LIST';
export const GET_EXPENSES_LIST = 'GET_EXPENSES_LIST';

export const addNewExpense = (expense: Expense) => ({
  type: ADD_NEW_EXPENSE,
  payload: {
    expense,
  },
});

export type AddNewExpenseAction = ReturnType<typeof addNewExpense>;

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
