import React, { useState } from 'react';
import './estilo.css';

export default function PaginaInicial() {
  const [numRandom, setNumRandom] = useState(1);

  function newNumber() {
    const number = Math.floor(Math.random() * (100-1) + 1);
    setNumRandom(number);
  }
  return(
    <div className="conteudo-centralizado">
        <h3>Número aleatório:</h3>
        <h1>{numRandom}</h1>
        
        <div className='area-botao'>
          <label>
            Click no botão abaixo para gerar um número aleatório:
          </label>
          
          <button onClick={newNumber}>
            Gerar número
          </button>
        </div>
      </div>
  );
}

