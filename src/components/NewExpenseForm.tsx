import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import InputField from './InputField';
import SelectCategory from './SelectCategory';
import { useFormHook } from '../hooks/formHook';
import { addNewExpense } from '../redux/expenses/actions';
import '../styles/NewExpenseForm.scss';

export const initialFormState = {
    name: '',
    price: '',
    description: '',
    category: '',
    date: '',
};

const NewExpenseForm = () => {
    const dispatch = useDispatch();
    const { formState, handleInputChange, resetForm } = useFormHook(initialFormState); 

    const addNewExpenseHandler = (ev:React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        dispatch(addNewExpense(formState));
        resetForm();
    };

    return (
    <div className='new-expense'>
        <form onSubmit={addNewExpenseHandler} className='new-expense__form'>
            <h2>New Expense</h2>
            <InputField 
                label='Enter your expense' 
                type='text' name='name'
                handleChange={handleInputChange} 
                value={formState.name} 
                required={true}
            />
            <InputField 
                label='How much did you spend' 
                type='number' 
                name='price' 
                handleChange={handleInputChange} 
                value={formState.price} 
                required={true}
            />
            <InputField 
                label='Date' 
                type='date' 
                name='date' 
                handleChange={handleInputChange} 
                value={formState.date} 
                required={true}
            />
            <SelectCategory 
                name='category' 
                handleChange={handleInputChange} 
            />
            <button className='new-expense__addBtn'>Add</button>
        </form>
    </div>
  )
}

export default NewExpenseForm;