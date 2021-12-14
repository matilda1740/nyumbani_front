import { Add, Delete, Receipt, SentimentVeryDissatisfied } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Listings({getTargetProperty,allListings, userListings}) {

    const handleRemove = () => () => {

    }
    return (
        <section className="listings_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                <div className="listing_div">
                   {
                       userListings?.length ?
                       <>
                            <div className="prop_title listing_title">
                                <h3>Listed Properties</h3>
                                <p>You have {userListings?.length}  active listings</p>
                            </div>
                            {
                            userListings.map( listing => (
                                <div className="each_listing_div" key={listing.listingID}>                                   
                                    <div className="listing_left_container">
                                        <div className="image_cont">
                                    { 
                                            listing.thumbnailPhoto !== null ?
                                            <img src={`/images/${listing.thumbnailPhoto.replace(/["]+/g, '')}`} alt="Property"/>
                                            :
                                            <img src="/images/prop1.jpeg" alt="Property"/>
                                    }
                                        </div>
                                        <div className="info_cont">
                                            <div className="each_info">
                                                <p>Status: </p>
                                                {
                                                listing.availability === "0"
                                                ?
                                                <div className="info_div isOccupied">Occupied</div>                                : listing.availability === "1" &&
                                                <div className="info_div isVacant">Vacant</div>    
                                                }                               
                                            </div>
                                            <div className="each_info">
                                                <Link onClick={getTargetProperty(listing, listing.propertyID )} to={`/prop_owners/properties/${listing.propertyID}`} className="info_div details">View Details</Link>
                                            </div>                            
                                        </div>
                                    </div>
                                    <div className="listing_right_container">
                                        <h3 className="">{listing.propertyDescription}</h3>                                     
                                        <p>Listed on: 22nd September 2011</p>
                                        <p># of Interested Clients: 5</p>
                                        <Link to="/prop_owners/applications"><Receipt/>View Applications</Link>
                                        <p><Delete />Remove Listing</p>
                                    </div>
                                </div> 
                             ))
                            }
                       </>
                       :
                       <>
                            <div className="add_prop_title">
                            <h3>You don't have any active listings yet </h3>
                            <SentimentVeryDissatisfied />
                            </div>
                            <Link to="/prop_owners/properties" className="add_prop_div">
                                <Add className="add_prop_icon" />
                                <p className="add_prop_text">Add Listing</p>
                            </Link>  
                       </>
                    }
                </div>
            </div>
        </section>
    )
}
