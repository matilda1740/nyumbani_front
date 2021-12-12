import { Filter, Search, SentimentVeryDissatisfied, Sort } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Applications({applications}) {
    return (
        <section class="applications_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                    {
                        applications?.length ?
                        <>
                            <div className="prop_title listing_title">
                                <h3>Applications</h3>
                                <p>You have {applications?.length} Applications</p>
                            </div>                  

                            <div className="sf_options_div">
                                <button className="each_sf_option"><Sort /><p>Sort</p></button>
                                <button className="each_sf_option"><Filter /><p>Filter</p></button>
                                <button className="each_sf_option"><Search /><p>Search</p></button>
                            </div>

                            <div className="transactions_div">
                                <div className="trans_row row_header">
                                    <div className="trans_row_col">
                                        <p>Client Name</p>
                                    </div>
                                    <div className="trans_row_col">
                                        <p>Email</p>
                                    </div>  
                                    <div className="trans_row_col">
                                        <p>Interested In</p>
                                    </div>
                                    <div className="trans_row_col">
                                        <p>Application Date</p>
                                    </div>   
                                    <div className="trans_row_col">
                                        <p>Details</p>
                                    </div>                               
                                </div>
                                {
                                applications.map( application => (
                                 <div className="trans_row table_details_row">
                                    <div className="trans_row_col">
                                        <p>{application.firstName + " " + application.lastName}</p>
                                    </div>
                                    <div className="trans_row_col">
                                        <p>{application.email}</p>
                                    </div>  
                                    <div className="trans_row_col">
                                        <p>{application.propertyDescription}</p>
                                    </div>  
                                    <div className="trans_row_col">
                                        <p>{application.application_date}</p>
                                    </div>                                      <div className="trans_row_col">
                                        <p className="details request_btn"> Details</p>
                                    </div>                               
                                </div>                                   
                                ))
                                }
                                

                            </div>
                        </>
                        :
                        <>
                            <div className="add_prop_title">
                            <h3>You don't have any active applications yet</h3>
                            <SentimentVeryDissatisfied />
                            </div>                 
                        </>
                    }
            </div>                       
        </section>
    )
}
