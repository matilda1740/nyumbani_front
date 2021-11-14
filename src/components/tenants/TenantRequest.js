import React from 'react'
import { Link } from 'react-router-dom'

export default function TenantRequest() {
    return (
        <section className="requests_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {/* TITLE */}
                    <div className="prop_title listing_title">
                        <h3>Maintainance History</h3>
                        {/* <p>5 Previous Requests</p> */}

                         <Link to="/tenants/submit_request">
                         <button className="request_btn">Make a new Request</button>
                         
                         </Link>
                    </div>                  
                {/* TABLE */}
                <div className="table_area">
                    <table className="applications_table">
                        <thead>
                            <tr>
                                <th>Ticket ID</th>
                                <th>Ticket Type</th>
                                <th>Date Raised</th>
                                <th>Date Handled</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>TK16579T</td>
                                    <td>Maintainance</td>
                                    <td>25th March 2000</td>
                                    <td>27th March 2000</td>
                                    <td><p className="details status_pending">Pending</p></td>
                                </tr>
                                <tr>
                                    <td>TK16579T</td>
                                    <td>Maintainance</td>
                                    <td>25th March 2000</td>
                                    <td>27th March 2000</td>
                                    <td><p className="details status_pending">Pending</p></td>
                                </tr>
                                <tr>
                                    <td>TK16579T</td>
                                    <td>Maintainance</td>
                                    <td>25th March 2000</td>
                                    <td>27th March 2000</td>
                                    <td><p className="details status_closed">Closed</p></td>
                                </tr>
                                <tr>
                                    <td>TK16579T</td>
                                    <td>Maintainance</td>
                                    <td>25th March 2000</td>
                                    <td>27th March 2000</td>
                                    <td><p className="details status_closed">Closed</p></td>
                                </tr>                                                                
                        </tbody>    
                    </table>  
                </div>

            </div>             
        </section>
    )
}
