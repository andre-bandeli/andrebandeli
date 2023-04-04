import React from 'react'
import './style.css'
// import instagran from '../assets/icones/insta.webp'
// import linkedin from '../assets/icones/in.webp'
// import twitter from '../assets/icones/twitter.webp'



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
                        <a to="/">Home</a>
                    </li>
                    <li>
                        <a to="/login">Projetos</a>
                    </li>
                    <li>
                        <a to="/sobre">Sobre</a>
                    </li>
                    <li>
                        <a to="/financiamentos">Certificados</a>
                    </li>
                    <li>
                        <a to="/contato">Stacks</a>
                    </li>
                    <li>
                        <a to="/motocicletas">Contato</a>
                    </li>
            </ul>

           </div>
           <div className="boxFooter">
                <h2>Redes</h2>
                <ul>
                        <li>
                            <a to="/">Github</a>
                        </li>
                        <li>
                            <a to="/login">Linkedin</a>
                        </li>
                        <li>
                            <a to="/login">Currículo</a>
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
                    <li className='redes'>
                        {/* <img src={twitter} alt="ícone do twitter" width='25px' height='25px' />
                        <img src={instagran} alt="ícone do instagran" width='25px' height='25px' />
                        <img src={linkedin} alt="ícone do linkedin" width='25px' height='25px' /> */}
                    </li>
                   
            </ul>

            </div>
            
        </div>
    </div>
  )
}
