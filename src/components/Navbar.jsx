
function Navbar() {
    return (
    <div className="navbar">
        <h1 className="title"><span className="title__notes">Notes</span> & <span className="title__list">Todo List</span></h1>
        <div className="navbar__buttons">
        <button className="navbar-button button-orange">Add Note</button>
        <button className="navbar-button">Add TODO</button>
        </div>
    </div>
    )
}

export default Navbar