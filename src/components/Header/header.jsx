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
          <li className='li-navigation-mobile'>
            <p>NAVEGAÇÃO</p>
            <hr />
            <li><a href="#">Home</a></li>
            <li><a href="#">sobre</a></li>
            <li><a href="#">Contato</a></li>
          </li>
          <li className='navigtion-mobile-social'>
            <hr />
            <p>SOCIAL</p>
            <div className='social'>
              <a href="#">instagram</a>
              <a href="#">Linkedin</a>
            </div>
          </li>
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