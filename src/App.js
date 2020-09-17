import React from 'react';
import './App.css';
import Main from './components/Main'
import Header from './components/Header'
import { GlobalProvider, CartProvider } from './context/GlobalState';
import { Routes, Route } from 'react-router';
import Detail from './components/Detail'
import Billing from './components/Billing'
import Form from './components/Form'
import Receipt from './components/Receipt'
//import Product from './components/Product'

function App() {
  return (
    <div className="App">
      <GlobalProvider><CartProvider>
      <Header />

      <Routes>
      
       <Route path="/" element={<Main/>}></Route>
       <Route path="products/:id" element={<Detail/>}> </Route>
       <Route path="/checkout" element={<Billing/>}> </Route>
       <Route path="/form" element={<Form/>}> </Route>
       <Route path="/form/:total" element={<Form/>}> </Route>
       <Route path="/receipt" element={<Receipt/>}> </Route>
       <Route path="/receipt/:paramArr" element={<Receipt/>}> </Route>
     </Routes>

     </CartProvider>
      </GlobalProvider>
    </div>
  );
}

export default App;
