import { NotesCard, NotesWithCategory } from 'components/componentExport'
import React from 'react'
import "./Archive.css"

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

function Archive() {

    const notes = dashboardCardContent.map((note, i) => <NotesCard key={i} {...note} />)

    return (
        <div>
            <NotesWithCategory heading="Archive" notes={notes} />
        </div>
    )
}

export { Archive }