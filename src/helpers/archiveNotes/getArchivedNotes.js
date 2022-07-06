const { getAllNotesData } = require("helpers/helperExport");

function getArchivedNotes() {
    return getAllNotesData()?.filter(note => note.isArchived)
}

export { getArchivedNotes }