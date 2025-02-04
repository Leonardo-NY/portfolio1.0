import './App.css'
import Header from './components/Header/header'
import Main from './components/Main/main'
import Footer from './components/Footer/footer'
import Projetos from './components/Projetos/projetos'
function App() {
  // let cards = document.querySelectorAll('.btnmove').forEach
  // (card => {
  //   card.addEventListener('mousemove', (e)=>{
  //     let x = e.offsetX
  //     let y = e.offsetY
  //     let cardWidth = card.clientWidth
  //     let cardHeight = card.clientHeight
  //     let transX = (x - cardHeight/2) 
  //     let transY = (y - cardHeight/2)
  //     card.style.transform = `translateX(${transX}px)
  //     traslateY(${transY}px)`

  //   })
  //   card.addEventListener('mouseout', (e) => {
  //     card.style.transform = ''
  //   })
  // })
  return (
    <>
      <Header/>
      <Main/>
      <Projetos/>
      <Footer/>
    </>
  )
}

export default App
