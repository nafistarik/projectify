import { useContext, useState } from "react";
import { TaskContext } from "../Context";
import MenuSVG from "./SVG components/MenuSVG";
import MessageSVG from "./SVG components/MessageSVG";
import NotificationSVG from "./SVG components/NotificationSVG";

export default function Header() {
  const { handleSearching } = useContext(TaskContext);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    setSearchTerm(term);
    handleSearching(term);
  };
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <button className="lg:hidden">
        <MenuSVG />
      </button>
      <div className="mx-4 flex-1">
        <input
          type="text"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
        />
      </div>
      <div className="flex items-center">
        <button className="relative mr-4">
          <NotificationSVG />
        </button>
        <button className="relative mr-4">
          <MessageSVG />
        </button>
      </div>
    </header>
  );
}
