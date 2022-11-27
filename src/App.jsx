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

  return (
    <div className="App">
      <Sidebar 
        onAddNote={onAddNote} 
        onDeleteNote={onDeleteNote} 
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main />
    </div>
  )
}

export default App
