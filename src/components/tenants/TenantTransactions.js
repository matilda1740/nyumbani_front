import React from 'react'
import { Link } from 'react-router-dom'

export default function TenantTransactions() {
    return (
        <section className="tenant_transactions_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {/* TITLE */}
                <div className="prop_title listing_title">
                    <h3>Transaction History</h3>
                        <Link to="/tenants/make_payment">
                        <button className="request_btn">Make Payment</button>
                        </Link>
                </div>      

                {/* <div className="total_trans_div">
                    <h3 className="trans_title">Total Amount Paid</h3>
                    <p>
                        <span className="trans_currency">Ksh. </span>
                        <span className="trans_amount">432,000</span>
                    </p>
                    <p className="trans_date">from <strong>23rd January 2015</strong></p>
                </div>             */}
                {/* TABLE */}
                <div className="transactions_div">
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
            </div>             
        </section>
    )
}
