import React from 'react'
import './sobre.scss'
import './responsive.css'
import cotuca from './assets/ctc.webp'
import unicamp from './assets/unicamp.webp'

export default function Sobre() {
  return (
    <div id='sobre'>

        <div className="container">
            <div className="box">
                <div className="text">
                    <h3>Sobre</h3>
                    <h4>Sou natural de Conchal, São Paulo, e me mudei aos 16 anos (em 2014) para Campinas/SP. Me formei como Técnico em Mecatrônica e Assistente de Projetos e Processos Industriais Mecânicos pelo Colégio Técnico de Campinas (Cotuca - Unicamp), onde realizei 
                    também meu ensino médio. Iniciei minha graduação em 2019 no curso de Engenharia Agrícola pela Unicamp. Em 2021, decidi migrar de carreira após atuar por mais de 4 anos em Setor Industrial, tendo atuado com manutenção, suporte operacional e planejamento de manutenções.</h4>
                </div>
               
                <div className="text">
                    <h3>Acadêmico</h3>
                    <h4>Atualmente estou matriculado no curso de Engenharia Agrícola pela Universidade Estadual de Campinas, porém estou solicitando o remanejamento interno para o curso de Matemática Aplicada e Computacional. Realizei integralmente, até o momento, o período correspondendte
                        a 6 semestres de Engenharia. 
                    </h4>
                </div>
                <div className="academic-container">
                    <div className="col-6">
                        <div className="imagem-background">
                        <img src={unicamp} alt="foto da unicamp visto de cima" />
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
                                Solicitando o remanejamento interno para o curso de Bacharel em Matemática Aplicada e Computacional (2s2023)
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
                        <img src={cotuca} alt="imagem do prédio do cotuca" />
                        </div>

                    </div>
                </div>

                <div className="text">
                    <h4>Durante minha trajetória no Colégio Técnico de Campinas, pude participar de alguns projetos bastante importantes, tendo destaque o PIBIC-EM (Programa Institucional de Bolsas de Iniciação 
                        Científica para o Ensino Médio) projeto da Unicamp em parceria com o CNPq. Através da pesquisa desenvolvida, conquistei o reconhecimento do 1º lugar na categoria 'Humanidades' na VII Mostra de Trabalhos do Cotuca <a href="https://cotuca.unicamp.br/cotuca/2017/10/02/alunos-surpreendem-na-vii-mostra-de-trabalhos-do-cotuca/">(veja matéria no site)</a> e, também, tive a oportunidade de apresentar no <a href="https://proceedings.science/unicamp-pibic/pibic-2017/autores/andre-luiz-bandeli-junior?lang=pt-br">XXV Congresso de Iniciação Científica da Unicamp (2017).</a> </h4>
                </div>
                <div className="text">
                    <h3>Experiência Profissional</h3>
                    <h4>Aos 25 anos, comecei a trabalhar aos 13 anos. Iniciei minha trajetória atuando durante 2 anos e meio em oficina de motos, como mecânico, ainda em Conchal. 
                        Quando me mudei para Campinas, comecei a trabalhar no Grêmio Recreativo, atuando durante 3 anos com tratamento e manutenção de piscinas. Em 2017, iniciei meu estágio Técnico
                        na CTDI, onde trabalhei durante 4 anos e meio, tendo atuado como técnico de manutenção e suporte de engenharia em linhas produtivas, em laboratório de reparo eletrônico e em linhas de solda BGA.
                        Atualmente sou aluno do Programa de Permanência na Unicamp, portanto atudo em projetos diversos para a universidade.
                    </h4>
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
                                <h4>Desenvolvimento do zero de um site para o grupo de pesquisa GREMMLENZ, utilizando Wordpress, MySQL, Docker e CI/CD</h4>

                            </li>
                            <li>
                                <h3>Função: <span>Desenvolvimento Web Wordpress | DGRH</span></h3>
                                <h3>Local: <span>Diretoria Geral de RH</span></h3>
                                <h3>Duração Projeto: <span>abril de 2022 até fevereiro de 2023</span></h3>
                                <h4>Suporte ao antigo site (CMS Plone) e apoio no desenvolvimento de novos sites institucionais para a Unicamp com Wordpress</h4>
                            </li>
                            <li>
                                <h3>Função: <span>Desenvolvimento Web Java EE | HC</span></h3>
                                <h3>Local: <span>Hospital de Clínicas</span></h3>
                                <h3>Duração Projeto: <span>novembro de 2021 até abril 2022</span></h3>
                                <h4>Acompanhamento e resolução de tasks no módulo de exames no app AGHU, uma aplicação Web desenvolvida com Java EE, Wildfly, PostgreSQL entre outras ferramentas</h4>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="btn">
                <a href="https://drive.google.com/file/d/1SsGuhU7ca5IZlGejf0asT-pZbjOfadPb/view?usp=sharing" alt="acessar currículo online" target='__blank'>
                <button className='btn-secundary' alt="botao para acessar curriculo">
                ver currículo completo</button>
                </a>
            </div>
           
        </div>

    </div>
  )
}
