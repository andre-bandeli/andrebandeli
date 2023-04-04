import React from 'react'
import './cards.scss'
import './responsive.css'
import unicamp from './icones/unicamp.png'
import cotuca from './icones/cotuca.png'
import mercado from './icones/mercado.png'
import web from './icones/web.png'

export default function Cards() {

  return (
    <div id='cards'>
      
        <div className="container">
            <div className="box">

              <img src={cotuca} alt="ícone ilustrativo api REST" />
              <h2>Técnico Mecatrônico e Assistente de Projetos e Processos Industriais Mecânicos formado pelo Colégio Técnico de Campinas - COTUCA UNICAMP</h2>

            </div>
            <div className="box">

              <img src={unicamp} alt="ícone ilustrativo página" />
              <h2>Graduando em Engenharia Agrícola pela Universidade Estadual de Campinas, mas remanejando para o curso de Matemática Aplicada e Computacional </h2>
                
            </div>
            <div className="box">

              <img src={mercado} alt="ícone ilustrativo SEO" />
              <h2>+10 anos de atuação no mercado de trabalho, tendo atuado no setor industrial, mecânico, recreativo e, atualmente, com desenvolvimento de software</h2>
            </div>
            <div className="box">

              <img src={web} alt="ícone ilustrativo SEO" />
              <h2>Desenvolvo utilizando as principais ferramentas de mercado, tais como: Java, Spring Boot, Docker, React, MySQL, Bootstrap, Wordpress, Html e CSS</h2>
            </div>
        </div>

    </div>
  )
}
