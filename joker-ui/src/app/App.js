import React from 'react';
import './App.css';

import Joker from './joke/components/Joker';
import jokerAPI from './joke/api/joker-api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Joker getJoke={jokerAPI} />
      </header>
    </div>
  );
}

export default App;
