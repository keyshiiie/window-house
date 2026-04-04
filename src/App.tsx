import { useState } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Services from './components/services/services'
import Products from './components/products/Products';
import Companyinfo from './components/companyinfo/companyinfo';
import Portfolio from './components/portfolio/portfolio';
import FAQ from './components/faq/FAQ';

import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header/>
      <Main/>
      <Services/>
      <Products />
      <Companyinfo/>
      <Portfolio/>
      <FAQ/>
      <footer>
        {/* Футер */}
      </footer>
    </div>
  );
};

export default App
