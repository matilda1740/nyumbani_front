import React from 'react'
import { Link } from 'react-router-dom'

export default function TenantTransactions() {
    return (
        <section className="tenant_transactions_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {/* TITLE */}
                <div className="prop_title listing_title">
                    <h3>Transaction History</h3>
                        <Link to="/tenants/submit_request">
                        <button className="request_btn">Make Payment</button>
                        
                        </Link>
                </div>                  
                {/* TABLE */}
                <div className="transactions_div">

                </div>

            </div>             
        </section>
    )
}
