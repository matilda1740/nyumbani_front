import React from 'react'
import { Link } from 'react-router-dom'
import { Delete, Filter, HouseOutlined, Receipt, Search, SentimentVeryDissatisfied, SentimentVeryDissatisfiedOutlined, Sort, Visibility } from '@mui/icons-material'

export default function TenantTransactions({transactions}) {
    return (
        <section className="tenant_transactions_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {
                    transactions?.length ?
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
                                    <p>Transaction Amount</p>
                                </div>
                                <div className="trans_row_col">
                                    <p>Transaction Date</p>
                                </div>  
                                <div className="trans_row_col">
                                    <p>Transaction Status</p>
                                </div>                              
                            </div>  
                            {

                            }                      
                            <div className="trans_row">
                                <div className="trans_row_col">
                                    <p>Ksh. 70,000</p>
                                </div>
                            <div className="trans_row_col">
                                    <p>Made on: <span>5th June 2014</span></p>
                                </div>  
                                <div className="trans_row_col">
                                    <p className="status_closed">Confirmed</p>
                                </div>                               
                            </div>                  
                        </div>

                        <div className="trans_row total_trans_div">
                            <div className="trans_row_col">
                                <h3 className="trans_title">Total Amount Paid</h3>
                            </div>
                            <div className="trans_row_col">
                                <p>Ksh. <span>432,000</span></p>
                            </div>  
                            <div className="trans_row_col">
                                <p className="trans_date">from <strong>23rd January 2015</strong></p>                    
                            </div>                               
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
