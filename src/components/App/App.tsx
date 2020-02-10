import React from 'react';
import logo from './logo.svg';
import './App.css';
import InitialStateCard from '../InitialStateCard'
import RepaymentCalculator from '../RepaymentCalculator'

const dummyState = {
  currentSalary: 60000,
  currentLoanRemaining: 56000
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <RepaymentCalculator/>
      </header>
    </div>
  );
}

export default App;
