import './projetos.css'
function Projetos(){
  let curve = document.querySelector('#curve')
  window.addEventListener('scroll', function(){
    let value = 1+window.scrollY/-600
    curve.style.transform = `scaleY(${value})`
  })
  return(
    <>
      <section id='projetos'>
        <section className='curve'>
          <span id='curve'></span>
        </section>
      </section>
    </>
  )
}
export default Projetos