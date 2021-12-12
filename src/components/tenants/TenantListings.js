import { Delete, Filter, HouseOutlined, Receipt, Search, SentimentVeryDissatisfied, SentimentVeryDissatisfiedOutlined, Sort, Visibility } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function TenantListings({allListings}) {
    return (
        <section className="listings_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {
                    allListings?.length ?
                    <>
                    {/* IF PROPERTIES */}
                        <div className="prop_title listing_title">
                            <h3>Listed Properties</h3>
                            <p>There are {allListings?.length} active listings</p>
                        </div>
                    {/* SEARCH SORT AND FILTER OPTIONS SECTION */}
                        <div className="sf_options_div">
                            <button className="each_sf_option"><Sort /><p>Sort</p></button>
                            <button className="each_sf_option"><Filter /><p>Filter</p></button>
                            <button className="each_sf_option"><Search /><p>Search</p></button>
                        </div>                   
                        <div className="prop_div">
                            {
                                allListings?.map( listing => (
                                    <div className="each_prop_div" key={listing.listingID}>
                                        <div className="image_cont">
                                            <img src="/images/prop1.jpeg" alt="Property"/>
                                        </div>
                                        <div className="info_cont">
                                            <div className="each_info tenant_list_each_info">
                                                <p>{listing.propertyDescription}</p>
                                                <Link to="/"><Visibility/></Link>
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
                        <h3>There are no active listings</h3>
                        <SentimentVeryDissatisfiedOutlined />
                        </div>
                        <Link to="/prop_owners/properties" className="add_prop_div">
                            <HouseOutlined className="add_prop_icon" />
                            <p className="add_prop_text">Add Listing</p>
                        </Link>                    
                    </>
                }                

            </div>
        </section>
    )
}
