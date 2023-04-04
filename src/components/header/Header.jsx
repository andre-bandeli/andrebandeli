import React from 'react'
import './header.scss'
import './responsive.css'


export default function Header() {
  
  return (
    <div className='header' id='header'>
      <div className="container">
        <span className='spn-name'><h2>André Bandeli</h2></span>
        <h3>Desenvolvedor de Software Web | Técnico Mecatrônico | Graduando em Engenharia Agrícola</h3>
        <div className="btn">
          <a href="/#portfolio" alt="link para a página de projetos">
            <button className='btn-projects' alt="botão para seção de projetos">ver projetos</button>
          </a>
        </div>
      </div>
    </div>
  )
}