import { getAllNotesData } from "helpers/helperExport";

function archiveNotes(id) {
    const notes = getAllNotesData()?.filter(note => note.id !== id)
    const noteToArchive = getAllNotesData()?.find(note => note.id === id);
    localStorage.setItem('allNotes', JSON.stringify([...notes, { ...noteToArchive, isArchived: true }]))
}

export { archiveNotes }