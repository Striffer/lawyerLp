import style from "./style.module.css"

export default function Card({ id, backgroundColor, children }) {
    return (
        <div className={style.card} style={{backgroundColor: backgroundColor}} id={id}>
            {children}
        </div>
    )
}