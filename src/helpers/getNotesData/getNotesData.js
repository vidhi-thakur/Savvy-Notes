function getAllNotesData() {
    if (localStorage.getItem("allNotes")) {
        return JSON.parse(localStorage.getItem("allNotes"))
    } else {
        console.error("OOPS! No notes available.")
        return null;
    }
}

function getSingleNote(id) {
    const allNotes = getAllNotesData()
    if (allNotes && id < allNotes.length) {
        return JSON.parse(localStorage.getItem("allNotes")).filter(note => note.id === id)
    } else {
        console.error("OOPS! Note with id, ", id, " not available.")
        return null;
    }
}

export { getAllNotesData, getSingleNote }