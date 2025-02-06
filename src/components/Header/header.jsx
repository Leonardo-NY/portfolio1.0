import './header.css'
function Header(){
  function menu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
  }
  function ancoraMenu(){
    const nav = document.getElementById('nav')
    nav.classList.remove('active')
  }
  return(
    <>
    <header>
      <div id='logo'>logo</div>
      <nav id='nav'>
        <ul>
          <li className='li-navigation-mobile'>
            <p>NAVEGAÇÃO</p>
            <hr />
            <li><a onClick={ancoraMenu} href="#">Home</a></li>
            <li><a onClick={ancoraMenu} href="#">sobre</a></li>
            <li><a onClick={ancoraMenu} href="#contato">Contato</a></li>
          </li>
          <li className='navigtion-mobile-social'>
            <hr />
            <p>SOCIAL</p>
            <div className='social'>
              <a onClick={ancoraMenu} href="#">instagram</a>
              <a onClick={ancoraMenu} href="#">Linkedin</a>
            </div>
          </li>
        </ul>
        <div onClick={menu} id='areaBtn'  className='btnmove' >
          <button id='menu'></button>
        </div>
      </nav>
    </header>
    </>
  )
}
export default Header