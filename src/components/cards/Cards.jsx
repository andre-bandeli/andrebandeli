import React from 'react'
import './cards.scss'
import './responsive.css'
import unicamp from './icones/unicamp.webp'
import cotuca from './icones/cotuca.webp'
import mercado from './icones/mercado.webp'
import web from './icones/web.webp'

export default function Cards() {

  return (
    <div id='cards'>
      
        <div className="container">
            <div className="box">

              <img src={cotuca} alt="Logo COTUCA. Fundo vermelho e branco." />
              <h2>Técnico Mecatrônico e Assistente de Projetos e Processos Industriais Mecânicos formado pelo Colégio Técnico de Campinas - COTUCA UNICAMP</h2>

            </div>
            <div className="box">

              <img src={unicamp} alt="Logo Unicamp. Fundo branco" />
              <h2>Graduando em Engenharia Agrícola pela Universidade Estadual de Campinas, mas remanejando para o curso de Matemática Aplicada e Computacional </h2>
                
            </div>
            <div className="box">

              <img src={mercado} alt="Ícone redondo com fundo vermelho e uma ferramenta ao centro" />
              <h2>+10 anos de atuação no mercado de trabalho, tendo atuado no setor industrial, mecânico, recreativo e, atualmente, com desenvolvimento de software</h2>
            </div>
            <div className="box">

              <img src={web} alt="Ícone web redondo com fundo branco" />
              <h2>Desenvolvo apps web utilizando as principais ferramentas de mercado, tais como: Java, Spring Boot, Docker, React, MySQL, Bootstrap, Wordpress, Html e CSS</h2>
            </div>
        </div>

    </div>
  )
}
