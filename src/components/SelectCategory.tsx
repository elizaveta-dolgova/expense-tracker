import React from 'react';
import '../styles/SelectCategory.scss';

export enum Category {
  RESTAURANTS = 'Restaurants',
  GROCERY = 'Grocery',
  TRAVELLING = 'Travelling',
  TRANSPORT = 'Transport',
  MEDICINE = 'Medicine',
  PETS = 'Pets',
  RENT = 'Rent',
  SHOPPING = 'Shopping',
  OTHER = 'Other',
}

export const CATEGORY_OPTIONS = [
  Category.RESTAURANTS,
  Category.GROCERY,
  Category.TRAVELLING,
  Category.TRANSPORT,
  Category.MEDICINE,
  Category.PETS,
  Category.RENT,
  Category.SHOPPING,
  Category.OTHER,
];

type SelectCategoryProps = {
  handleChange: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
  selectedCategory?: string;
};

function SelectCategory(props: SelectCategoryProps) {
  const { handleChange, name, selectedCategory } = props;

  return (
    <div>
      <span>Select category</span>
      <div className="category-container">
        {CATEGORY_OPTIONS.map((item, index) => (
          <div className={`category${selectedCategory === item ? ' category--selected' : ''}`} key={index}>
            <button
              className={`category-btn category-btn--${item.toLowerCase()}`}
              value={item}
              name={name}
              onClick={handleChange}
              type="button"
            ></button>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectCategory;
