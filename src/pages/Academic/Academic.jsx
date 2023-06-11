import React from 'react'
import './style.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function Academic() {
  return (
    <div>

        <header>
            <Navbar/>
        </header>

        <main>
            <section className='academic'>
                <div className="container">
                    <div className="title">
                        <h2>Category</h2>
                        <h1>Academic</h1>
                    </div>

                    <div className="destaque">
                        <div className="col-6">
                            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h2>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem eos, facilis non eveniet fuga harum
                                 eligendi cum libero ad! Libero commodi quam repellat perferendis distinctio, laboriosam nulla tempore. Iure.</h3>
                                 <div className="stacks-list">
                                    <ul>
                                        <li>
                                            Spring Boot
                                        </li>
                                        <li>
                                            Spring Boot
                                        </li>
                                        <li>
                                            Spring Boot
                                        </li>
                                        <li>
                                            Spring Boot
                                        </li>
                                        <li>
                                            Spring Boot
                                        </li>
                                    </ul>
                                 </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </main>

        <footer>
            <Footer/>
        </footer>
    </div>
  )
}
