import style from "./style.module.css"

export default function Section({ heigth, id, children }) {
    return (
        <>
            <section className={style.section} id={id} style={{height:heigth}}>
                {children}
            </section>
        </>
    )
}