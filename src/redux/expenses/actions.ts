export const ADD_NEW_EXPENSE = 'ADD_NEW_EXPENSE';
export const SET_EXPENSES_LIST = 'SET_EXPENSES_LIST';
import type { Expense, Expenses } from "../expenses/reducer";

export const addNewExpense = (expense: Expense) => ({
  type: ADD_NEW_EXPENSE,
  payload: {
    expense,
  },
});

export type AddNewExpenseAction = ReturnType<typeof addNewExpense>;

export const setExpensesList = (expenses: Expenses) => ({
  type: SET_EXPENSES_LIST,
  payload: {
    expenses,
  }
});

export type SetExpensesList = ReturnType<typeof setExpensesList>;
