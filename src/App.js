
import './App.css';
import Contato from './components/contato/Contato';
import Ferramentas from './components/ferramentas/Ferramentas';
import Header from './components/header/Header';
import Navbar from './components/Nav/Navbar'
import Portfolio from './components/portfolio/Portfolio';
import Produtos from './components/produtos/Produtos';
import Sobre from './components/sobre/Sobre';
import Certificados from './components/certificados/Certificados'
import Footer from './components/footer/Footer';

function App() {

  
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      {/* <Produtos/>
      <Portfolio/>
      <Sobre/>
      <Certificados/>
      <Ferramentas/>
      <Contato/>
      <Footer/> */}

    </div>
  );
}

export default App;
