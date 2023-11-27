import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import DetalleTareaPage from "./Pages/DetalleTareaPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalle/:taskId" element={<DetalleTareaPage />} />

        </Routes>
    )
}

export default AppRoutes
