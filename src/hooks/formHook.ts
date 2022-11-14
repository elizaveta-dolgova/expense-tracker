import { useState } from 'react';
import type { Expense } from '../redux/expenses/reducer';

// export type Expense = {
//   name: string;
//   price: number;
//   category: string;
//   date: Date;
// };

export const useFormHook = (initialState: Expense) => {
  const [formState, setFormState] = useState<Expense>(initialState);
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'price':
        if (isNaN(Number(e.target.value))) {
          setError(true);
        }
        return setFormState({ ...formState, price: parseInt(e.target.value) });
      case 'date':
        return setFormState({ ...formState, date: new Date(e.target.value) });
      default:
        return setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFormState({ ...formState, category: e.currentTarget.value.toLowerCase() });
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return { formState, handleInputChange, handleButtonClick, resetForm, error };
};
