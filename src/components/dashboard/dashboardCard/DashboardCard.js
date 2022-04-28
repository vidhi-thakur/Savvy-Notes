import React, { useState } from 'react';
import './DashboardCard.css';
//icons 
import { MdOutlineLabel } from 'react-icons/md';
import { BsArchive, BsPinAngleFill, BsPinAngle } from 'react-icons/bs';
import { FiTrash2 } from 'react-icons/fi';

function DashboardCard() {
  const [isCardPinned, setIsCardPinned] = useState(false)
  return (
    <div className='dashboardCard'>
      <header className='dashboardCard-header'>
        <h3>
          Title of the note
        </h3>
        <div className='dashboardCard-pin' onClick={() => setIsCardPinned(!isCardPinned)}>
          {isCardPinned ? <BsPinAngleFill /> : <BsPinAngle />}
        </div>
      </header>
      <main className='ellipsis'>
        body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card
      </main>
      <footer className='dashboardCard-bottomStrip'>
        <MdOutlineLabel />
        <BsArchive />
        <FiTrash2 />
      </footer>

    </div>
  )
}

export { DashboardCard }