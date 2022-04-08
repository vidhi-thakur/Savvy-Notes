import React from 'react'
import './AddNotes.css'

// icons 
import { MdOutlineColorLens, MdOutlineLabel } from 'react-icons/md';
import { BsArchive } from 'react-icons/bs';
import { FiTrash2 } from 'react-icons/fi';

function AddNotes() {
    return (
        <div className='addNotes'>
            <header className='addNotes-header'>
                <h3 className='addNotes-title'>Add Notes</h3>
            </header>
            <form className='addNotes-form'>
                <input class="input addNotes-input" id="input" type="text" placeholder="Add title" />
                <textarea class="input addNotes-desc" id="textarea-input" name="textarea-input" rows="4" cols="50" placeholder="Enter notes"></textarea>
            </form >
            <section className='addNotes-bottomStrip'>
                <button className='btn btn-primary-contained btn-home addNotes-btn'>add note</button>
                <div className='addNotes-iconBox'>
                    <MdOutlineColorLens className='addNotes-icon' />
                    <MdOutlineLabel className='addNotes-icon' />
                    <BsArchive className='addNotes-icon' />
                    <FiTrash2 className='addNotes-icon' />
                </div>
            </section>
        </div >
    )
}

export { AddNotes }