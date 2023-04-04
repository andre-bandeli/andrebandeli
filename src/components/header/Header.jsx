import React from 'react'
import './header.scss'

import git from './icones/git-ft.png'
import linkedin from './icones/in-ft.png'
import { useState } from 'react';

import { Link } from "react-router-dom";
import Typing from 'react-typing-animation';

export default function Header() {
  const [currentText, setCurrentText] = useState('Desenvolvedor Web');

  const handleFinishedTyping = () => {
    setCurrentText('Técnico Mecatrônico');
  };

  const handleBeforeTyping = () => {
    setCurrentText('');
  };

  return (
    <div className='header' id='header'>
      <div className="container">
        <span className='spn-name'><h2>André Bandeli</h2></span>
        <h3>Desenvolvedor de Software Web | Técnico Mecatrônico | Graduando em Engenharia Agrícola</h3>
        {/* <Typing
          speed={90}
          onFinishedTyping={handleFinishedTyping}
          onBeforeTyping={handleBeforeTyping}
        >
          <h3>{currentText}</h3>
        </Typing> */}
        
        <div className="btn">
          <a href="/#portfolio" alt="link para a página de projetos">
            <button className='btn-projects' alt="botão para seção de projetos">ver projetos</button>
          </a>
        </div>
      </div>
    </div>
  )
}