import { getAllNotesData } from "helpers/helperExport";

function deleteNote(id) {
    const notes = getAllNotesData()?.filter(note => note.id !== id)
    const noteToDelete = getAllNotesData()?.find(note => note.id === id);
    localStorage.setItem('allNotes', JSON.stringify([...notes, { ...noteToDelete, isDeleted: true }]))
}

export { deleteNote } 