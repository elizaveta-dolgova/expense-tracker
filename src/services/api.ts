import { Expense, Expenses } from "../redux/expenses/reducer";

export const postNewExpense = async (expense: Expense) => {
    const response = await fetch('url', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            newExpense: expense,
        })
    });
    const responseForPostExpense = await response.json();
    return responseForPostExpense;
};

export const getAllExpenses = async (): Promise<Expenses> => {
    const response = await fetch('url');
    const expensesFromService = await response.json();
    return expensesFromService;
}