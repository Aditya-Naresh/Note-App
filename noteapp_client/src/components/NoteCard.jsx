"use client"
import React from "react";
import {useDispatch} from "react-redux"
import {deleteNote} from "../store/noteThunks.js"
const NoteCard = ({ title, content = "", id }) => {
  const disptach = useDispatch()


  const handleDelete = () => {
    console.log("Delete clicked for:", title);
    disptach(deleteNote(id))
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 shadow-md hover:shadow-lg rounded-xl p-4 m-2 transition-all relative">
      <h3 className="text-xl font-bold text-indigo-600 mb-2">{title}</h3>

      <p className="text-gray-700 text-sm">
        {content.length > 100 ? `${content.substring(0, 100)}...` : content}
      </p>

      <div className="flex justify-end gap-2 mt-3">
        <button
          className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-3 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;

