
import './App.css';
import Contato from './components/contato/Contato';
import Ferramentas from './components/ferramentas/Ferramentas';
import Header from './components/header/Header';
import Navbar from './components/Nav/Navbar'
import Portfolio from './components/portfolio/Portfolio';
import Sobre from './components/sobre/Sobre';
import Certificados from './components/certificados/Certificados'
import Footer from './components/footer/Footer';
import Cards from './components/cards/Cards';

function App() {

  
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Cards/>
      <Portfolio/>
      <Sobre/>
      <Certificados/>
      <Ferramentas/>
      <Contato/>
      {/* <Footer/> */}

    </div>
  );
}

export default App;
