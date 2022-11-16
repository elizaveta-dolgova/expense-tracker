import type { Expense, Expenses } from '../redux/expenses/reducer';

export const postNewExpense = async (expense: Expense): Promise<Error | null> => {
  try {
    const response = await fetch('http://localhost:4269', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(expense),
    });
    if (!response.ok) {
      throw new Error('invalid expense');
    }
    return null;
  } catch (err: unknown) {
    console.log(err);
    return err as Error;
  }
};

export type SereverResponse = [Expenses | undefined, any | undefined];

export const getAllExpensesFromServer = async (): Promise<SereverResponse> => {
  try {
    const response = await fetch('http://localhost:4269');
    const expensesFromServer = await response.json();
    return [expensesFromServer, undefined];
  } catch (err) {
    const msg = `${err}`;
    console.log(err);
    return [undefined, err];
  }
};
