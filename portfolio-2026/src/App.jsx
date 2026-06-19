import { useState } from 'react'
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

      <section id="ferramentas">
        <div className="container-ferramentas">
          <div className="title-ferramentas">
            <p>FERRAMENTAS & TECNOLOGIAS</p>
            <h2>Com o que <span>trabalho</span></h2>
          </div>

          <div className="ferramentas-grid">
            <div className="ferramenta-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="50" height="50" />
              <p>React</p>
            </div>

            <div className="ferramenta-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="50" height="50" />
              <p>JavaScript</p>
            </div>

            <div className="ferramenta-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="50" height="50" />
              <p>HTML</p>
            </div>

            <div className="ferramenta-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="50" height="50" />
              <p>CSS</p>
            </div>

            <div className="ferramenta-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" width="50" height="50" />
              <p>Git</p>
            </div>

            <div className="ferramenta-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="50" height="50" />
              <p>GitHub</p>
            </div>

            <div className="ferramenta-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" width="50" height="50" />
              <p>VS Code</p>
            </div>

            <div className="ferramenta-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" width="50" height="50" />
              <p>Figma</p>
            </div>

            <div className="ferramenta-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" width="50" height="50" />
              <p>Bootstrap</p>
            </div>

          </div>
        </div>
      </section>

      <section id="projetos">
        <div className="container-projetos">
          <div className="title-projetos">
            <p>O QUE CONSTRUÍ</p>
            <h2>Projetos em <span>destaque</span></h2>
          </div>

          <div className="projetos-grid">
            <div className="projeto-item">
              <img src='/retangulo.png' alt="Pindorama" />
              <h3>Pindorama</h3>
              <p>Nossa plataforma centraliza e dá visibilidade a ONGs estratégicas que operam na linha de frente da recuperação da fauna, no reflorestamento da flora nativa e na gestão de bacias hidrográficas. O objetivo central é transformar a conscientização passiva em engajamento ativo por meio da informação e do apoio direto a essas instituições.</p>
              <div className="btn-projeto">
                <a href="https://pindoramainstituicao.netlify.app/">Demo &rarr;</a>
                <a href="https://github.com/myevvy/Pindorama">GitHub &rarr;</a>
              </div>
            </div>

            <div className="projeto-item">
              <img src="https://via.placeholder.com/300x200" alt="Projeto 2" />
              <h3>Projeto 2</h3>
              <p>Descrição do projeto 2.</p>
              <div className="btn-projeto">
                <a href="#">Demo &rarr;</a>
                <a href="#">GitHub &rarr;</a>
              </div>
            </div>

            <div className="projeto-item">
              <img src="https://via.placeholder.com/300x200" alt="Projeto 3" />
              <h3>Projeto 3</h3>
              <p>Descrição do projeto 3.</p>
              <div className="btn-projeto">
                <a href="#">Demo &rarr;</a>
                <a href="#">GitHub &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato">
        <div className="container-contato">
          <div className="title-contato">
            <p>VAMOS CONVERSAR</p>
            <h2>Pronta para o próximo <br /> passo.</h2>
            <p>Se você tem um projeto interessante, uma vaga em aberto ou só quer trocar uma ideia <br />sobre tecnologia, minha caixa de entrada está aberta.</p>
            <a href="mailto:evelynaquiles22@gmail.com">&#128233; Enviar mensagem.</a>
          </div>

          <div className="redes-sociais">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Discord</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
