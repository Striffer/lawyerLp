import style from "./style.module.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

export default function Header({ children }) {
    return (
        <>
            <header className={style.header}>
                <div className={style.img}>
                    <Link to="/lawyerLp"><img src={logo} alt="Logo da empresa Moreira & Meireles" /></Link>
                </div>

                <nav className={style.webMenu}>
                    <ul>
                        <Link to="/lawyerLp"><li>HOME</li></Link>
                        <Link to="/lawyerLp/Escritorio"><li>O ESCRITÓRIO</li></Link>
                        <Link to="/lawyerLp/Atuacao"><li>ÁREAS DE ATUAÇÃO</li></Link>
                        <a href="https://wa.me/32987654321" target="_blank"><li>AGENDAR UMA REUNIÃO</li></a>
                    </ul>
                </nav>

                {children}
            </header>
        </>
    )
}