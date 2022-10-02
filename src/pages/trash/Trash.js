import { NotesCard, NotesWithCategory } from 'components/componentExport'
import { getDeletedNotes } from 'helpers/helperExport'
import React from 'react'
import "./Trash.css"

function Trash() {

    const notes = getDeletedNotes()?.map((note, i) => <NotesCard key={i} {...note} />)

    return (
        <div>
            <NotesWithCategory heading="Trash" notes={notes} />
        </div>
    )
}

export { Trash }