import React from 'react'
import "./Main.css"

export default function Main({activeNote, onUpdateNote}) {
  const onEditNote = (key, value) => {
    console.log(value);
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now()
    })
  }


  if (!activeNote) {
    return <div className='no-active-note'>ノートが選択されていません</div>
  }

  return (
    <div className='app-main'>
      <div className="app-main-not-edit">
        <input 
          type='text' 
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)} />
        <textarea 
          id="" 
          placeholder='ノート内容を記入' 
          value={activeNote.content} 
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className='preview-title'>{activeNote.title}</h1>
        <div className='markdown-preview'>{activeNote.content}</div>
      </div>
    </div>
  )
}
