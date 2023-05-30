
function Entry({ handleClick }) {

    return (
    <div className="entry-container">
        <h2 className="entry-container__text">You have no notes yet</h2>
        <button onClick={handleClick} className="entry-container__button">Create first Note</button>
    </div>
    )
}

export default Entry;