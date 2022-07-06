import { getAllNotesData } from "helpers/helperExport"

function getDeletedNotes() {
    return getAllNotesData()?.filter(note => note?.isDeleted)
}

export { getDeletedNotes }