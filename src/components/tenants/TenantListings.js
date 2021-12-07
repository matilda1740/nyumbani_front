import { Delete, Filter, Receipt, Search, Sort, Visibility } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function TenantListings() {
    return (
        <section className="listings_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {/* IF NO PROPERTIES */}
                {/* <div className="add_prop_title">
                <h3>There are no active listings</h3>
                <SentimentVeryDissatisfied />
                </div>
                <Link to="/prop_owners/properties" className="add_prop_div">
                    <Add className="add_prop_icon" />
                    <p className="add_prop_text">Add Listing</p>
                </Link>    */}

                {/* IF PROPERTIES */}
                    <div className="prop_title listing_title">
                        <h3>Listed Properties</h3>
                        {/* <p>There are X active listings</p> */}
                    </div>
                 {/* SEARCH SORT AND FILTER OPTIONS SECTION */}
                    <div className="sf_options_div">
                        <button className="each_sf_option"><Sort /><p>Sort</p></button>
                        <button className="each_sf_option"><Filter /><p>Filter</p></button>
                        <button className="each_sf_option"><Search /><p>Search</p></button>
                    </div>                   
                    <div className="prop_div">
                        <div className="each_prop_div">
                            <div className="image_cont">
                                <img src="/images/prop1.jpeg" alt="Property"/>
                            </div>
                            <div className="info_cont">
                                <div className="each_info tenant_list_each_info">
                                    <p>4 bedroom mansionette in Limuru</p>
                                    <Link to="/"><Visibility/></Link>
                                </div>                            
                            </div>
                        </div>

                        <div className="each_prop_div">
                            <div className="image_cont">
                                <img src="/images/prop1.jpeg" alt="Property"/>
                            </div>
                            <div className="info_cont">
                                <div className="each_info tenant_list_each_info">
                                    <p>4 bedroom mansionette in Limuru</p>
                                    <Link to="/"><Visibility/></Link>
                                </div>                            
                            </div>
                        </div>
                        <div className="each_prop_div">
                            <div className="image_cont">
                                <img src="/images/prop1.jpeg" alt="Property"/>
                            </div>
                            <div className="info_cont">
                                <div className="each_info tenant_list_each_info">
                                    <p>4 bedroom mansionette in Limuru</p>
                                    <Link to="/"><Visibility/></Link>
                                </div>                             
                            </div>
                        </div>                        
                    </div>                   

            </div>
        </section>
    )
}
