import React from 'react';
import './DashboardCard.css';
//icons 
import { VscPinned } from 'react-icons/vsc'

function DashboardCard() {
  return (
    <div className='dashboardCard'>
      <header className='dashboardCard-header'>
        <h3>
          Title of the note
        </h3>
        <VscPinned />
      </header>
      <main className='ellipsis'>
        body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card body of the card
      </main>

    </div>
  )
}

export { DashboardCard }