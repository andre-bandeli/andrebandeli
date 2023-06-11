import React from 'react'
import './about.scss'
import './responsive.css'
import cotuca from './assets/ctc.webp'
import unicamp from './assets/unicamp.webp'

export default function About() {
  return (
    <div className='about'>

        <div className="container">
            <div className="box">
                <div className="text">
                    <h2>About</h2>
                    <h3>Sou natural de Conchal, São Paulo, e me mudei aos 16 anos (em 2014) para Campinas/SP. Me formei como Técnico em Mecatrônica e Assistente de Projetos e Processos Industriais Mecânicos pelo Colégio Técnico de Campinas (Cotuca - Unicamp), onde realizei 
                    também meu ensino médio. Iniciei minha graduação em 2019 no curso de Engenharia Agrícola pela Unicamp. Em 2021, decidi migrar 
                    de carreira após atuar por mais de 4 anos em Setor Industrial, tendo atuado com manutenção, suporte operacional e planejamento de manutenções.</h3>
                </div>
               
                <div className="text">
                    <h2>Acadêmico</h2>
                    <h3>Atualmente estou matriculado no curso de Engenharia Agrícola pela Universidade Estadual de Campinas, 
                        porém estou solicitando o remanejamento interno para o curso de Matemática Aplicada e Computacional. 
                        Realizei integralmente, até o momento, o período correspondendte
                        a 6 semestres de Engenharia. 
                    </h3>
                </div>
                <div className="academic-container">
                    <div className="col-6">
                        <div className="imagem-background">
                        <img src={unicamp} alt="foto da unicamp visto de cima" />
                        </div>

                    </div>
                    <div className="col-6">
                        <h2>Universidade Estadual de Campinas <span> UNICAMP </span></h2>
                        <h3>Bacharel em Engenharia Agrícola (2019)</h3>
                        <h3>*Solicitando o remanejamento interno para o curso de Bacharel em Matemática Aplicada e Computacional (2s2023)</h3>

                    
                    </div>
                </div>

                <div className="academic-container">
            
                    <div className="col-6">
                        <h2>Colégio Técnico de Campinas <span>COTUCA-UNICAMP</span></h2>

                        <h3>Técnico em Mecatrônica (2017)</h3>
                        <h3>
                            Assistente de Projetos e Processos Industriais Mecânicos (2017)
                        </h3>
                        <h3>Ensino Médio (2016)</h3>                
                    </div>
                    <div className="col-6">
                        <div className="imagem-background">
                        <img src={cotuca} alt="imagem do prédio do cotuca" />
                        </div>

                    </div>
                </div>

                <div className="text">
                    <h3>Durante minha trajetória no Colégio Técnico de Campinas, pude participar de alguns projetos bastante importantes, tendo destaque o PIBIC-EM (Programa Institucional de Bolsas de Iniciação 
                        Científica para o Ensino Médio) projeto da Unicamp em parceria com o CNPq. Através da pesquisa desenvolvida, 
                        conquistei o reconhecimento do 1º lugar na categoria 'Humanidades' na VII Mostra de Trabalhos 
                        do Cotuca <a href="https://cotuca.unicamp.br/cotuca/2017/10/02/alunos-surpreendem-na-vii-mostra-de-trabalhos-do-cotuca/">
                            (veja matéria no site)</a> e, também, tive a oportunidade de 
                            apresentar no <a href="https://proceedings.science/unicamp-pibic/pibic-2017/autores/andre-luiz-bandeli-junior?lang=pt-br">XXV Congresso 
                            de Iniciação Científica da Unicamp (2017).</a> </h3>
                </div>
                {/* <div className="text">
                    <h2>Experiência Profissional</h2>
                    <h3>Aos 25 anos, comecei a trabalhar aos 13 anos. Iniciei minha trajetória atuando durante 2 anos e meio em oficina de motos, como mecânico, ainda em Conchal. 
                        Quando me mudei para Campinas, comecei a trabalhar no Grêmio Recreativo, atuando durante 3 anos com tratamento e manutenção de piscinas. Em 2017, iniciei meu estágio Técnico
                        na CTDI, onde trabalhei durante 4 anos e meio, tendo atuado como técnico de manutenção e suporte de engenharia em linhas produtivas, em laboratório de reparo eletrônico e em linhas de solda BGA.
                        Atualmente sou aluno do Programa de Permanência na Unicamp, portanto atudo em projetos diversos para a universidade.
                    </h3>
                </div> */}
               
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
