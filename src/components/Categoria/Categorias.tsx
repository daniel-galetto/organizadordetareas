import { useEffect, useState } from "react"
import { Task } from "../../Types/Task"
import CategoriasSelector from "../CategoriasSelector/CategoriasSelector";
import { TaskService } from "../../Services/TaskService";
import TaskList from "../TaskList/TaskList";


const Categorias = () => {

  const [ tasks, setTasks ] = useState<Task[]>([]);
  const [ selectedCategory, setSelectedCategory ] = useState<string>("");

  useEffect(()=> {
    const fetchTasks = async () => {
      const taskData = await TaskService.getAllTasks();
      setTasks(taskData);
    };
    fetchTasks();
  },[]);

  const filteredTasks = selectedCategory 
  ? tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toLocaleUpperCase())
  : tasks;
  
  return (
    <div className="container mt-5">
      <CategoriasSelector onSelectedCategory={setSelectedCategory}/>
      <TaskList tasks={filteredTasks}/>
    </div>
  )
}

export default Categorias
