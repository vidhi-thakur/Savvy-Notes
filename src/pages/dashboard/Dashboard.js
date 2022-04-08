import { Sidebar } from 'components/componentExport'
import { AddNotes, DashboardCard } from 'components/dashboard/dashboardExports'
import React from 'react'
import './Dashboard.css'

function Dashboard() {
    return (
        <div>
            <Sidebar>
                <div className='dashboard-mainContent'>
                    <AddNotes />
                    <DashboardCard />
                    <DashboardCard />
                    <DashboardCard />
                    <DashboardCard />
                </div>
            </Sidebar>
        </div>
    )
}

export { Dashboard }