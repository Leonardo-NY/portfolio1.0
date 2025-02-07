import './main.css'
function Main(){
  return(
    <>
    <main>
      <p id='text-back'>DEV<br />FULL <br />STACK 
      <span id='bolinha-1' className='bolinha-quadradas'></span>
      <span id='bolinha-2' className='bolinha-quadradas'></span>
      <span id='bolinha-3' className='bolinha-quadradas'></span>
      <span id='bolinha-4' className='bolinha-quadradas'></span>
      </p>
      <section id='teste'>
        <p>Olá<span>.</span> <br />Eu sou <br />Leonardo</p>
      </section>
      <section id='nome-carrocel'>
        <h1>
          <p >Pedro</p>
          <p >Leonardo</p>
          <div></div>
        </h1>
        <h1 className='dois'>
          <p >Pedro</p>
          <p >Leonardo</p>
          <div></div>
        </h1>
      </section>
      <h2 id='h2main'>Desenvolvedor / Front-end</h2>
    </main>
    </>
  )
}
export default Main