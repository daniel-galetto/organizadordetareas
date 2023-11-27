import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./AppRoutes"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter as Router } from "react-router-dom"
import './app.css'

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <NavBar />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  )
}

export default App
