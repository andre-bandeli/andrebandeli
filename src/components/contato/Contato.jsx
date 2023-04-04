import React from 'react'
import './contato.scss'
import './responsive.css'
import linkedin from './assets/linkedin.webp'
import github from './assets/github.webp'


export default function Contato() {



  return (
    <div id='contato'>
      <div className="col-12">
      <div className="container">
          
          <h1>Contato</h1>
          <h2>Quer conversar sobre ideias, projetos ou simplesmente compartilhar histórias interessantes? Me chame para um café.</h2>
          <h2><b>Entre em contato através de alguma de minhas redes</b></h2>

          <div className="redes">
            <a href="https://www.linkedin.com/in/andrebandeli/" target="__blank">
              <img src={linkedin} alt=""/>
            </a>
            <a href="https://github.com/andre-bandeli" target="__blank">
            <img src={github} alt="" />
            </a>
          </div>
          
         
          </div>
          <div className="container">
                
                <div className="foto">

                </div>
          </div>
      </div>
          
    </div>
  )
}