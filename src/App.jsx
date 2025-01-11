import React from "react";
import AddData from "./components/AddData";
import { FaGithubSquare } from "react-icons/fa";

const App = () => {
  return (
    <div className="w-screen h-screen bg-zinc-900 relative">
      <span className="text-zinc-700 font-semibold font-[outfit] text-[16vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        Notes.
      </span>
      <AddData />
      <div className="github absolute bottom-10 left-10 border-2 p-4 text-xl bg-zinc-200 rounded-full">
        <a
          href="https://github.com"
          className="text-zinc-600 hover:text-zinc-400 transition-colors"
        >
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
};

export default App;
