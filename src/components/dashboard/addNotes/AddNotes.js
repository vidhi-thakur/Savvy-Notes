import React from 'react'
import './AddNotes.css'

function AddNotes() {
    return (
        <div className='addNotes'>
            <header className='addNotes-header'>
                <h3 className='addNotes-title'>Add Notes</h3>
            </header>
            <form className='addNotes-form'>
                <div>
                    <input className='input addNotes-input' type="text" placeholder='Add title' />
                </div>
            </form>
        </div>
    )
}

export { AddNotes }