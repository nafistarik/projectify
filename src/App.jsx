import { useState } from "react";
import Header from "./Components/Header";
import ProjectBoard from "./Components/ProjectBoard";
import Sidebar from "./Components/Sidebar";
import { TaskContext } from "./Context";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialTaskList = [
    {
      id: 1,
      title: "Learn With Sumit",
      description: "This course is worth it! ♥",
      category: "In Progress",
      dueDate: "2024-11-15",
    },
    {
      id: 2,
      title: "Search Issues Advice",
      description:
        "Initialised with tasklist array , but for search have a new array searchedTasks which is mapped for all rendering, handlers are fixed for both. Is it a good approach Or I can use one array? give advice by my code please which I cant show in discord!",
      category: "Revised",
      dueDate: "2024-10-28",
    },
    {
      id: 3,
      title: "Sorting Issues Advice",
      description:
        "I am comfortable with basic sorting, but I need to implement sorting by date. I have used chatgpt to help and come up with new Date method. Is this the best approach?",
      category: "In Progress",
      dueDate: "2024-11-12",
    },
  ];

  const [taskList, setTaskList] = useState(initialTaskList);
  const [searchedTasks, setSearchedTasks] = useState(taskList);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleSearching = (searchedItem) => {
    if (searchedItem.length > 0) {
      const searchTerm = searchedItem.toLowerCase();
      const filteredTasks = taskList.filter((task) =>
        task.title.toLowerCase().includes(searchTerm)
      );
      setSearchedTasks([...filteredTasks]);
    } else {
      setSearchedTasks([...taskList]);
    }
  };

  const handleTask = (task) => {
    if (taskToUpdate) {
      const updatedTasks = taskList.map((t) =>
        t.id === taskToUpdate.id ? task : t
      );
      setTaskList(updatedTasks);
      setSearchedTasks(updatedTasks);
      setTaskToUpdate(null);
    } else {
      setTaskList([...taskList, task]);
      setSearchedTasks([...searchedTasks, task]);
    }
    setIsModalOpen(false);
  };

  const handleDeleteTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
    setSearchedTasks(taskList.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="flex h-screen">
        <TaskContext.Provider
          value={{
            handleSearching,
            searchedTasks,
            isModalOpen,
            setIsModalOpen,
            taskToUpdate,
            setTaskToUpdate,
            handleTask,
            handleDeleteTask,
            handleEditTask,
          }}
        >
          <Sidebar />
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <Header />
            <ProjectBoard />
          </main>
        </TaskContext.Provider>
      </div>
    </div>
  );
}
