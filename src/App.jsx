import { useReducer } from "react";
import Header from "./Components/Header";
import ProjectBoard from "./Components/ProjectBoard";
import Sidebar from "./Components/Sidebar";
import { TaskContext } from "./Context";
import { initialState, taskReducer } from "./Reducers/taskReducer";

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  const handleSearching = (searchedItem) => {
    dispatch({ type: "handleSearching", searchedItem });
  };

  const handleTask = (task) => {
    dispatch({ type: "handleTask", task });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: "handleDeleteTask", taskId });
  };

  const handleEditTask = (task) => {
    dispatch({ type: "handleEditTask", task });
  };

  const setIsModalOpen = (isOpen) => {
    dispatch({ type: "setIsModalOpen", isOpen });
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="flex h-screen">
        <TaskContext.Provider
          value={{
            handleSearching,
            searchedTasks: tasks.searchedTasks,
            isModalOpen: tasks.isModalOpen,
            setIsModalOpen,
            taskToUpdate: tasks.taskToUpdate,
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
