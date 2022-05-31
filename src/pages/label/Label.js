import React from 'react'
import { LabelCard, NotesWithCategory } from 'components/componentExport'
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

    const notes1 = dashboardCardContent.map((note, i) => <LabelCard labelName="Label 1" key={i} {...note} />)
    const notes2 = dashboardCardContent.map((note, i) => <LabelCard labelName="Label 2" key={i} {...note} />)
    return (
        <div className='generalNotes-mainContent mb-default'>
            <NotesWithCategory heading="Label 1" icon={<FiEdit />} notes={notes1} />
            <NotesWithCategory heading="Label 2" icon={<FiEdit />} notes={notes2} />
        </div>
    )
}

export { Label }