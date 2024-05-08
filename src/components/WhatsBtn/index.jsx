import style from "./style.module.css"
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsBtn() {
    return (
        <>
            <a href="https://wa.me/32987654321" target="_blank" className={style.whatsBtn}>
                <FaWhatsapp />
            </a>
        </>
    )
}