import { useState } from "react";

export type Expense = {
    name: string;
    price: string;
    category: string;
    date: string
};

export const useFormHook = (initialState: Expense) => {
    const [formState, setFormState] = useState<Expense>(initialState);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.value);
        setFormState({ ...formState, [e.currentTarget.name]: e.currentTarget.value })
        console.log(formState)
    }
    const resetForm = () => {
        setFormState(initialState);
    }

    return { formState, handleInputChange, resetForm };
}
