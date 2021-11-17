import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BookListProvider } from './components/context/listbooks-context';

ReactDOM.render(
  <React.StrictMode>
    <BookListProvider>
    <App />
    </BookListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);