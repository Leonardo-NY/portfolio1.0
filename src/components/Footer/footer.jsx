import './footer.css'
function Footer(){
  return(
    <>
    <footer id="contato">
      <section className='contato'>
        <h2>Vamos trabalhar juntos</h2>
        <hr id='bolinha'/>
        <button>email</button>
        <button>324849838928383</button>
      </section>
      <section className='redes-sociais'>
        <p>SOCIAL</p> 
        <div className='social'>
          <a href="#">instagram</a>
          <a href="#">Linkedin</a>
        </div>
        <hr />
        <div className='especification'>
          <p>VERÇÃO</p>
          <p>AGRADECIMENTOS</p>
        </div>
        <div className='direitos'>
          <p>&copy2004 Edition</p>
          <p>OBRIGADO</p>
        </div>
      </section>
    </footer>
    </>
  )
}
export default Footer