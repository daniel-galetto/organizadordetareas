import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { JournalPlus, Person } from "react-bootstrap-icons";
import { TaskService } from "../../Services/TaskService";
import { Task } from "../../Types/Task";
import  './navBar.css'
import TaskForm from "../TaskForm/TaskForm";

const NavBar = () => {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const createTask = async (newTask: Task) => {
        try {
            const result = await TaskService.createTask(newTask);
            navigate(`/detalle/${result.id}`);
            toast.success('Tarea creada correctamente', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        } catch (error) {
            toast.error('Error al crear la tarea', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
    };

    return (
        <>
            <img className="banner" src="src/assets/images/banner.png" alt="Logo" />
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand >ORGANIZADOR DE TAREAS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate('/')}> Inicio </Nav.Link>
                            <NavDropdown title="Tareas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#categoria">Por hacer</NavDropdown.Item>
                                <NavDropdown.Item href="#categoria"> En producción </NavDropdown.Item>
                                <NavDropdown.Item href="#categoria">Por testear</NavDropdown.Item>
                                <NavDropdown.Item href="#categoria"> Completada </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link onClick={handleShowModal}>Agregar tarea</Nav.Link>
                        </Nav>
                        <Nav className="d-none d-md-flex ms-auto">
                            <Nav.Link onClick={handleShowModal}>
                                <JournalPlus />
                            </Nav.Link>
                            <Nav.Link href="#usuario">
                                <Person />
                            </Nav.Link>
                        </Nav>
                        <div className="d-md-none">
                            <ul className="navbar-nav me-auto-mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={handleShowModal}href="#ticket">Ticket</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#perfil">Perfil</a>
                                </li>
                            </ul>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <TaskForm showModal={showModal} handleClose={handleCloseModal} createTask={createTask} />
        </>
    )
}

export default NavBar
