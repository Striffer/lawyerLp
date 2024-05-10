import { useState } from "react"

export default function useShowMenu () {
    const [showMenu, setShowMenu] = useState("-10vh")

    const handleMenu = () => {
        if (showMenu === "-10vh") {
            setShowMenu("10vh")
        } else {
            setShowMenu("-10vh")
        }
    }

    return [handleMenu, showMenu]
}