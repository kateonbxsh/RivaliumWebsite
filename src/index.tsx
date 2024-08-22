import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Main from './components/Main'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index path="/home" element={<></>}/>
          <Route path="/rivals" element={<></>}/> 
          <Route path="/download" element={<></>}/> 
          <Route path="/gameplay" element={<></>}/>
          <Route path="/game" element={<></>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);