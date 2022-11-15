import type { Expense, Expenses } from '../redux/expenses/reducer';

export const postNewExpense = async (expense: Expense) => {
  const response = await fetch('http://localhost:4269', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(expense),
  });
};

export const getAllExpensesFromService = async (): Promise<Expenses> => {
  const response = await fetch('http://localhost:4269');
  const expensesFromService = await response.json();
  console.log(expensesFromService);
  return expensesFromService;
};
