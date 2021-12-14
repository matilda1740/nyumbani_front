import React from 'react'
import { Link } from 'react-router-dom'
import { QuestionAnswer, AccountCircle, Receipt, Help, House, ViewStream, Apps } from '@mui/icons-material';
// import HelpIcon from '@mui/icons-material/Help';
export default function POSidebar() {
    return (
        <section className="sidebar_section">
            <Link to="/prop_owners" className="sidebar_logo_div">
                <img src="/images/logo.png" alt="Logo" />
            </Link>

            <section className="sidebar_options">
                <Link to="/prop_owners/properties" className="sidebar_parts">
                    <House className="sidebar_icons"/>
                    <p>My Properties</p>
                </Link>
                <Link to="/prop_owners/listings" className="sidebar_parts">
                    <ViewStream className="sidebar_icons"/>
                    <p>My Listings</p>
                </Link>
                <Link to="/prop_owners/transactions" className="sidebar_parts">
                    <Receipt className="sidebar_icons"/>
                    <p>Transactions</p>
                </Link>
                <Link to="/prop_owners/applications" className="sidebar_parts">
                    <Apps className="sidebar_icons"/>
                    <p>Applications</p>
                </Link>
                <Link to="/prop_owners/requests" className="sidebar_parts">
                    <QuestionAnswer className="sidebar_icons"/>
                    <p>Requests</p>
                </Link>
                {/* <Link to="/prop_owners/profile" className="sidebar_parts">
                    <AccountCircle className="sidebar_icons"/>
                    <p>My Profile</p>
                </Link> */}
            </section>
        </section>
    )
}
