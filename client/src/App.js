import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.scss';
import Header from '../src/Components/Header/Header';
import Hero from '../src/Components/Hero/Hero';
import Products from '../src/Components/Products/Products';
import Journey from '../src/Components/Journey/Journey';
import ShopHighPerformance from '../src/Components/ShopHighPerformance/ShopHighPerformance';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <Products />
        <Journey />
        <ShopHighPerformance />
      </BrowserRouter>
    </div>
  );
}

export default App;
