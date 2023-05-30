
function Note({ title, text }) {
    return (
    <section className="note" aria-labelledby="note-title">
        <h3 id="note-titile" className="note__title">{title}</h3>
        <p className="note__text">{text}</p>
    </section>
    )
}

export default Note