import React from 'react'
import './contato.scss'
import './responsive.css'
import linkedin from './assets/linkedin.webp'
import github from './assets/github.webp'


export default function Contato() {



  return (
    <div className='contato'>
        <div className="container">

          <div className="text">
            <h2>Contato</h2>
            <h3>Quer conversar sobre ideias, projetos ou simplesmente compartilhar histórias interessantes? Vamos bater
              um papo.</h3>
            <h3><b>Entre em contato através de alguma de minhas redes</b></h3>

            <div className="redes">
              <a href="https://www.linkedin.com/in/andrebandeli/" alt="botão com ícone do linkedin" target="__blank">
                <img src={linkedin} alt="Logo do linkedin" />
              </a>
              <a href="https://github.com/andre-bandeli" alt="botão com ícone do github" target="__blank">
                <img src={github} alt="Logo do github" />
              </a>
            </div>
          </div>

          <div className="image">

          <div className="foto">
          </div>
        </div>
        </div>

    </div>
  )
}