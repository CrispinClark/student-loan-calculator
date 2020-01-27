import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInputFlow from '../UserInputFlow';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <UserInputFlow/>
      </header>
    </div>
  );
}

export default App;
