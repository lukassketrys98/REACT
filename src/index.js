import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserContext from './userContext'



ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider  value = {"Lukas"}>
      <App />

    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
