import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Container from './components/Container';
import './styles/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Container />
  </React.StrictMode>
);