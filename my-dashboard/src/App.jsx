import React from 'react';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Dashboard App</h1>
      </header>
      <main>
        <Dashboard /> {/* Render the Dashboard component here */}
      </main>
    </div>
  );
}

export default App;
