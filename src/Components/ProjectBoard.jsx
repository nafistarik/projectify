import { useContext } from "react";
import { TaskContext } from "../Context";
import ProjectModal from "./ProjectModal";
import ButtonSVG from "./SVG components/ButtonSVG";
import TaskList from "./TaskList";

export default function ProjectBoard() {
  const { isModalOpen, setIsModalOpen } = useContext(TaskContext);
  return (
    <div className="mx-auto max-w-7xl p-6 relative">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
          >
            <ButtonSVG />
            Add
          </button>
        </div>
      </div>
      {isModalOpen && <ProjectModal />}

      <div className="-mx-2 mb-6 flex flex-wrap">
        <TaskList category={"To-Do"} selectedColor={"#4f46e5"} />
        <TaskList category={"In Progress"} selectedColor={"#eab308"} />
        <TaskList category={"Done"} selectedColor={"#14b8a6"} />
        <TaskList category={"Revised"} selectedColor={"#f43f5e"} />
      </div>
    </div>
  );
}
