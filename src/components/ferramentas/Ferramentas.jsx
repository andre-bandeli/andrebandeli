import React from 'react'
import './ferramentas.scss'

import java from './icones/java.svg'
import python from './icones/python.svg'
import wordpress from './icones/wordpress.svg'
import docker from './icones/docker.svg'
import spring from './icones/spring.svg'
import mysql from './icones/mysql.svg'
import kafka from './icones/kafka.svg'
import react from './icones/react.svg'
import bootstrap from './icones/bootstrap.svg'

export default function Ferramentas() {
  return (
    <div id='stacks'>

        <h2>Stacks de Atuação</h2>

        <div className="container">
            <div className="box">
                <img src={java} alt="ícone do java" />
                <h2>Java</h2>
            </div>

            <div className="box">
                <img src={python} alt="ícone do python" />
                <h2>Python</h2>
            </div>

            <div className="box">
                <img src={wordpress} alt="ícone do wordpress" />
                <h2>Wordpress</h2>
            </div>

            <div className="box">
                <img src={docker} alt="ícone do docker" />
                <h2>Docker</h2>
            </div>

            <div className="box">
                <img src={spring} alt="ícone do spring" />
                <h2>SpringBoot</h2>
            </div>

            <div className="box">
                <img src={mysql} alt="ícone do mysql" />
                <h2>MySQL</h2>
            </div>

            <div className="box">
                <img src={kafka} alt="ícone do kafka" />
                <h2>Kafka</h2>
            </div>

            <div className="box">
                <img src={react} alt="ícone do react js" />
                <h2>React JS</h2>
            </div>

            <div className="box">
                <img src={bootstrap} alt="ícone do bootstrap" />
                <h2>Bootstrap</h2>
            </div>

        </div>
    </div>
  )
}
