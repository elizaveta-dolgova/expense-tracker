import React from 'react';
import '../styles/SelectCategory.scss';

export enum Category {
  RESTAURANTS = 'Restaurants',
  GROCERY = 'Grocery',
  TRAVELING = 'Traveling',
  TRANSPORT = 'Transport',
  MEDICINE = 'Medicine',
  PETS = 'Pets',
  RENT = 'Rent',
  SHOPPING = 'Shopping',
  OTHER = 'Other',
}

export const options = [
  Category.RESTAURANTS,
  Category.GROCERY,
  Category.TRAVELING,
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
};

function SelectCategory(props: SelectCategoryProps) {
  const { handleChange, name } = props;

  return (
    <div>
      <span>Select category</span>
      <div className="category-container">
        {options.map((item, index) => (
          <div className="category" key={index}>
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
