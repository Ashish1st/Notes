import React from "react";
import Card from "./components/Card";
import { MdOutlineDeleteOutline } from "react-icons/md";

const App = () => {
  return (
    <div className="w-screen h-screen bg-zinc-900 overflow-hidden relative py-3 px-3 flex">
      <span className="text-zinc-700 font-semibold text-[16vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        Notes.
      </span>

      <div className="left flex flex-col gap-y-2">
        <button className="addTaskButton w-64 h-24 border-[1px] border-zinc-500 rounded-lg text-zinc-400 flex justify-center items-center bg-zinc-800">
          Add Task.
        </button>
        <div className="delete w-full h-full flex justify-center items-center text-5xl border-zinc-500 border-[1px] bg-zinc-800 rounded-lg text-zinc-400">
          <MdOutlineDeleteOutline />
        </div>
      </div>
      <div className="right w-fit relative z-50">
        <div className="w-100% ml-[8px] flex flex-wrap gap-3 items-start">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
