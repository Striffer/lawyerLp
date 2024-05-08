import style from "./style.module.css"
import Main from "../../components/Main"
import WhatsBtn from "../../components/WhatsBtn"

export default function Home() {
    return (
        <div className={style.home}>
            <Main />
            <WhatsBtn />
        </div>
    )
}