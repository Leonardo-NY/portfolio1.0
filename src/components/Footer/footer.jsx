import './footer.css'
function Footer(){
  return(
    <>
    <footer>
      <section className='contato'>
        <h2>Vamos trabalhar juntos</h2>
        <hr />
        <button>email</button>
        <button>324849838928383</button>
      </section>
      <section className='redes'>
        <p>SOCIAL</p> 
        <div className='social'>
          <a href="#">instagram</a>
          <a href="#">Linkedin</a>
        </div>
        <hr />
        <div className='direitos'>
          <p>&copy2004</p>
          <p>OBRIGADO</p>
        </div>
      </section>
    </footer>
    </>
  )
}
export default Footer