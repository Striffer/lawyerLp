import { Outlet } from "react-router-dom"
import Copy from "../../components/Copy"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import style from "./style.module.css"
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Menu from "../../components/Menu"
import { useState } from "react"

export default function RootLayout() {
    const [showMenu, setShowMenu] = useState("none")

    const handleMenu = () => {
        if (showMenu === "none") {
            setShowMenu("flex")
        } else {
            setShowMenu("none")
        }
    }

    return (
        <div className={style.rootLayout}>
            <Header id={style.header}>
                <IoIosMenu className={style.headerSvg} onClick={handleMenu}/>
            </Header>

            <Outlet />

            <Footer />

            <Copy />

            <Menu display={showMenu}>
                <IoMdClose className={style.menuSvg} onClick={handleMenu}/>
            </Menu>
        </div>
    )
}