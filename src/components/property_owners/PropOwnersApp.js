import React, { useEffect, useState } from 'react'
import './propOwners.css'
import '../tenants/tenants.css'


import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Header from '../Header'
import AddProperty from './AddProperty'
import Properties from './Properties'
import POSidebar from './POSidebar'
import Listings from './Listings'
import Transactions from './Transactions'
import Requests from './Requests'
import Applications from './Applications'
import TransactionsTable from './TransactionsTable'
import EachProperty from './EachProperty'
import axios from '../../axios'

export default function PropOwnersApp({logoutUser, loginData,currentUserData, propDetails, getProperties,  getAllListings, allListings, getUserListings, userListings, applications, getApplications, requests, getRequests, getTransactions, poTransactions}) {

    const [targetProperty, setTargetProperty] = useState();
    const [targetID, setTargetID] = useState();

    const getTargetProperty = (property, id) => () => {
        setTargetProperty(property)
        setTargetID(id)
    }

   useEffect(() => {
        getProperties();
        getAllListings();
        getUserListings();
        getApplications();
        getRequests();
        getTransactions();
   }, [])
    return (
        <section className="module_app_base">
            <POSidebar />
            <div className="module_app_body">
                <Header logoutUser={logoutUser} loginData={loginData} currentUserData={currentUserData}/>
                <Switch>
                    <Route exact path="/prop_owners/properties">
                        <Properties
                            getTargetProperty={getTargetProperty}
                            propDetails={propDetails}/>
                    </Route>
                    <Route exact path="/prop_owners/listings">
                        <Listings 
                            getTargetProperty={getTargetProperty}
                            allListings={allListings}
                            userListings={userListings}
                            />
                    </Route>
                    <Route exact path="/prop_owners/transactions">
                        <Transactions poTransactions={poTransactions}/>
                    </Route>
                    <Route exact path="/prop_owners/applications">
                        <Applications applications={applications} />
                    </Route>                    
                    <Route exact path="/prop_owners/requests">
                        <Requests requests={requests} />
                    </Route>                    
                    <Route exact path="/prop_owners/add_properties">
                        <AddProperty />
                    </Route>
                    {/* TRANSACTION RELATED URLS */}
                    <Route exact path={`/prop_owners/properties/${targetID}`}>
                        <EachProperty targetProperty={targetProperty} targetID={targetID}/>
                    </Route>
                </Switch>
            </div>

        </section>
    )
}
