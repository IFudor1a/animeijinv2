import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const MyContext = createContext('');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App/>
);
