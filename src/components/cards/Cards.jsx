import React from 'react'
import './cards.scss'
import './responsive.css'

export default function Cards() {

  return (
      <div className="cards">
        <div className="col-12">
          <div className="box">

            <h2>Software Developer</h2>
            <h3>Técnico Mecatrônico e Assistente de Projetos e Processos Industriais Mecânicos formado pelo Colégio
              Técnico de Campinas - COTUCA UNICAMP</h3>

          </div>
          <div className="box">

            <h2>Academic Fields</h2>
            <h3>Graduando em Engenharia Agrícola pela Universidade Estadual de Campinas, mas remanejando para o curso de
              Matemática Aplicada e Computacional </h3>

          </div>
          <div className="box">

            <h2>Work Experience</h2>
            <h3>+10 anos de atuação no mercado de trabalho, tendo atuado no setor industrial, mecânico, recreativo e,
              atualmente, com desenvolvimento de software</h3>
          </div>
          <div className="box">

            <h2>Main Stacks</h2>
            <h3>Desenvolvo apps web utilizando as principais ferramentas de mercado, tais como: Java, Spring Boot,
              Docker, React, MySQL, Bootstrap, Wordpress, Html e CSS</h3>
          </div>
        </div>
      </div>
        
  )
}
