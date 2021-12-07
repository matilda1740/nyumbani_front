import React from 'react'

import { AccountCircle, Analytics, People, Verified} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import '../tenants/tenants.css'
import '../property_owners/propOwners.css'


export default function adminSidebar() {
    return (
        <section className="sidebar_section">
            <Link to="/admin" className="sidebar_logo_div">
                <img src="/images/logo.png" alt="Logo" />
            </Link>
            <section className="sidebar_options">
                <Link to="/admin" className="sidebar_parts">
                    <Analytics className="sidebar_icons"/>
                    <p>Statistics</p>
                </Link>
                <Link to="/admin/verification" className="sidebar_parts">
                    <Verified className="sidebar_icons"/>
                    <p>Verification</p>
                </Link>
                <Link to="/admin/users" className="sidebar_parts">
                    <People className="sidebar_icons"/>
                    <p>Users</p>
                </Link>
                <Link to="/admin/profile" className="sidebar_parts">
                    <AccountCircle className="sidebar_icons"/>
                    <p>My Profile</p>
                </Link>
            </section>
        </section>
    )
}
