import * as React from 'react';
import { useSelector } from 'react-redux';

import ExpenseItem from './ExpenseItem';
import { getCurrentExpenses } from '../redux/expenses/selectors';
import '../styles/ExpenseList.scss';
import { Link } from 'react-router-dom';

const ExpenseList = () => {
  const expenses = useSelector(getCurrentExpenses);

  const totalPrice = expenses.reduce((acc, next) => acc + next.price, 0);

  return (
    <div className="expense-list">
      <div className="expense-list__title">
        <h3>Your recent expenses</h3>
        <p className="expense-list__total">Sum: {totalPrice}$</p>
      </div>
      <button className="expense-list__btn">See All</button>
      <ul className="expense-list__list">
        {expenses.map((item, index) => (
          <ExpenseItem key={index} name={item.name} price={item.price} category={item.category} />
        ))}
      </ul>
      <Link to="/add-new" className="expense-list__btn expense-list__btn--add">
        +
      </Link>
    </div>
  );
};

export default ExpenseList;