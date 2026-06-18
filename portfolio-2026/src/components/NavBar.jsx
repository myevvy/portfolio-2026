import './NavBar.module.css'
function NavBar() {
    return (
        <>
            <header className="navbar">
                <div className="logo">
                    <a href="#top">dev<span>.</span>portfolio</a>
                </div>

                <nav aria-label="Navegação principal">
                    <ul>
                        <li><a href="#top">Início</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#servicos">Skills</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default NavBar;