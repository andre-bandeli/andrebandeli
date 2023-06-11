import React from 'react'
import { Link } from "react-router-dom";
import './style.scss'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from '../../components/Navbar/Navbar'
import Cards from '../../components/cards/Cards'
import Projects from '../../components/projects/Projects';
import About from '../../components/about/About';
import Certificados from '../../components/certificados/Certificados'
import Ferramentas from '../../components/ferramentas/Ferramentas'
import Contato from '../../components/contato/Contato'

import Footer from '../../components/footer/Footer'

export default function Home() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
        <header>
            <Navbar/>
        </header>

        <main>
          <section className='hero-section'>
              <div className="col-12">
                <h1>SOFTWARE DEVELOPER</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur sequi laboriosam velit 
                  consectetur fugit, minus facilis molestiae eveniet nulla dolorum, fuga modi quae soluta expedita laborum provident! Ipsam, itaque.</h3>

                <div className="content-hero">
                    <div className="col-md-6">
                        <h2>André Bandeli</h2>

                        <button className='primary-button'>
                            <Link to="/">CONTACT</Link>
                        </button>
                    </div>

                    <div className="col-md-6">
                        <div className="container-carousel">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                          <Carousel.Item>
                            <h3>
                              Java8
                            </h3>
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt in placeat a libero minus dolore nemo?</h4>
                          </Carousel.Item>
                          <Carousel.Item>
                          <h3>
                              Wordpress
                            </h3>
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt in placeat a libero minus dolore nemo?</h4>
                          </Carousel.Item>
                          <Carousel.Item>
                          <h3>
                              React
                            </h3>
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt in placeat a libero minus dolore nemo?</h4>
                          </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                </div>
                
              </div>
          </section>

          <section className='cards'>
            <Cards/>
          </section>

          <section className='projects'>
            <Projects/>
          </section>

          <section className='about'>
            <About/>
          </section>

          <section className='certificados'>
            <Certificados/>
          </section>

          <section className='stacks'>
            <Ferramentas/>
          </section>

          <section>
            <Contato/>
          </section>
        </main>

        <footer>
          <Footer/>
        </footer>
    </div>
  )
}
