import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.scss';
import Header from '../src/Components/Header/Header';
import Home from '../src/Components/Home/Home';
import Hero from '../src/Components/Hero/Hero';
import Products from '../src/Components/Products/Products';
import VideoPlayer from '../src/Components/VideoPlayer/VideoPlayer';
import Footer from '../src/Components/Footer/Footer';
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
        <VideoPlayer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
