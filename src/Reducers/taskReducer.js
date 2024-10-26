export const initialState = {
    taskList: [
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
    ],
    searchedTasks: [], // Set this equal to taskList initially
    taskToUpdate: null,
    isModalOpen: false,
  };
  
  // Assign searchedTasks the initial value of taskList for first render
  initialState.searchedTasks = [...initialState.taskList];
  
  export function taskReducer(tasks, action) {
    if (action.type === "handleSearching") {
      const searchTerm = action.searchedItem.toLowerCase();
      const filteredTasks = tasks.taskList.filter((task) =>
        task.title.toLowerCase().includes(searchTerm)
      );
      return {
        ...tasks,
        searchedTasks: searchTerm ? filteredTasks : tasks.taskList,
      };
    } else if (action.type === "handleTask") {
      const updatedTaskList = tasks.taskToUpdate
        ? tasks.taskList.map((t) => (t.id === tasks.taskToUpdate.id ? action.task : t))
        : [...tasks.taskList, action.task];
  
      return {
        ...tasks,
        taskList: updatedTaskList,
        searchedTasks: updatedTaskList,
        taskToUpdate: null,
        isModalOpen: false,
      };
    } else if (action.type === "handleDeleteTask") {
      const updatedTaskList = tasks.taskList.filter((task) => task.id !== action.taskId);
      return {
        ...tasks,
        taskList: updatedTaskList,
        searchedTasks: updatedTaskList,
      };
    } else if (action.type === "handleEditTask") {
      return {
        ...tasks,
        taskToUpdate: action.task,
        isModalOpen: true,
      };
    } else if (action.type === "setIsModalOpen") {
      return {
        ...tasks,
        isModalOpen: action.isOpen,
      };
    }
  
    return tasks;
  }
  