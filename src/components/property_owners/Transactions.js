import { SentimentVeryDissatisfiedOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import TransactionsTable from './TransactionsTable'

export default function Transactions({poTransactions}) {
    return (
        <section className="transactions_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
            {
                poTransactions?.length ? 
// IF TRANSACTIONS                 
                <>
                <div className="prop_title listing_title">
                    <h3>Transaction History</h3>
                    <Link to="/tenants/make_payment">
                    <button className="request_btn">Download Report</button>
                    </Link>
                </div>                   

                {/* IF TRANSACTIONS */}
                <div className="transactions_div">
                    <div className="trans_row row_header">
                        <div className="trans_row_col">
                            <p>Transaction Amount</p>
                        </div>
                        <div className="trans_row_col">
                            <p>Transaction Date</p>
                        </div>  
                        <div className="trans_row_col">
                            <p>Property</p>
                        </div>                          
                        <div className="trans_row_col">
                            <p>Transaction Status</p>
                        </div>                              
                    </div>                     
                    
                    {
                        poTransactions?.map( transaction => (
                            <div className="trans_row" key={transaction.paymentID}>
                                <div className="trans_row_col">
                                    <p>Ksh. {transaction.paymentAmount}</p>
                                </div>
                                <div className="trans_row_col">
                                    <p><span>{transaction.paymentDate}</span></p>
                                </div> 
                                <div className="trans_row_col">
                                    <p><span>{transaction.propertyID}</span></p>
                                </div>                                 
                                <div className="trans_row_col">
                                    <p className="status_closed">Confirmed</p>
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
                        <p>Ksh. <span>{poTransactions?.reduce((sum, curr) => sum+=parseInt(curr.paymentAmount), 0)}</span></p>
                    </div>  
                    {/* <div className="trans_row_col">
                        <p className="trans_date">from <strong>23rd January 2015</strong></p>                    
                    </div>                                */}
                </div>                
                </>
                :
// IF NO TRANSACTIONS 
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
