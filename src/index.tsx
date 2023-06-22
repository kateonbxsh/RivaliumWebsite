import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import ListUsers from './components/ListUsers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <ListUsers />
);

/*root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListUsers />}/>  
        <Route path="/hajar" element={<h1>Hello big man</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);*/