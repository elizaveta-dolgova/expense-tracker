import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { FormPage, MainPage, ListPage } from './screens';
import '../src/styles/Main.scss';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="add-new" element={<FormPage />} />
        <Route path="recent" element={<ListPage />} />
      </Routes>
    </>
  );
};

export default App;
