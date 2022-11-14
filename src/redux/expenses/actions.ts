export const ADD_NEW_EXPENSE = 'ADD_NEW_EXPENSE';
import type { Expense } from "../expenses/reducer";

export const addNewExpense = (expense: Expense) => ({
  type: ADD_NEW_EXPENSE,
  payload: {
    expense,
  },
});

export type AddNewExpenseAction = ReturnType<typeof addNewExpense>;
