import React, { useState } from 'react';
import './DashboardCard.css';
//icons 
import { BsPinAngleFill, BsPinAngle } from 'react-icons/bs';
import { CgTag } from 'react-icons/cg';
import { BiArchiveIn } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';

function DashboardCard({ heading, content }) {
  const [isCardPinned, setIsCardPinned] = useState(false)
  return (
    <div className='dashboardCard'>
      <header className='dashboardCard-header'>
        <h3 className='dashboardCard-title'>
          {heading}
        </h3>
        <div className='dashboardCard-pin' onClick={() => setIsCardPinned(!isCardPinned)}>
          {isCardPinned ? <BsPinAngleFill /> : <BsPinAngle />}
        </div>
      </header>
      <main className='ellipsis'>
        {content}
      </main>
      <footer className='dashboardCard-bottomStrip'>
        <CgTag />
        <BiArchiveIn />
        <FiTrash2 />
      </footer>

    </div>
  )
}

export { DashboardCard }