import { SentimentVeryDissatisfiedOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function TenantRequest({addRequest, newRequests, tenantRequests}) {

        
    const {state} = useLocation();

    const [updatedRequests, setUpdatedRequest] = useState(tenantRequests);
    useEffect(() => {
        let isSubscribed = true
        if (state !== undefined && state !== null && tenantRequests){
            if (isSubscribed) {setUpdatedRequest([state, ...tenantRequests]);}
        }
    return () => isSubscribed = false
    }, [tenantRequests])
    return (
        <section className="requests_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {
                    tenantRequests?.length ?
                    <>
                        <div className="prop_title listing_title">
                            <h3>Maintainance History</h3>
                            <Link to="/tenants/submit_request">
                            <button className="request_btn">Make a new Request</button>                        
                            </Link>
                        </div>   

                        <div className="transactions_div">
                            <div className="trans_row row_header">
                                <div className="trans_row_col">
                                    <p>Request Message</p>
                                </div>                              
                                <div className="trans_row_col">
                                    <p>Date Requested</p>
                                </div>
                                <div className="trans_row_col">
                                    <p>Date Completed</p>
                                </div>                                  

                                <div className="trans_row_col">
                                    <p>Status</p>
                                </div>                              
                            </div>  
                            {
                                updatedRequests?.map( requests => (
                                    <div className="trans_row" key={requests.requestID}>
                                        <div className="trans_row_col">
                                            <p>{requests.requestMessage}</p>
                                        </div>                                    
                                        <div className="trans_row_col">
                                            <p>{requests.dateRequested}</p>
                                        </div>
                                        <div className="trans_row_col">
                                            {
                                                requests.dateCompleted === "0000-00-00" ? 
                                                <p>ongoing</p>
                                                :
                                                <p>{requests.dateCompleted}</p>
                                            }
                                            
                                        </div>                                                                  
                                        <div className="trans_row_col">
                                            {
                                                requests.requestStatus === "0" ?
                                                <p className="request_btn  status_pending ">Pending</p>
                                                : requests.requestStatus === "1" &&
                                                <p className="request_btn  status_closed">Confirmed</p>
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
                        <h3>There are no records of your previous maintenance requests</h3>
                        <SentimentVeryDissatisfiedOutlined />
                        </div>                  
                    </>
                }
              

            </div>             
        </section>
    )
}
