import React, { useState } from 'react';
import './App.css';
import Login from '../src/login/Login';
import Dashboard from '../src/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  } 
  return (
    <div className="App">
      <h1>Application</h1>  
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard">
          <Dashboard/>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
