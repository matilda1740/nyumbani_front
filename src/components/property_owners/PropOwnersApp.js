import React from 'react'
import './propOwners.css'

import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Header from './Header'
import AddProperty from './AddProperty'
import Properties from './Properties'
import Sidebar from './Sidebar'
import Listings from './Listings'
import Transactions from './Transactions'
import Requests from './Requests'
import Applications from './Applications'
import TransactionsTable from './TransactionsTable'

export default function PropOwnersApp() {
    return (
        <section className="propowners_app_base">
            <Sidebar />
            <div className="propowners_app_body">
                <Header />
                <Switch>
                    <Route exact path="/prop_owners/properties">
                        <Properties />
                    </Route>
                    <Route exact path="/prop_owners/listings">
                        <Listings />
                    </Route>
                    <Route exact path="/prop_owners/transactions">
                        <Transactions />
                    </Route>
                    <Route exact path="/prop_owners/applications">
                        <Applications />
                    </Route>                    
                    <Route exact path="/prop_owners/requests">
                        <Requests />
                    </Route>                    
                    <Route exact path="/prop_owners/add_properties">
                        <AddProperty />
                    </Route>
                    {/* TRANSACTION RELATED URLS */}

                </Switch>
            </div>

        </section>
    )
}
