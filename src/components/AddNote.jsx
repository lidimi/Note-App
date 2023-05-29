import { useState } from "react";


function AddNote({ closeNote, addToNotes }) {

    const [note, setNote] = useState({
        title: '',
        text: ''
    });

    function handleNoteChange(e) {
        setNote(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    function addNoteToNotes() {
        addToNotes(note)
        closeNote()
    }

    return (
    <div className="add-note">
        <input placeholder="Your title..." id="title" className="add-note__input" name="title" value={note.title} onChange={handleNoteChange}/>
        <textarea placeholder="Your note..." rows="7" cols="50" className="add-note__textarea" name="text" value={note.text} onChange={handleNoteChange} />
        <button onClick={addNoteToNotes} className="add-note__button">Add</button>
    </div>
    )
}

export default AddNote;