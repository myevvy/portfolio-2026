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
            <p><span>&#9679;</span> Disponível para oportunidades</p>
            <h1>Evelyn Aquiles</h1>
            <p>Desenvolvedora Front-End</p>
            <p>Transformo ideias em código limpo, interfaces funcionais e experiências digitais que fazem sentido.</p>
            <div className="btn-info">
              <a href="#projetos">Ver Projetos</a>
              <a href="#contato">Entrar em contato</a>
            </div>
          </div>

          <div className="image">
            <div className="code-card">
              <div className="dots">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green-dot"></span>
              </div>
              <p><span className="pink">nome:</span>    <span className="green">"Evelyn Aquiles"</span></p>
              <p><span className="pink">role:</span>    <span className="green">"Dev Front-End"</span></p>
              <p><span className="pink">stack:</span>    <span className="green">"React",  "JavaScript" <br /> "CSS",  "HTML"</span></p>
              <p><span className="pink">status:</span>    <span className="green">true</span></p>

            </div>
          </div>
        </div>

      </section>

      <section id="sobre">
        <div className="title-sbr">
          <p>QUEM SOU EU</p>
          <h2>Minha jornada até <span>aqui.</span></h2>
        </div>

        <div className="container-sbr">
          <div className="texto-sbr">
            <p>Olá! Sou desenvolvedora apaixonada por resolver
              problemas reais com tecnologia. Minha trajetória começou
              com curiosidade e vontade de entender como as coisas
              funcionam por baixo dos panos e desde então não parei
              mais. <br /> <br />
              Ao longo dos estudos, me dediquei ao
              <span> desenvolvimento front-end</span>, buscando construir soluções completas, eficientes e
              que façam sentido para quem usa. <br /> <br />
              Acredito que bom código é aquele que resolve, que é
              legível e que pode crescer. Estou em constante
              aprendizado e sempre em busca do próximo desafio.</p>
          </div>


          <div className="timeline">

            <div className="timeline-item">
              <div className="linha-col">
                <div className="ponto"></div>
                <div className="barra"></div>
              </div>
              <div className="conteudo">
                <span className="ano">2024 – 2025</span>
                <h3 className="titulo">Técnico em ADS</h3>
                <p className="nome">Análise e Desenvolvimento de Sistemas</p>
                <p className="desc">Curso técnico integrado ao ensino médio, onde dei os primeiros passos no desenvolvimento de software e construí a base que me trouxe até aqui.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="linha-col">
                <div className="ponto"></div>
                <div className="barra"></div>
              </div>
              <div className="conteudo">
                <span className="ano">2026 – 2028</span>
                <h3 className="titulo">Fatec Itaquera — DSM</h3>
                <p className="nome">Desenvolvimento de Software Multiplataforma</p>
                <p className="desc">Graduação em andamento com foco em desenvolvimento web e mobile. Explorando diferentes ferramentas e stacks a cada semestre.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="linha-col">
                <div className="ponto"></div>
              </div>
              <div className="conteudo">
                <span className="ano">2026 — hoje</span>
                <h3 className="titulo">Projetos acadêmicos & extensão</h3>
                <p className="desc">Participando de projetos da própria faculdade e de extensão para ganhar experiência prática, colaborar com times reais e expandir o portfólio.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default App
