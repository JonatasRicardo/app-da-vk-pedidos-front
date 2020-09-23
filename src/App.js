import React from 'react';
import Header from './features/Header';
import Cardapio from './features/Cardapio';

import './App.css';

function App() {

  return (
    <div className="App content-wrapper">
      <div className="container">
        <Header />
        <Cardapio />
      </div>
    </div>
  );
}

export default App;
