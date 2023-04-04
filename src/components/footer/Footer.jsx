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
                        <a href="#header" alt="link para primeira página">Home</a>
                    </li>
                    <li>
                        <a href="#portfolio" alt="link para página de projetos">Projetos</a>
                    </li>
                    <li>
                        <a href="#sobre" alt="link para página sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#certificados" alt="link para página certificados">Certificados</a>
                    </li>
                    <li>
                        <a href="#stacks" alt="link para página ferramentas">Stacks</a>
                    </li>
                    <li>
                        <a href="#contato" alt="link para página contatos">Contatos</a>
                    </li>
            </ul>

           </div>
           <div className="boxFooter">
                <h2>Redes</h2>
                <ul>
                        <li>
                            <a href="https://github.com/andre-bandeli" alt="link para o github" target='__blank'>Github</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/andrebandeli/" alt="link para o linkedin" target='__blank'>Linkedin</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1SsGuhU7ca5IZlGejf0asT-pZbjOfadPb/view?usp=sharing" alt="link para documento pdf online do currículo" target='__blank'>Currículo</a>
                        </li>
                        <li className='redes'>
                            <a href="https://github.com/andre-bandeli" alt="link para o github" target='__blank'>
                        <img src={github} alt="ícone do github" width='25px' height='25px' /></a>
                        <a href="https://www.linkedin.com/in/andrebandeli/" alt="link para o linkedin" target='__blank'>
                        <img src={linkedin} alt="ícone do linkedin" width='25px' height='25px' /></a>
                        <a href="https://drive.google.com/file/d/1SsGuhU7ca5IZlGejf0asT-pZbjOfadPb/view?usp=sharing" alt="link para documento pdf online do currículo" target='__blank'>
                        <img src={pdf} alt="ícone de pdf" width='25px' height='25px' /></a>
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
