import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Order from './Order';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='/order' element={<Order />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  </Router>
);
