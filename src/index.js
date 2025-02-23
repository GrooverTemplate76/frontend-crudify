import React from 'react'; // Убедитесь, что React импортирован
import ReactDOM from 'react-dom'; // Импорт для React 17
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
