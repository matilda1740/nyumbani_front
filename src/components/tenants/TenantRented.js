import { House, SentimentVeryDissatisfied, Visibility } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function TenantRented({getTargetProperty,rentedProp}) {
    return (
        <section className="tenants_rented_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {
                    rentedProp?.length ?
                    <>
                        <div className="prop_title listing_title">
                            <h3>Rented Properties</h3>
                            <p>You have {rentedProp?.length} rented properties</p>

                        </div>
                        <div className="tenant_prop_div">
                            {
                                rentedProp?.map( property => (
                                    <div className="each_tenant_prop_div" key={property.propertyID}>
                                        <div className="tenant_image_cont">
                                    { 
                                            property.thumbnailPhoto !== null ?
                                            <img src={`/images/${property.thumbnailPhoto.replace(/["]+/g, '')}`} alt="Property"/>
                                            :
                                            <img src="/images/prop1.jpeg" alt="Property"/>
                                    }                                        </div>
                                        <div className="tenant_info_cont">
                                            <div className="tenant_each_info">
                                                <h3>{property.propertyDescription}</h3>
                                                <div className="tenant_rented_prop_details">
                                                    <p>Rent Amount: <span>Ksh. {property.propertyRent}</span></p>
                                                    <p>Date Rented: <span>{property.dateRented}</span></p>
                                                </div>
                                                <div className="info_container">
                                                    <p>Rent Status: </p>
                                                    <div className="info_div isOccupied">Paid</div>
                                                    <Link onClick={getTargetProperty(property, property.propertyID )} to={`/tenants/properties/${property.propertyID}`}><Visibility/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>                    
                    </>

                    :
                    <>
                        <div className="add_prop_title">
                            <h3>You haven't rented any properties yet </h3>
                            <SentimentVeryDissatisfied />
                        </div>
                        <Link to="/tenants/listings" className="add_prop_div">
                            <House className="add_prop_icon" />
                            <p className="add_prop_text">View Listings</p>
                        </Link>                      
                    </>
                }
            </div>            
        </section>
    )
}
