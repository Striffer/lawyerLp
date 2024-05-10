import { Link } from "react-router-dom"
import style from "./style.module.css"
import useShowMenu from "../../hooks/useShowMenu"
import { IoIosMenu } from "react-icons/io";

export default function Menu() {
    const [ handleMenu, showMenu ] = useShowMenu()

    return (
        <>
            <div className={style.menuOpen} style={{top: showMenu}}>
                <nav>                        
                    <ul>
                        <Link to={"/lawyerLp"} onClick={handleMenu}><li>Home</li></Link>
                        <Link to={"/lawyerLp/Escritorio"} onClick={handleMenu}><li>O Escritório</li></Link>
                        <Link to={"/lawyerLp/Atuacao"} onClick={handleMenu}><li>Áreas de Atuação</li></Link>
                        <a href="https://wa.me/32987654321" target="_blank"><li>Agendar uma Reunião</li></a>
                    </ul>
                </nav>
            </div> 


            <div className={style.menuClose}>
                <IoIosMenu className={style.headerSvg} onClick={handleMenu}/>
            </div>                  
        </>
    )
}