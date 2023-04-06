import React from 'react'
import { useEffect, useState } from "react";
import './certificados.scss'
import './responsive.css'
import ReactElasticCarousel from 'react-elastic-carousel'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import {
  certificados,
} from './data-certificados.js';

function Certificados() {
  const [selected, setSelected] = useState('certificados');
  const [data, setData] = useState([]);

  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1024, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    switch (selected) {
      default:
        setData(certificados);
    }
  }, [selected]);

  const arrowButton = ({ type, onClick, isEdge }) => {
    const label = type === 'PREV' ? 'Anterior' : 'Próximo';
    const icon = type === 'PREV' ? <FaAngleLeft /> : <FaAngleRight />;
    return (
      <button
        aria-label={label}
        disabled={isEdge}
        onClick={onClick}
        className="carousel-arrow"
      >
        {icon}
      </button>
    );
  };

  return (
    <div id="certificados">
      <h2>Cursos e Certificações</h2>
      <h3>
        Aqui estão reunidos alguns dos cursos que realizei e venho realizando,
        sendo eles de programação nas linguagens java e python, banco de dados,
        Docker, construção de aplicações REST entre outros.
      </h3>

      <div className="container">
        <ReactElasticCarousel
          breakPoints={breakPoints}
          renderArrow={arrowButton}
        >
          {data.map((d) => (
            <div className="box">
              <div className="imagem">
                <img src={d.imagem} alt="Imagem do certificado" />
              </div>
              <div className="content">
                <h4>
                  {' '}
                  <span>{d.title}</span>
                </h4>
                <h4>{d.legenda}</h4>
              </div>
            </div>
          ))}
        </ReactElasticCarousel>
      </div>
    </div>
  );
}

export default Certificados;