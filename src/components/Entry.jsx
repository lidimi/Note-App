
function Entry({ handleClick }) {

    return (
    <div className="entry-container">
        <h2 className="entry__text">You have no notes yet</h2>
        <button onClick={handleClick} className="entry__button">Create first Note</button>
    </div>
    )
}

export default Entry;