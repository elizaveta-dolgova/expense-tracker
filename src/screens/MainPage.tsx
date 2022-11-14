import * as React from 'react';
import ExpenseList from '../components/ExpenseList';
import '../styles/MainPage.scss';

export default function MainPage() {

  return (
    <div className='main-page'>
      <div className='main-page__img-container'>
        <div className='main-page__img'></div>
      </div>
      <div className='main-page__text-container'>
        <h1 className='main-page__title'>APP NAME</h1>
        <p className='main-page__app-descr'>Start tracking your expenses and keep your budget under control</p>
        <button className='main-page__start-btn'>Add new expense</button>
      </div>
    </div>
  );
}
