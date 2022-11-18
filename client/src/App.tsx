import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { FormPage, MainPage, ListPage } from './screens';
import '../src/styles/Main.scss';
import AlertModal from './components/AlertModal';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="add-new" element={<FormPage />} />
        <Route path="recent" element={<ListPage />} />
      </Routes>
      <AlertModal />
    </>
  );
};

export default App;
