/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../Context";
import DeleteSVG from "./SVG components/DeleteSVG";
import EditSVG from "./SVG components/EditSVG";

export default function Task({ task, selectedColor }) {
  const { handleDeleteTask, handleEditTask } = useContext(TaskContext);
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4
          style={{ color: selectedColor }}
          className="mb-2 flex-1 font-semibold"
        >
          {task.title}
        </h4>

        <div className="flex gap-2">
          <div onClick={() => handleDeleteTask(task.id)}>
            <DeleteSVG />
          </div>
          <div onClick={() => handleEditTask(task)}>
            <EditSVG />
          </div>
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{task.description}</p>

      <p className="mt-6 text-xs text-zinc-400">{task.dueDate}</p>
    </div>
  );
}
