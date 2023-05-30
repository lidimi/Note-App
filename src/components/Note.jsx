
function Note({ title, text, date }) {
    return (
    <section className="note" aria-labelledby="note-title">
        <p className="note__timestamp">{date}</p>
        <h3 id="note-titile" className="note__title">{title}</h3>
        <p className="note__text">{text}</p>
    </section>
    )
}

export default Note