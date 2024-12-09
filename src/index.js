import React from 'react';
import ReactDOM from 'react-dom/client'; // Alteração aqui: use 'react-dom/client' para o React 18+
import './index.css';
import App from './App';

// Criando a raiz e renderizando o componente App
const root = ReactDOM.createRoot(document.getElementById('root')); // Cria a raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);