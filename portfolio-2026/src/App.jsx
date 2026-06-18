import { useState } from 'react'
import HelloWorld from './components/NavBar.jsx'
import './App.css'
import NavBar from './components/NavBar.jsx'

function App() {
  

  return (
    <>
      <NavBar />
      <section id="inicio">
        <div className="container">
          <div className="info">
            <p>Disponível para oportunidades</p>
            <h1>Evelyn Aquiles</h1>
            <p>Desenvolvedora Front-End</p>
            <p>Transformo ideias em código limpo, interfaces funcionais e experiências digitais que fazem sentido.</p>
            <a href="#projetos">Ver Projetos</a>
            <a href="#contato">Entrar em contato</a>
          </div>

          <div className="image">

          </div>
        </div>

      </section>
    </>
  )
}

export default App
