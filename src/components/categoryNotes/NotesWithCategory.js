import React from 'react'
import './NotesWithCategory.css'

function NotesWithCategory({ heading, icon, notes }) {
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