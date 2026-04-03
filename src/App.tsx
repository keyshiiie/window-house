import { useState } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Services from './components/services/services'
import Products from './components/products/Products';

import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header/>
      <Main/>
      <Services/>
      <Products />
      <footer>
        {/* Футер */}
      </footer>
    </div>
  );
};

export default App
