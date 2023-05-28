import { useState } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Note from "./components/Note";
import Entry from './components/Entry';

function App() {

  const [notes, setNotes] = useState([])

  function addNote() {
    return
  }

  return (
    <>
      <Navbar />
      <div className='notes-container'>
        {notes.length === 0 && <Entry />}
      </div>
    </>
  )
}

export default App
