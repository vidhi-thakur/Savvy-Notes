import { AddNotes, DashboardCard } from 'components/dashboard/dashboardExports'
import React from 'react'
import './Dashboard.css'

function Dashboard() {
    return (
        <div>
            <div className='dashboard-mainContent'>
                <AddNotes />
                <DashboardCard />
            </div>
        </div>
    )
}

export { Dashboard }