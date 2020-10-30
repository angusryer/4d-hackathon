import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Header,
  Footer,
  Hero,
  Journey,
  Products,
  ShopHighPerformance,
  VideoPlayer,
} from "../";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Products />
      <ShopHighPerformance />
      <Journey />
      <VideoPlayer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
