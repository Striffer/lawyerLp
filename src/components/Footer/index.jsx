import style from "./style.module.css"
import logo from "../../assets/logoo.png"
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <div className={style.img}>
                    <img src={logo} alt="Logo da empresa" />
                </div>
                
                <div className={style.contact}>
                    <ul>
                        <li>
                            <IoLocationSharp />
                            <span>R. Não Sei Qual, 000<br />Bairro Qualquer, Carangola - MG</span>
                        </li>

                        <li>
                            <FaWhatsapp />
                            <span>(32) 98765-4321</span>
                        </li>

                        <li>
                            <FaRegClock />
                            <span>Segunda à sexta, 08 às 18h</span>
                        </li>

                        <li>
                            <MdEmail />
                            <span>email@email.com.br</span>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}