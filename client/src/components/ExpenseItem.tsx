import * as React from 'react';

import '../styles/ExpenseItem.scss';

type ExpenseItemProps = {
  name: string;
  price: number;
  category: string;
};

const ExpenseItem = (props: ExpenseItemProps) => {
  const { name, price, category } = props;

  return (
    <li className="expense-item">
      <div className={`expense-item__category-img expense-item__category-img--${category.toLowerCase()}`}></div>
      <div className="expense-item__info">
        <span className="expense-item__name">{name}</span>
        <span className="expense-item__price">{price}$</span>
      </div>
    </li>
  );
};

export default ExpenseItem;
