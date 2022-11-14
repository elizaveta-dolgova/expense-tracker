import React from 'react';
import '../styles/SelectCategory.scss';

export const options = [ 'Restaurant', 'Grocery', 'Traveling', 'Transport', 'Medicine', 'Pets', 'Rent', 'Shopping', 'Other' ];

type SelectCategoryProps = {
  handleChange: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
}

function SelectCategory(props: SelectCategoryProps) {
  const {handleChange, name } = props;

  return (
    <div>
      <span>Select category</span>
      <div className='category-container'>
        {options.map((item, index) => 
                      <div className='category' key={index}>
                        <button
                          className={`category-btn category-btn--${item.toLowerCase()}`}
                          value={item}
                          name={name}
                          onClick={handleChange}
                          type='button'
                        >
                        </button>
                        <span>{item}</span>
                      </div>
                    )
        }
      </div>
    </div>
  )
}

export default SelectCategory