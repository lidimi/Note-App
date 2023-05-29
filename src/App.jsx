import { useState } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Note from "./components/Note";
import Entry from './components/Entry';
import AddNote from './components/AddNote';

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

  console.log(notes)


  return (
    <>
      <Navbar handleClick={toggleNoteOpen} />
      <div className='notes-container'>
        {notes.length === 0 && !isNoteOpen && <Entry handleClick={toggleNoteOpen} />}
        {isNoteOpen && <AddNote closeNote={toggleNoteOpen} addToNotes={addToNotes} />}
      </div>
    </>
  )
}

export default App;
