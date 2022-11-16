import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ExpenseItem from './ExpenseItem';
import { getCurrentError, getCurrentExpenses } from '../redux/expenses/selectors';
import '../styles/ExpenseList.scss';
import { Link } from 'react-router-dom';
import { getExpensesList, cleanErrors, testDelay } from '../redux/expenses/actions';

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(getCurrentExpenses);
  const error = useSelector(getCurrentError);

  React.useEffect(() => {
    dispatch(getExpensesList());
  }, []);

  // if (error) {
  //   setTimeout(() => {
  //     dispatch(cleanErrors())
  //   }, 3000);
  // }

  const totalPrice = expenses.reduce((acc, next) => acc + next.price, 0);

  return (
    <div className="expense-list">
      <div className="expense-list__title">
        <h3>Your recent expenses</h3>
        <p className="expense-list__total">Sum: {totalPrice}$</p>
      </div>
      <button className="expense-list__btn">See All</button>
      {error && <p>{error}</p>}
      <ul className="expense-list__list">
        {expenses.map((item, index) => (
          <ExpenseItem key={index} name={item.name} price={item.price} category={item.category} />
        ))}
      </ul>
      <Link to="/add-new" className="expense-list__btn expense-list__btn--add">
        +
      </Link>
      <button onClick={() => dispatch(testDelay())}>Click me</button>
    </div>
  );
};

export default ExpenseList;
