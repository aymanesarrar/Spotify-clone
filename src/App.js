import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';

function App() {
  // short term memory storage
  const [token, setToken] = useState(null);
  // run code based on a given condition
  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token;

      if (_token) {
        setToken(_token)
      }
  }, [])
  return (
    <div className="app">
     {
       token ? <h1>ma7chmtich ?</h1> : (<Login />)
     }
      {/* <Login /> */}
    </div>
  );
}

export default App;
