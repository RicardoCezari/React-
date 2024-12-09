import React, { useState } from 'react';
import ExibicaoNome from './exibicaoNome';
import InformacoesExtras from './InformacoesExtras';
import './style.css';


const PainelUsuario = () => {
  const [nome, setNome] = useState('Ricardo');

  const mudarNome = () => {
    setNome('Anne');
    
    ////
  };

  return (
    <div className="painel-usuario">
      <h1>Painel do Usuário</h1>
      <button onClick={mudarNome}>Mudar Nome</button>
      <ExibicaoNome nome={nome} />
      <InformacoesExtras>
        <p>Este é um bloco de informações extras para o usuário.</p>
      </InformacoesExtras>
    </div>
  );
};

export default PainelUsuario;