import React, { useState } from "react";
import {addNote} from '../store/noteThunks.js'
import {useDispatch} from 'react-redux'

const NoteModal = ({ isOpen, onClose }) => {
  const [note_title, setNoteTitle] = useState("");
  const [note_content, setNoteContent] = useState("");
  const dispatch = useDispatch()

  const onSave = () => {
    const formData = {
      note_title: note_title,
      note_content: note_content
    }

    dispatch(addNote(formData))
    onClose()
  }
  const isSaveDisabled = note_title.trim() === "" || note_content.trim() === "";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        {/* Modal Header */}
        <h2 className="text-lg font-semibold text-indigo-700 mb-4">New Note</h2>

        {/* Note Title Input */}
        <input
          type="text"
          placeholder="Note Title"
          value={note_title}
          onChange={(e) => setNoteTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md text-gray-600 focus:ring focus:ring-indigo-300"
        />

        {/* Note Content Input */}
        <textarea
          placeholder="Write your note here..."
          value={note_content}
          onChange={(e) => setNoteContent(e.target.value)}
          className="w-full text-slate-600 mt-3 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 h-32"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition"
          >
            Close
          </button>
          <button
            onClick={() => onSave(note_title, note_content)}
            disabled={isSaveDisabled}
            className={`px-4 py-2 rounded-md text-white transition ${
              isSaveDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;

