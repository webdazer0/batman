import React from 'react';
//import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Guardie from './components/Guardie';
import Navigazione from './components/Navigazione';

function App() {
  return (
    <div className="App">
      <Navigazione />
      <div className="row">
      <Guardie />
      </div>
    </div>
  );
}

export default App;
