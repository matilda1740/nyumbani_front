import { Add, SentimentVeryDissatisfied, Visibility } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function TenantRented() {
    return (
        <section className="tenants_rented_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {/* IF NO PROPERTIES */}
                {/* <div className="add_prop_title">
                    <h3>You haven't rented any properties yet </h3>
                    <SentimentVeryDissatisfied />
                </div>
                <Link to="/tenants/listings" className="add_prop_div">
                    <Add className="add_prop_icon" />
                    <p className="add_prop_text">View Listings</p>
                </Link>    */}

                {/* IF PROPERTIES */}
                <div className="prop_title">
                    <h3>Your Rented Property</h3>
                    </div>
                    <div className="tenant_prop_div">
                        <div className="each_tenant_prop_div">
                            <div className="tenant_image_cont">
                                <img src="/images/prop1.jpeg" alt="Property"/>
                            </div>
                            <div className="tenant_info_cont">
                                <div className="tenant_each_info">
                                    <h3>4 bedroom mansionette in Limuru</h3>
                                    <div className="tenant_rented_prop_details">
                                        <p>Rent Amount: <span>Ksh. 70,000</span></p>
                                        <p>Monthly Due Date: <span>12th December 2056</span></p>
                                    </div>
                                    <div className="info_container">
                                        <p>Rent Status: </p>
                                        <div className="info_div isOccupied">Paid</div>
                                        <Link to="/"><Visibility/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>            
        </section>
    )
}
