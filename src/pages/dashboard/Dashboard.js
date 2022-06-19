import React, { useState } from 'react'
import './Dashboard.css'
import { AddNotes, DashboardCard } from 'components/dashboard/dashboardExports'
import { getAllNotesData } from 'helpers/helperExport'

function Dashboard() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const updateTitle = input => {
        setTitle(input)
    }

    const updateDesc = input => {
        setDescription(input)
    }

    return (
        <div>
            <div className='generalNotes-mainContent dashboard-mainContent'>
                <AddNotes title={title} description={description} updateTitle={updateTitle} updateDesc={updateDesc} />
                {getAllNotesData()?.map((card, i) => <DashboardCard key={i} {...card} />)}
            </div>
        </div>
    )
}

export { Dashboard }