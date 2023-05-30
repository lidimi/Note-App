import { useState } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Note from "./components/Note";
import Entry from './components/Entry';
import AddNote from './components/AddNote';
import Emoji from './components/Emoji';

function App() {

  const [notes, setNotes] = useState([])
  const [isNoteOpen, setIsNoteOpen] = useState(false)

  function toggleNoteOpen() {
    setIsNoteOpen(prev => !prev)
  }

  function addToNotes(note) {
    setNotes(previousNotes => {
      return [...previousNotes, note]
    })
  }

  const allNotes = notes.map(note => {
    return <Note key={note.id} title={note.title} text={note.text} />
  })


  return (
    <>
      <Navbar handleClick={toggleNoteOpen} />
        {notes.length === 0 && !isNoteOpen && <Entry handleClick={toggleNoteOpen} />}
        {isNoteOpen && <AddNote closeNote={toggleNoteOpen} addToNotes={addToNotes} />}
        <div className="notes-todos-container">
          <div className="notes-container">
            <h2 className='notes-container__heading'>Your notes <Emoji label="notebook" symbol="📝" /> </h2>
            <div className='notes-container__grid'>
            {allNotes}
            </div>
          </div>
          <div className="todos-container">
            <h2 className='todos-container__heading'>Your todos <Emoji symbol="📌" /></h2>
          </div>
        </div>
    </>
  )
}

export default App;
