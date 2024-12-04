import './header.css'
function Header(){
  function menu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
  }
  return(
    <>
    <header>
      <div>logo</div>
      <nav id='nav'>
        <ul>
          <div className='naso'>
            <p>NAVEGAÇÃO</p>
            <hr />
          </div>
          <li><a href="#">Home</a></li>
          <li><a href="#">sobre</a></li>
          <li><a href="#">Contato</a></li>
          <div className='naso'>
            <hr />
            <p>SOCIAL</p>
            <div className='social'>
              <a href="#">instagram</a>
              <a href="#">Linkedin</a>
            </div>
          </div>
        </ul>
        <div onClick={menu} className='areaBtn'>
          <button id='menu'></button>
        </div>
      </nav>
    </header>
    </>
  )
}
export default Header