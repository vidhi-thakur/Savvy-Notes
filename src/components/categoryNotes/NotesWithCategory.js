import React from 'react'
import './NotesWithCategory.css'

function NotesWithCategory({ heading, icon, notes }) {
    if (!notes || notes?.length === 0) {
        return <div style={{ textAlign: "center" }}>Nothing to show</div>
    }

    return (
        <div>
            <header className='notesWithCategory-header'>
                <div>{heading}</div>
                {icon && <div className='cp notesWithCategory-editIcon'>{icon}</div>}
            </header>
            <div className='generalNotes-mainContent'>
                {notes}
            </div>
        </div>
    )
}

export { NotesWithCategory } 