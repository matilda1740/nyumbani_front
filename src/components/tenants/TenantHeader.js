import { Email, Notifications, Person, Settings } from '@mui/icons-material'
import React from 'react'

export default function TenantHeader() {
    return (
        <section className="tenant_header_section">
            <div className="left_header">
                 <div className="profile_div">
                 <Person />
                 <p>Harvey Specter</p>
                </div>
           
                <Notifications />
                <Email />
                <Settings />
            </div>            
        </section>
    )
}
