import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Cart from './components/Cart';
import DetailsPage from './pages/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<App />} exact >
                
            </Route>
               <Route path="/cart" element={<Cart />} /> 
               <Route path="/details" element={<DetailsPage />}/>
        </Routes>
      
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

