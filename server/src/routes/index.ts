import express from 'express';

const router = express.Router();

interface Expense {
  name: string;
  price: number;
  category: string;
  date: Date;
}

const expenses: Expense[] = [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function verifyExpense(expense: any): Expense {
  if (!expense) throw new Error('Expense is invalid');
  if (typeof expense !== 'object') throw new Error('Expense is invalid');

  if (!expense.name || typeof expense.name !== 'string') throw new Error('Expense is invalid');
  if (!expense.price || typeof expense.price !== 'number') throw new Error('Expense is invalid');
  if (!expense.category || typeof expense.category !== 'string') throw new Error('Expense is invalid');
  if (!expense.date || typeof expense.date !== 'string') throw new Error('Expense is invalid');
  expense.date = new Date(expense.date);

  return expense as Expense;
}

router.get('/', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Process GET route');
  res.json(expenses);
});

router.post('/', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Process POST route');

  try {
    const expense = verifyExpense(req.body);
    expenses.push(expense);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(400).send();
  }

  res.status(201).send();
});

export default router;
