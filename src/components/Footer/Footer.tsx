import { FaXTwitter , FaInstagram , FaFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <canvas id="canvas" style={{ maxWidth:"100%", backgroundColor: "#050530" }} ></canvas>
            <div className="container p-4">
                <footer className="text-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none 1h-1">Organizador de Tareas</a>
                    <span>&copy; 2023 Daniel Galetto</span>
                    <ul className="nav col-md-6 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a href="https://www.facebook.com/?locale=es_LA" target="_blank" title="Facebook" className="text-body-secondary"><FaFacebook /></a></li>
                        <li className="ms-3"><a href="https://www.instagram.com/" target="_blank" title="Instagram" className="text-body-secondary"><FaInstagram /></a></li>
                        <li className="ms-3"><a href="https://twitter.com/?lang=es" target="_blank" className="text-body-secondary"><FaXTwitter /></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer
