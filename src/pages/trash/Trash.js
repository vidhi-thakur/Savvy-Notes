import { NotesCard, NotesWithCategory } from 'components/componentExport'
import { getDeletedNotes } from 'helpers/helperExport'
import React from 'react'
import "./Trash.css"

const dashboardCardContent = [
    {
        heading: "Title of the note",
        content: "body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card"
    },
    {
        heading: "Title of the note",
        content: "body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card"
    }
]

function Trash() {

    const notes = getDeletedNotes()?.map((note, i) => <NotesCard key={i} {...note} />)

    return (
        <div>
            <NotesWithCategory heading="Trash" notes={notes} />
        </div>
    )
}

export { Trash }