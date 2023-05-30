import { useState } from "react"
import Emoji from "./Emoji"


function Note({ title, text, date, id, handleDelete }) {

    const [areOptionsVisible, setAreOptionsVisible] = useState(false)

    function deleteNote() {
        handleDelete(id)
    }

    return (
    <section className="note" aria-labelledby="note-title" onMouseEnter={() => {setAreOptionsVisible(true)}} onMouseLeave={() => {setAreOptionsVisible(false)}}>
        <div className="note__details">
        <p className="note__timestamp">{date}</p>
            <div className="note-options" style={areOptionsVisible? {visibility: "visible"} : {visibility: "hidden"}}>
                <button className="note-options__button">
                    <Emoji label="mark as important" symbol="🚩" />
                </button> 
                <button className="note-options__button">
                    <Emoji label="edit note" symbol="✏️" />
                </button>
                <button className="note-options__button" onClick={deleteNote}>
                    <Emoji label="delete note" symbol="🗑️" />
                </button>
            </div>
        </div>
        <h3 id="note-title" className="note__title">{title}</h3>
        <p className="note__text">{text}</p>
    </section>
    )
}

export default Note