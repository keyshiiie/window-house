import { useState } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Services from './components/services/services'
import Products from './components/products/Products';
import Companyinfo from './components/companyinfo/companyinfo';

import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header/>
      <Main/>
      <Services/>
      <Products />
      <Companyinfo/>
      <footer>
        {/* Футер */}
      </footer>
    </div>
  );
};

export default App
