import type { Expense, Expenses } from '../redux/expenses/reducer';

export type ResponseWithError = {
  errorData: any;
  errorMessage: string;
};

const getError = (err: unknown): ResponseWithError => {
  let msg = 'Unknown error';
  if (err instanceof Error) msg = err.message;
  msg = msg.includes('Failed to fetch') ? 'Server error, try later' : msg;
  return { errorData: err, errorMessage: msg };
};

export const postNewExpense = async (expense: Expense): Promise<ResponseWithError | null> => {
  console.log('async post new runs');
  try {
    const response = await fetch('http://localhost:4269', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(expense),
    });
    if (response.status === 400) {
      throw new Error('Entered expense is invalid, try again');
    }
    return null;
  } catch (err) {
    return getError(err);
  }
  // catch (err: unknown) {
  //   console.log(err);
  //   return err as Error;
  // }
};

export type SereverResponse = [Expenses, undefined] | [undefined, ResponseWithError];

export const getAllExpensesFromServer = async (): Promise<SereverResponse> => {
  console.log('async get all runs');
  try {
    const response = await fetch('http://localhost:4269');
    const expensesFromServer = await response.json();
    return [expensesFromServer, undefined];
  } catch (err) {
    console.log(getError(err));
    return [undefined, getError(err)];
  }
};
