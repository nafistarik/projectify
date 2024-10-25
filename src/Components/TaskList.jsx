/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { TaskContext } from "../Context";
import SortSVG from "./SVG components/SortSVG";
import Task from "./Task";

export default function TaskList({ category, selectedColor }) {
  const { searchedTasks } = useContext(TaskContext);

  const [isAscending, setIsAscending] = useState(true);

  const filteredTask = searchedTasks.filter(
    (task) => task.category === category
  );

  const sortedTask = [...filteredTask].sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);

    return isAscending ? dateA - dateB : dateB - dateA;
  });

  const handleSortClick = () => {
    setIsAscending(!isAscending);
  };

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div style={{ background: selectedColor }} className="rounded-lg p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {category} ({filteredTask.length})
          </h3>
          <button
            onClick={handleSortClick}
            style={{
              transform: isAscending ? null : "rotate(180deg)",
            }}
          >
            <SortSVG />
          </button>
        </div>
        {sortedTask.length ? (
          <div>
            {sortedTask.map((task) => (
              <Task task={task} key={task.id} selectedColor={selectedColor} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-white font-semibold pt-2">Task List is empty!</p>
          </div>
        )}
      </div>
    </div>
  );
}
