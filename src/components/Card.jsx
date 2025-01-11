import React from "react";
import { MdDelete } from "react-icons/md";

const Card = ({ title, description, date, onDelete }) => {
  return (
    <div className="relative z-50 w-[20vw] min-w-[250px] rounded-2xl bg-zinc-900 border-[1px] border-zinc-500 font-[outfit] text-zinc-200 overflow-hidden">
      <div className="flex flex-col p-4 gap-3">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex gap-2">
            <button
              onClick={onDelete}
              className="text-lg hover:text-red-400 transition-colors"
            >
              <MdDelete />
            </button>
          </div>
        </div>

        <div className="description">
          <p className="text-sm font-light text-zinc-300">{description}</p>
        </div>

        <div className="text-xs text-zinc-400">{date}</div>
      </div>
    </div>
  );
};

export default Card;
