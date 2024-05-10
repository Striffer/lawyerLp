import { Outlet } from "react-router-dom"
import Copy from "../../components/Copy"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import style from "./style.module.css"


import Menu from "../../components/Menu"

export default function RootLayout() {
    return (
        <div className={style.rootLayout}>
            <Header />

            <Menu />

            <Outlet />

            <Footer />

            <Copy />
        </div>
    )
}