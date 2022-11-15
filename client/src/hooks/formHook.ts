import { useState } from 'react';
import type { Expense } from '../redux/expenses/reducer';

type Error = {
  [key: string]: string;
};

const dateIsInvalid = (date: Date) => {
  return isNaN(Number(date));
};

export const useFormHook = (initialState: Expense) => {
  const [formState, setFormState] = useState<Expense>(initialState);
  const [error, setError] = useState<Error>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'price':
        if (isNaN(parseInt(e.target.value))) {
          return setError({ ...error, priceError: 'should be a number' });
        } else {
          if (error.priceError) {
            const newError = { ...error };
            delete newError.priceError;
            setError(newError);
          }
          return setFormState({ ...formState, price: parseInt(e.target.value) });
        }

      case 'date':
        if (dateIsInvalid(new Date(e.target.value))) {
          return setError({ ...error, dateError: 'invalid date' });
        } else {
          if (error.dateError) {
            const newError = { ...error };
            delete newError.dateError;
            setError(newError);
          }
          return setFormState({ ...formState, date: new Date(e.target.value) });
        }

      default:
        return setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFormState({ ...formState, category: e.currentTarget.value });
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return { formState, handleInputChange, handleButtonClick, resetForm, error };
};
