"use client";
import NoteFormModal from "../../components/NoteFormModal.jsx"
import React, {useState, useEffect } from "react";
import NoteCard from "../../components/NoteCard.jsx"
import {useDispatch} from  "react-redux"
import {fetchNotes} from "../../store/noteThunks.js"

export default function Page() {
  const [addNoteModal, setAddNoteModal] = useState(false)
  const [notes, setNotes] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNotes()).unwrap().then((res)=>{
      console.log(res)
      setNotes(res.data)}).catch((error)=>{console.log(error)})

  }, [addNoteModal])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          Welcome to Note Taker 
        </h1>
        <button onClick={()=>{setAddNoteModal(true)}} className='btn btn-sm rounded-xl bg-green-500  hover:bg-lime-800 font-white font-bold p-6' > + Add Note </button> 
        <div className="mt-4 text-gray-600 dark:text-gray-400 text-center">
    {Array.isArray(notes) && notes.length > 0 ? (
  notes.map((note, index) => (
    <NoteCard key={index} title={note.title} content={note.content} />
  ))
) : (
  <p>No notes available</p>
)}

          <NoteFormModal isOpen={addNoteModal} onClose={() => setAddNoteModal(false)} />
    </div>
    
        <div className="mt-6">
          
        </div>
      </div>
    </div>
  );
}

