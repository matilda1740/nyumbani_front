import { SentimentVeryDissatisfied } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import TransactionsTable from './TransactionsTable'

export default function Transactions() {
    return (
        <section className="transactions_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {/* IF NO TRANSACTIONS */}
                {/* <div className="add_prop_title">
                <h3>There are no records of your transactions yet</h3>
                <SentimentVeryDissatisfied />
                </div> */}

                {/* IF TRANSACTIONS */}
                <section className="transaction_body">
                    <div className="add_prop_title">
                        <h3>Transaction Information</h3>
                    </div>  

                    <div className="trans_header">
                        <Link to="/prop_owners/transactions/history">Transaction History</Link>
                        <Link to="/prop_owners/transactions/summary">Transaction Summary</Link>
                        <Link to="/prop_owners/transactions/report">Download Report</Link>
                    </div>

                    {/* <Route path="/prop_owners/transactions/history"> */}
                        <TransactionsTable />
                    {/* </Route>                */}
                </section>
            </div>        
        </section>
    )
}
