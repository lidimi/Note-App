import { useState } from "react";
import { nanoid } from "nanoid";


function AddNote({ closeNote, addToNotes }) {

    const [note, setNote] = useState({
        id: nanoid(),
        title: '',
        text: '',
        date: ''
    });

    function timeStamp() {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const hours = date.getHours();
        const minutes = date.getMinutes();


        return `${day}/${month} ${hours}:${minutes}`
    }

    function handleNoteChange(e) {
        setNote(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
                date: timeStamp()
            }
        })
    }

    console.log(note)

    function addNoteToNotes(e) {
        e.preventDefault()
        addToNotes(note)
        closeNote()
    }

    return (
    <form className="add-note" onSubmit={addNoteToNotes}>
        <input required placeholder="Your title..." id="title" className="add-note__input" name="title" value={note.title} onChange={handleNoteChange}/>
        <textarea required placeholder="Your note..." rows="7" cols="50" className="add-note__textarea" name="text" value={note.text} onChange={handleNoteChange} />
        <button className="add-note__button">Add</button>
    </form>
    )
}

export default AddNote;