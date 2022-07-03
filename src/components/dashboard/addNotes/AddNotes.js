import React from 'react'
import './AddNotes.css'
import { CgTag, CgColorBucket } from 'react-icons/cg';
import { addNotesToStorage } from 'helpers/addNotesToStorage/addNotesToStorage';

function AddNotes({ title, description, updateTitle, updateDesc}) {

    const updateNotes = () => {
        if (title !== "" && description !== "") {
            addNotesToStorage({
                heading: title,
                content: description,
                isPinned: false,
                label: null,
                isArchived: false,
                isDeleted: false
            });
            updateTitle("");
            updateDesc("");
        }
    }
    return (
        <div className='addNotes'>
            <header className='addNotes-header'>
                <h3 className='addNotes-title'>Add Notes</h3>
            </header>
            <form className='addNotes-form'>
                <div>
                    <input value={title} className='input addNotes-input' onChange={e => updateTitle(e.target.value)} type="text" placeholder='Add title' />
                </div>
                <div>
                    <textarea value={description} className="input addNotes-description" onChange={e => updateDesc(e.target.value)} id="textarea-input" name="textarea-input" rows="4" cols="50" placeholder="enter your message"></textarea>
                </div>
            </form>
            <section className="addNotes-bottomStrip">
                <button onClick={updateNotes} className='btn btn-primary-contained addNotes-btn'>create note</button>
                <div className='addNotes-bottomIcons'>
                    <CgTag />
                    <CgColorBucket />
                </div>
            </section>
        </div>
    )
}

export { AddNotes }