function addNotesToStorage({
    heading,
    content,
    isPinned = false,
    label = null,
    isArchived = false,
    isDeleted = false
}) {
    const allNotes = JSON.parse(localStorage.getItem("allNotes"))

    if (localStorage.getItem("allNotes")) {
        localStorage.setItem('allNotes', JSON.stringify([...allNotes, { heading, content, isPinned, label, id: allNotes.length, isArchived, isDeleted }]))
    } else {
        localStorage.setItem('allNotes', JSON.stringify([{ heading, content, isPinned, label, id: 0, isArchived, isDeleted }]))
    }
}

export { addNotesToStorage }