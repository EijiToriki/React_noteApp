import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from "react-uuid"
import { useEffect } from 'react'

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [activeNote, setActiveNote] = useState('')

  useEffect(() => {
    // ローカルストレージにノートを保存する
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    // ローカルストレージにノートを保存する
    if(notes.length !== 0){
      setActiveNote(notes[0].id)
    }
  }, [])

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "",
      modDate: Date.now(),
    }
    setNotes([...notes, newNote])
  }

  const onDeleteNote = (id) => {
    const newNote = notes.filter((note) => {
      return note.id !== id
    })
    setNotes(newNote)
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    // 修正された新しいノートの配列を返す
    const updatedNotesArray = notes.map((note) => {
      if(note.id === updatedNote.id){
        return updatedNote
      }else{
        return note
      }
    })

    setNotes(updatedNotesArray)
  }

  return (
    <div className="App">
      <Sidebar 
        onAddNote={onAddNote} 
        onDeleteNote={onDeleteNote} 
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main 
        activeNote={getActiveNote()} 
        onUpdateNote={onUpdateNote}
      />
    </div>
  )
}

export default App
