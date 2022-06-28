import React from 'react'
import { NotesCard, NotesWithCategory } from 'components/componentExport'
import { FiEdit } from 'react-icons/fi'

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

function Label() {

    const notes1 = dashboardCardContent.map((note, i) => <NotesCard labelName="Label 1" key={i} {...note} />)
    const notes2 = dashboardCardContent.map((note, i) => <NotesCard labelName="Label 2" key={i} {...note} />)
    return (
        <div className='generalNotes-mainContent mb-default'>
            <NotesWithCategory heading="Label 1" notes={notes1} />
            <NotesWithCategory heading="Label 2" notes={notes2} />
        </div>
    )
}

export { Label }