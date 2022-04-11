import React from 'react'
import './AddNotes.css'
// icons
import { VscSymbolColor } from 'react-icons/vsc';
import { MdOutlineLabel } from 'react-icons/md';

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
                <div>
                    <textarea className="input addNotes-description" id="textarea-input" name="textarea-input" rows="4" cols="50" placeholder="enter your message"></textarea>
                </div>
            </form>
            <section className="addNotes-bottomStrip">
                <button className='btn btn-primary-contained addNotes-btn'>create note</button>
                <div className='addNotes-bottomIcons'>
                    <MdOutlineLabel />
                    <VscSymbolColor />
                </div>
            </section>
        </div>
    )
}

export { AddNotes }