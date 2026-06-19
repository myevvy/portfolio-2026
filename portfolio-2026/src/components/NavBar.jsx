import { useState } from 'react'
import './NavBar.css'

function NavBar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <header className="navbar">
                <div className="logo">
                    <a href="#inicio">dev<span>.</span>portfolio</a>
                </div>

                <button
                    className="hamburger"
                    onClick={() => setOpen(true)}
                    aria-label="Abrir menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav aria-label="Navegação principal">
                    <ul>
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#ferramentas">Skills</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </header>

            <div className={`overlay ${open ? 'active' : ''}`} onClick={() => setOpen(false)} />

            <aside className={`sidebar ${open ? 'open' : ''}`}>
                <button
                    className="close-btn"
                    onClick={() => setOpen(false)}
                    aria-label="Fechar menu"
                >
                    &times;
                </button>
                <div className="sidebar-logo">
                    <a href="#inicio">dev<span>.</span>portfolio</a>
                </div>
                <nav aria-label="Navegação mobile">
                    <ul>
                        <li><a href="#inicio" onClick={() => setOpen(false)}>Início</a></li>
                        <li><a href="#sobre" onClick={() => setOpen(false)}>Sobre</a></li>
                        <li><a href="#ferramentas" onClick={() => setOpen(false)}>Skills</a></li>
                        <li><a href="#projetos" onClick={() => setOpen(false)}>Projetos</a></li>
                        <li><a href="#contato" onClick={() => setOpen(false)}>Contato</a></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default NavBar