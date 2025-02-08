import './App.css'
import Header from './components/Header/header'
import Main from './components/Main/main'
import Footer from './components/Footer/footer'
import Projetos from './components/Projetos/projetos'
function App() {
  window.onload = function(){
    window.scrollTo(0, 0)
  }
  return (
    <>
      <div id="anime-intro" outofocus>
      </div>
      <div id='anime-intro-p'></div>
      <section id="portfolio">
        <Header/>
        <Main/>
        <Projetos/>
        <Footer/>
      </section>
    </>
  )
}
export default App