import { Filter, Search, SentimentVeryDissatisfied, Sort } from '@mui/icons-material'
import React from 'react'

export default function Requests({requests}) {
    return (
        <section className="applications_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                    {
                        requests?.length ?
                        <>
                            <div className="prop_title listing_title">
                                <h3>Requests</h3>
                                <p>Your clients have raised {requests?.length} requests, 0 are currently pending</p>
                            </div>                  

                            <div className="transactions_div">
                                <div className="trans_row row_header">
                                    <div className="trans_row_col">
                                        <p>Client Name</p>
                                    </div>
                                    <div className="trans_row_col">
                                        <p>Date Raised</p>
                                    </div>  
                                    <div className="trans_row_col">
                                        <p>Maintenance Request</p>
                                    </div>
                                    <div className="trans_row_col">
                                        <p>Application Date</p>
                                    </div>                                
                                </div>
                                {
                                requests.map( request => (
                                 <div className="trans_row table_details_row">
                                    <div className="trans_row_col">
                                        <p>{request.firstName + " " + request.lastName}</p>
                                    </div>
                                    <div className="trans_row_col">
                                        <p>{request.dateRequested}</p>
                                    </div>  
                                    <div className="trans_row_col">
                                        <p>{request.requestMessage}</p>
                                    </div>  
                                    <div className="trans_row_col">
                                        {
                                            request.requestStatus === "0" ?
                                            <p className="status_pending request_btn"> Pending</p>
                                            : request.requestStatus === "1" &&
                                            <p className="status_closed request_btn"> Closed</p>
                                        }
                                    </div>                                                                
                                </div>                                   
                                ))
                                }
                                

                            </div>
                        </>
                        :
                        <>
                            <div className="add_prop_title">
                            <h3>Maintenance History is currently unavailable</h3>
                            <SentimentVeryDissatisfied />
                            </div>                 
                        </>
                    }

                           </div>            
           
        </section>
    )
}
