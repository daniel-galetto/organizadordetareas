import { useEffect, useState } from 'react';
import CategoriasSelector from '../components/CategoriasSelector/CategoriasSelector';
import CarouselHome from '../components/CarouselHome/CarouselHome';
import { Task } from '../Types/Task';
import { TaskService } from '../Services/TaskService';
import TaskList from '../components/TaskList/TaskList';



const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]); 
  const [selectedCategory, setSelectedCategory] = useState<string>(''); 
  

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    };
    fetchTasks();
  }, []);


  useEffect(() => {
    if (selectedCategory) {
      const filtered = tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase());
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks); 
    }
  }, [selectedCategory, tasks]);

  return (
    <>
      <CarouselHome/>
      <CategoriasSelector onSelectedCategory={setSelectedCategory} />
      <TaskList tasks={filteredTasks.length > 0 ? filteredTasks : tasks} />
    </>
  );
};

export default Home;