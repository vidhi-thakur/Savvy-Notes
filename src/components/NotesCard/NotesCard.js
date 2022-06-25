import React, { useState } from 'react';
import './NotesCard.css'
//icons 
import { BsPinAngleFill, BsPinAngle } from 'react-icons/bs';
import { CgTag, CgColorBucket } from 'react-icons/cg';
import { BiArchiveIn } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';

function NotesCard({ heading, content, labelName }) {
    const [isCardPinned, setIsCardPinned] = useState(false)
    return (
        <div className='notesCard'>
            <header className='notesCard-header'>
                <h3 className='notesCard-title'>
                    {heading}
                </h3>
                <div className='notesCard-pin' onClick={() => setIsCardPinned(!isCardPinned)}>
                    {isCardPinned ? <BsPinAngleFill /> : <BsPinAngle />}
                </div>
            </header>
            <main className='ellipsis'>
                {content}
            </main>
            <footer className='notesCard-bottomStrip'>
                {labelName ? <h6 className='notesCard-labelName'>{labelName}</h6>: <div></div>}
                <div className='notesCard-bottomIcon'>
                    <CgColorBucket />
                    <CgTag />
                    <BiArchiveIn />
                    <FiTrash2 />
                </div>
            </footer>

        </div>
    )
}

export { NotesCard }