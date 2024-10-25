import { useContext, useState } from "react";
import { TaskContext } from "../Context";

export default function ProjectModal() {
  const { handleTask, setIsModalOpen, taskToUpdate, setTaskToUpdate } =
    useContext(TaskContext);
  const [newTask, setNewTask] = useState(
    taskToUpdate
      ? taskToUpdate
      : {
          id: crypto.randomUUID(),
          title: "",
          description: "",
          category: "To-Do",
          dueDate: "",
        }
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !newTask.title ||
      !newTask.description ||
      !newTask.dueDate ||
      !newTask.category
    ) {
      alert("Please fill out all fields before adding any task.");
      return;
    }
    handleTask(newTask);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-black min-h-90 w-full bg-opacity-70 absolute top-0 left-0"></div>
      <div className="flex items-center justify-center p-4 text-white absolute md:w-2/3 w-11/12 content-center top-4">
        <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
          <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-green-400">
              {taskToUpdate ? "Update Task" : "Create Task"}
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="taskName"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Task Name
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  id="taskName"
                  name="taskName"
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask({ ...newTask, title: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  value={newTask.description}
                  onChange={(e) =>
                    setNewTask({ ...newTask, description: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="dueDate"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={newTask.dueDate}
                  onChange={(e) =>
                    setNewTask({ ...newTask, dueDate: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={newTask.category}
                  onChange={(e) =>
                    setNewTask({ ...newTask, category: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="To-Do">To-Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Revised">Revised</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setTaskToUpdate(null);
                  }}
                  type="button"
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {taskToUpdate ? "Update Task" : "Create Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
