import React from 'react'
import './sobre.scss'
import './responsive.css'
import cotuca from './assets/ctc.jpg'
import unicamp from './assets/unicamp.jpg'

export default function Sobre() {
  return (
    <div id='sobre'>

        <div className="container">
            <div className="box">
                <div className="text">
                    <h3>Sobre</h3>
                    <h4>Sou natural de Conchal, São Paulo, e me mudei aos 16 anos (em 2014) para Campinas/SP. Me formei como Técnico em Mecatrônica e Assistente de Projetos e Processos Industriais Mecânicos pelo Colégio Técnico de Campinas (Cotuca - Unicamp), onde realizei 
                    também meu ensino médio. Iniciei minha graduação em 2019 no curso de Engenharia Agrícola pela Unicamp. Em 2021, decido migrar de carreira após atuar por mais de 4 anos em Setor Industrial, tendo atuado com com manutenção, suporte operacional e planejamento de manutenções.</h4>
                </div>
               
                <div className="text">
                    <h3>Acadêmico</h3>
                    <h4>Sou natural de Conchal, São Paulo, e me mudei aos 16 anos (em 2014) para Campinas/SP. Me formei como Técnico em Mecatrônica e Assistente de Projetos e Processos Industriais Mecânicos pelo Colégio Técnico de Campinas (Cotuca - Unicamp), onde realizei 
                    também meu ensino médio. Iniciei minha graduação em 2019 no curso </h4>
                </div>
                <div className="academic-container">
                    <div className="col-6">
                        <div className="imagem-background">
                        <img src={unicamp} alt="" />
                        </div>

                    </div>
                    <div className="col-6">
                        <h2>Universidade Estadual de Campinas</h2>
                        <h3>UNICAMP</h3>
                        <ul>
                            <li>
                                Bacharel em Engenharia Agrícola (2019)
                            </li>
                            <li>
                                Tentando o remanejamento interno para o curso de Bacharel em Matemática Aplicada e Computacional
                            </li>
                        </ul>
                    
                    </div>
                </div>

                <div className="academic-container">
            
                    <div className="col-6">
                        <h2>Colégio Técnico de Campinas</h2>
                        <h3>COTUCA-UNICAMP</h3>
                        <ul>
                            <li>
                                Técnico em Mecatrônica (2017)
                            </li>
                            <li>
                                Assistente de Projetos e Processos Industriais Mecânicos (2017)
                            </li>
                            <li>
                                Ensino Médio (2016)
                            </li>
                        </ul>
                    
                    </div>
                    <div className="col-6">
                        <div className="imagem-background">
                        <img src={cotuca} alt="" />
                        </div>

                    </div>
                </div>

                <div className="text">
                    <h4>Sou natural de Conchal, São Paulo, e me mudei aos 16 anos (em 2014) para Campinas/SP. Me formei como Técnico em Mecatrônica e Assistente de Projetos e Processos Industriais Mecânicos pelo Colégio Técnico de Campinas</h4>
                </div>
                <div className="text">
                    <h3>Experiência Profissional</h3>
                    <h4>Sou natural de Conchal, São Paulo, e me mudei aos 16 anos (em 2014) para Campinas/SP. Me formei como Técnico em Mecatrônica e Assistente de Projetos e Processos Industriais Mecânicos pelo Colégio Técnico de Campinas (Cotuca - Unicamp), onde realizei</h4>
                </div>
                <div className="profissional">
                    <div className="col-md">
                        <h2>Unicamp</h2>
                    </div>
                    <div className="col-md">
                        <ul>
                            <li>
                                <h3>Função: <span>Desenvolvimento Web Wodpress | GREMMLENZ</span></h3>
                                <h3>Local: <span>Instituto de Química</span></h3>
                                <h3>Duração Projeto: <span>março de 2023 até março 2024</span></h3>
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut enim dolor rem fugit! Asperiores vero reprehenderit natus, possimus illo</h4>

                            </li>
                            <li>
                                <h3>Função: <span>Desenvolvimento Web Wordpress | DGRH</span></h3>
                                <h3>Local: <span>Diretoria Geral de RH</span></h3>
                                <h3>Duração Projeto: <span>maio de 2022 até fevereiro de 2023</span></h3>
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut enim dolor rem fugit! Asperiores vero reprehenderit natus, possimus illo</h4>
                            </li>
                            <li>
                                <h3>Função: <span>Desenvolvimento Web Java EE | HC</span></h3>
                                <h3>Local: <span>Hospital de Clínicas</span></h3>
                                <h3>Duração Projeto: <span>novembro de 2021 até maio 2022</span></h3>
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut enim dolor rem fugit! Asperiores vero reprehenderit natus, possimus illo</h4>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="btn">
                <a href="assets/andre-bandeli.pdf" download alt="botao para download do curriculo">
                <button className='btn-secundary' alt="botao para download do curriculo">
                baixar currículo completo</button>
                </a>
            </div>
           
        </div>

    </div>
  )
}
