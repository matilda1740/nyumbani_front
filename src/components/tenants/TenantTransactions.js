import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Delete, Filter, HouseOutlined, Receipt, Search, SentimentVeryDissatisfied, SentimentVeryDissatisfiedOutlined, Sort, Visibility } from '@mui/icons-material'

export default function TenantTransactions({tenantTransactions}) {
     const {state} = useLocation();

    const [updatedTransactions, setUpdatedTransactions] = useState(tenantTransactions);

    useEffect(() => {
        let isSubscribed = true
        if (state !== undefined && state !== null){
            if (isSubscribed) {setUpdatedTransactions([state, ...tenantTransactions]);}
        }
    return () => isSubscribed = false
    }, [tenantTransactions])   
    return (
        <section className="tenant_transactions_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {
                    tenantTransactions?.length ?
                    <>
                        <div className="prop_title listing_title">
                            <h3>Transaction History</h3>
                                <Link to="/tenants/make_payment">
                                <button className="request_btn">Make Payment</button>
                                </Link>
                        </div>      
                        
                        <div className="transactions_div">
                            <div className="trans_row row_header">
                                <div className="trans_row_col">
                                    <p>Type</p>
                                </div>                              
                                <div className="trans_row_col">
                                    <p>Amount</p>
                                </div>
                                <div className="trans_row_col">
                                    <p>Method</p>
                                </div>                                 
                                <div className="trans_row_col">
                                    <p>Date</p>
                                </div>  

                                <div className="trans_row_col">
                                    <p>Status</p>
                                </div>                              
                            </div>  
                            {
                                updatedTransactions?.map( transaction => (
                                    <div className="trans_row" key={transaction.paymentID}>
                                        <div className="trans_row_col">
                                            <p>{transaction.paymentType}</p>
                                        </div>                                    
                                        <div className="trans_row_col">
                                            <p>Ksh. {transaction.paymentAmount}</p>
                                        </div>
                                        <div className="trans_row_col">
                                            <p>{transaction.paymentMethod}</p>
                                    </div>                                        
                                        <div className="trans_row_col">
                                            <p><span>{transaction.paymentDate}</span></p>
                                        </div>                                
                                        <div className="trans_row_col">
                                        {
                                            (transaction.status === 0)?
                                            <p className="status_pending">Pending</p>
                                            : 
                                           <p className="status_closed">Confirmed</p>
                                        }
                                        </div>                               
                                    </div>
                                ))
                            }                 
                        </div>

                        <div className="trans_row total_trans_div">
                            <div className="trans_row_col">
                                <h3 className="trans_title">Total Amount Paid</h3>
                            </div>
                            <div className="trans_row_col">
                                <p>Ksh. <span>{tenantTransactions?.reduce((sum, curr) => sum+=parseInt(curr.paymentAmount), 0)}</span></p>
                            </div>  
                            {/* <div className="trans_row_col">
                                <p className="trans_date">from <strong>23rd January 2015</strong></p>                    
                            </div>                                */}
                        </div>                    
                    </>
                    :
                    <>
                        <div className="add_prop_title">
                        <h3>There are no records of your transactions yet</h3>
                        <SentimentVeryDissatisfiedOutlined />
                        </div>                  
                    </>
                }
            </div>             
        </section>
    )
}
