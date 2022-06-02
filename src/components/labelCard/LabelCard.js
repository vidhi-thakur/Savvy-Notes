import React, { useState } from 'react';
import './LabelCard.css'
//icons 
import { BsPinAngleFill, BsPinAngle } from 'react-icons/bs';
import { CgTag, CgColorBucket } from 'react-icons/cg';
import { BiArchiveIn } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';

function LabelCard({ heading, content, labelName }) {
    const [isCardPinned, setIsCardPinned] = useState(false)
    return (
        <div className='labelCard'>
            <header className='labelCard-header'>
                <h3 className='labelCard-title'>
                    {heading}
                </h3>
                <div className='labelCard-pin' onClick={() => setIsCardPinned(!isCardPinned)}>
                    {isCardPinned ? <BsPinAngleFill /> : <BsPinAngle />}
                </div>
            </header>
            <main className='ellipsis'>
                {content}
            </main>
            <footer className='labelCard-bottomStrip'>
                <h6 className='labelCard-labelName'>{labelName}</h6>
                <div className='labelCard-bottomIcon'>
                    <CgColorBucket />
                    <CgTag />
                    <BiArchiveIn />
                    <FiTrash2 />
                </div>
            </footer>

        </div>
    )
}

export { LabelCard }