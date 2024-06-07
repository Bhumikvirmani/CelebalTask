import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormComponent from './Component/FormComponent';
import SuccessPage from './Component/SuccessPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FormComponent />}/>
      <Route path="/success" element={<SuccessPage/>}/>
    </Routes>
  </BrowserRouter>
);