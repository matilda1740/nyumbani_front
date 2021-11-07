import React, { useState } from 'react'
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
import EachProperty from './EachProperty'

export default function PropOwnersApp({getProperties}) {

    const [propTargetID, setPropTargetID] = useState();

    const getTargetProperty = targetID => () => {
        setPropTargetID(targetID)
    }

    const handleGetProperty = () => {
        getProperties()
    }
    return (
        <section className="propowners_app_base">
            <Sidebar />
            <button onClick={handleGetProperty}>Get Properties</button>
            <div className="propowners_app_body">
                <Header />
                <Switch>
                    <Route exact path="/prop_owners/properties">
                        <Properties
                        getProperties={getProperties}
                         getTargetProperty={getTargetProperty}
                         propTargetID={propTargetID}
                         />
                    </Route>
                    <Route exact path="/prop_owners/listings">
                        <Listings getTargetProperty={getTargetProperty}/>
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
                    {/* <Route exact path={`/prop_owners/${propTargetID}`}>
                        <EachProperty propTargetID={propTargetID}/>
                    </Route> */}
                    <Route exact path="/prop_owners/1">
                        <EachProperty propTargetID={propTargetID}/>
                    </Route>                    
                </Switch>
            </div>

        </section>
    )
}
