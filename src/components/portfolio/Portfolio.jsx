import React from 'react'
import './portfolio.scss'
import { useEffect, useState } from "react";
import PortfolioList from "./PortfolioList";


import {
    todos,
    reactjs,
    java,
    python,
} from '../../data';

export default function Portfolio() {

    const [selected, setSelected] = useState("todos");
    const [data, setData] = useState([]);
    const list = [
        {
        id: "todos",
        title: "Todos",
        },
        {
        id: "react",
        title: "React",
        },
        {
        id: "java",
        title: "Java",
        },
        {
        id: "python",
        title: "Python",
        },
    ];

    useEffect(() => {
        switch (selected) {
        case "todos":
            setData(todos);
            break;
        case "react":
            setData(reactjs);
            break;
        case "java":
            setData(java);
            break;
        case "python":
            setData(python);
            break;
        default:
            setData(todos);
        }
    }, [selected]);

  return (
    <div id='portfolio'>
        <h2>Projetos</h2>
        <h3>Aqui estão reunidos alguns de meus principais projetos. Nesse tempo, tenho produzido páginas web e componentes de software utilizando React, Spring Boot e Django.
             Para ver todos, acesse meu github.</h3>

        <ul>
            {list.map((item) => (
            <PortfolioList
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
            />
            ))}
        </ul>

        <div className="container">
            {data.map((d) => (
                <div className="box">
                    <div className="imagem">
                            <img src={d.img} alt={d.img_alt} />
                    </div>
                    <div className="content">
                        <h2>{d.title}</h2>
                        <h3>{d.legenda}</h3>
                        <div className="buttons">
                            <button className='btn-github'>
                                <a href={d.git} target="__blank" alt="botão github">github</a>
                            </button>
                            <button className='btn-view'>
                                <a href={d.view} target="__blank" alt="botão página online">online</a> 
                            </button>
                            
                        </div>
                   
                    </div>
                            
                </div>
            ))}
        </div>
    </div>
  );
}
