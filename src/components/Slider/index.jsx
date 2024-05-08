import style from "./style.module.css"

export default function Slider({ children }) {
    return (
        <div className={style.slider}>
            {children}
        </div>
    )
}