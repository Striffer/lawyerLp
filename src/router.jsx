import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"

const router = createBrowserRouter([
    {
        path: "/lawyerLp",
        element: <RootLayout />,
        children: [
            {index: true, element: <Home />},
            {path: "/lawyerLp/Escritorio", element: <About />},
            {path: "/lawyerLp/Atuacao", element: <Skills />}
        ]
    }
])

export default router