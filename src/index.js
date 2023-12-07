import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root'));