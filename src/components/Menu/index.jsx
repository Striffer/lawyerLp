import style from "./style.module.css"

export default function Menu({ display, children }) {
    return (
        <div className={style.menu} style={{display: display}}>
            <nav>
                {children}
                
                <ul>
                    <li>Home</li>
                    <li>O Escritório</li>
                    <li>Áreas de Atuação</li>
                    <li>Agendar uma Reunião</li>
                </ul>
            </nav>
        </div>
    )
}