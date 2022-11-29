import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from "react-uuid"

function App() {
  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState('')

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: new Date(Date.now()).toLocaleDateString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit"
      }),
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
