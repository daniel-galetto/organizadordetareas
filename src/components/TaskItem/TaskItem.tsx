import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "react-bootstrap";
import { Task } from "../../Types/Task";
import { TaskService } from "../../Services/TaskService";

const TaskItem = () => {

    const { taskId } = useParams<{ taskId?: string }>();
    const [task, setTask] = useState<Task | null>(null);
    const [estado, setEstado] = useState<string>('');
    const [relatedTasks, setRelatedTasks] = useState<Task[]>([]);
    const navigate = useNavigate();

    useEffect(() => {

    const fetchTask = async () => {
        try {
            if (taskId && !isNaN(parseInt(taskId, 10))) {
                const taskData = await TaskService.getOneTask(parseInt(taskId, 10));
                setTask(taskData);
                const tasksInCategory = await TaskService.getTasksInCategory(taskData.estado);
                setRelatedTasks(tasksInCategory);
                } 
            } 
        catch (error) {
        }
    };
    fetchTask();
    }, [taskId]);

    const back =()=>{
        navigate('/');
    }

    const handleUpdateState = async () => {
        if (estado !== '') {
            try {
                const updatedTask = await TaskService.updateStateTask(parseInt(taskId!, 10), estado);
                setTask(updatedTask);
                toast.success('Estado de la tarea actualizado correctamente', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });
            } catch (error) {
                toast.error('Error al actualizar el estado de la tarea', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });
            }
        } else {
            toast.error('Selecciona un estado válido', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
    };

    const handleDeleteTask = async () => {
        try {
            if (taskId) {
                await TaskService.deleteTask(parseInt(taskId, 10));
                toast.success('Tarea eliminada correctamente', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });
                navigate('/');
            }
        } catch (error) {
            toast.error('Error al eliminar la tarea', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
    };

    return (
        <div className="container mt-5">
            {task && (
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={task.imagen} alt={task.titulo} className="card-img-top mb-5" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h1 className="display-5 fw-bolder"> Titulo: {task.titulo}</h1>
                        <h3>Detalles de la tarea con ID: {task.id}</h3>
                        <h5>Estado actual: {task.estado}</h5>
                        <p className="lead">Tiempo: {task.tiempo}</p>
                        <p className="lead">Responsable: {task.responsable}</p>
                        <p className="lead">Descripción: {task.descripcion}</p>
                        <select className="form-select mb-3" onChange={(e) => setEstado(e.target.value)} value={estado}>
                            <option value="">Seleccionar estado </option>
                            <option value="PORHACER">Por hacer </option>
                            <option value="ENPRODUCCION">En producción </option>
                            <option value="PORTESTEAR">Por testear </option>
                            <option value="COMPLETADA">Completada </option>
                        </select>
                        <button className="btn btn-danger" onClick={handleDeleteTask}> Eliminar tarea </button>
                        <button className="btn btn-primary ms-2" onClick={handleUpdateState}> Actualizar estado </button>
                        <button className="btn btn-secondary ms-2" onClick={back}> Volver</button>
                    </div>

                </div>
            )}
            <div className="row mt-5">
                {relatedTasks.map((relatedTask) => (
                    <div className="col-12 col-md-4 mb-4" key={relatedTask.id}>
                        <div className="card">
                            <img src={relatedTask.imagen} alt={relatedTask.titulo} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{relatedTask.titulo}</h5>
                                <p className="card-text"> Tiempo: {relatedTask.tiempo}</p>
                                <p className="card-text"> Responsable: {relatedTask.responsable}</p>
                                <Button variant="primary" onClick={() => navigate(`/detalle/${relatedTask.id}`)}>Ver más</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TaskItem
