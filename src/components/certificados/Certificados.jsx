import React from 'react'
import { useEffect, useState } from "react";
import './certificados.scss'
import ReactElasticCarousel from 'react-elastic-carousel'
import certificado from './certificado.png'

import {
  certificados,
} from '../../data-certificados.js';


export default function Certificados() {

  const [selected] = useState("certificados");
  const [data, setData] = useState([]);

  const breakPoints = [
    {width: 1, itemsToShow: 1 },
    {width: 375, itemsToShow: 1},
    {width: 550, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 1024, itemsToShow: 2},
    {width: 1200, itemsToShow: 4},
  ]

  useEffect(() => {
    switch (selected) {
    default:
        setData(certificados);
    }
}, [selected]);


  return (
    <div id='certificados'>
        <h2>Cursos e Certificações</h2>
        <h3>Aqui estão reunidos alguns dos cursos que realizei e venho realizando, sendo eles de programação nas linguagens java e python, banco de dados, Docker, construção de aplicações REST entre outros.</h3>

        <div className="container">

        <ReactElasticCarousel breakPoints={breakPoints}>

        {data.map((d) => (
          <div className='box'>
            <div className="imagem">
              <img src={certificado} alt="" />
            </div>
            <div className="content">

                    <h4> <span>{d.title}</span></h4>


                    <h4>{d.legenda}</h4>


            </div>

          </div>
        ))}
          
          </ReactElasticCarousel>

        </div>
    </div>
  )
}
