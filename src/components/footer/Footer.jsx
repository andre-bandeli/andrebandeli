import React from 'react'
import './style.css'
import github from './assets/github.webp'
import linkedin from './assets/linkedin.webp'
import pdf from './assets/pdf.webp'



export default function Footer() {
  return (
    <div className='footer'>
        <div className="social-box">
                
        </div>
        <div className="containerFooter">

           <div className="boxFooter">
            <h2>Páginas</h2>
            <ul>
                    <li>
                        <a href="#header">Home</a>
                    </li>
                    <li>
                        <a href="#portfolio">Projetos</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#certificados">Certificados</a>
                    </li>
                    <li>
                        <a href="#stacks">Stacks</a>
                    </li>
                    <li>
                        <a href="#contato">Contatos</a>
                    </li>
            </ul>

           </div>
           <div className="boxFooter">
                <h2>Redes</h2>
                <ul>
                        <li>
                            <a href="https://github.com/andre-bandeli" target='__blank'>Github</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/andrebandeli/" target='__blank'>Linkedin</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/andrebandeli/" target='__blank'>Currículo</a>
                        </li>
                        <li className='redes'>
                            <a href="https://github.com/andre-bandeli" target='__blank'>
                        <img src={github} alt="ícone do twitter" width='25px' height='25px' /></a>
                        <a href="https://www.linkedin.com/in/andrebandeli/" target='__blank'>
                        <img src={linkedin} alt="ícone do linkedin" width='25px' height='25px' /></a>
                        <a href="https://drive.google.com/file/d/1yGdyLi4i15Xa2ujFaQqF1eyvB0rwgpB_/view?usp=sharing" target='__blank'>
                        <img src={pdf} alt="ícone do linkedin" width='25px' height='25px' /></a>
                    </li>
                       
                </ul>

           </div>
          
            <div className="boxFooter">
            <h2>Localização</h2>
            <ul>
                    <li>
                        Universidade Estadual de Campinas
                    </li>
                    <li>
                       Barão Geraldo, Campinas, São Paulo, Brasil.
                    </li>

            </ul>

            </div>
            
        </div>
    </div>
  )
}
