
import React from 'react';
import './style.css';

const ExibicaoNome = ({ nome }) => {
  return (
    <div className="exibicao-nome">
      <h2>Exibição do Nome</h2>
      <p>O nome do usuário é: {nome}</p>
    </div>
  );
};

export default ExibicaoNome;