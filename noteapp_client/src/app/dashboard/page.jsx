"use client"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../../store/noteThunks.js"
import NoteCard from "../../components/NoteCard.jsx" 
import NoteFormModal from "../../components/NoteFormModal.jsx"
export default function NotesPage() {
  const [addNoteModal, setAddNoteModal] = useState(false);
  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]) 

  useEffect(() => {
    dispatch(fetchNotes())
      .unwrap()
      .then((res) => {
        console.log(res)
        setNotes(res)
      })
      .catch((error) => {
        
        console.log(error);
      });
  }, [addNoteModal]); 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          Welcome to Note Taker
        </h1>
    <NoteFormModal isOpen={addNoteModal} onClose={() => setAddNoteModal(false)} />
        <button
          onClick={() => setAddNoteModal(true)}
          className="btn btn-sm rounded-xl bg-green-500 hover:bg-lime-800 text-white font-bold p-6"
        >
          + Add Note
        </button>
        <div className="mt-4 text-gray-600 dark:text-gray-400 text-center p-4">
          {notes ? (
            notes.map((note, index) => (
              <NoteCard key={index} title={note.note_title} content={note.note_content} id={note._id}/>
            ))
          ) : (
            <p>No notes available</p>
          )}
        </div>
      </div>
    </div>
  );
}

