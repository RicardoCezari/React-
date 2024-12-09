import React from 'react';
import './style.css';

const InformacoesExtras = ({ children }) => {
  return (
    <div className="informacoes-extras">
      <h2>Informações Extras</h2>
      <div>{children}</div>
    </div>
  );
};

export default InformacoesExtras;