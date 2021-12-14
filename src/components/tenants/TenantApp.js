import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './tenants.css'
import '../property_owners/propOwners.css'

import Header from '../Header'
import TenantSidebar from './TenantSidebar'
import TenantRented from './TenantRented'
import TenantListings from './TenantListings'
import TenantRequest from './TenantRequest'
import TenantRequestForm from './TenantRequestForm'
import TenantTransactions from './TenantTransactions'
import TenantPayment from './TenantPayment'
import EachProperty from '../property_owners/EachProperty'

export default function TenantApp({logoutUser, loginData, currentUserData, getRentedProperty, rentedProp, getAllListings, allListings, getTenantTransactions, tenantTransactions, getTenantRequests, tenantRequests}) {


    const [targetProperty, setTargetProperty] = useState();
    const [targetID, setTargetID] = useState();
   const [newRequests, setNewRequests] = useState();

    const addRequest = (reqDetails) => () => {
       setNewRequests(reqDetails)
      console.log("Tenant App Request Details: ", reqDetails)

    }
    const getTargetProperty = (property, id) => () => {
        setTargetProperty(property)
        setTargetID(id)
    }

   useEffect(() => {
        getRentedProperty();
        getAllListings();
        getTenantTransactions();
        getTenantRequests();
   }, [])
    return (
        <section className="module_app_base">
            <TenantSidebar />
            <div className="module_app_body">
                <Header logoutUser={logoutUser} loginData={loginData} currentUserData={currentUserData}/>
                <Switch>
                    <Route exact path="/tenants">
                       <TenantRented rentedProp={rentedProp}/>
                    </Route>             
                    <Route exact path="/tenants/properties">
                       <TenantRented getTargetProperty={getTargetProperty}
                       rentedProp={rentedProp}/>
                    </Route>                   
                    <Route exact path="/tenants/listings">
                       <TenantListings getTargetProperty={getTargetProperty} allListings={allListings}/>
                    </Route> 
                    <Route exact path="/tenants/requests">
                       <TenantRequest newRequests={newRequests} addRequest={addRequest} tenantRequests={tenantRequests}/>
                    </Route> 
                    <Route exact path="/tenants/submit_request">
                       <TenantRequestForm addRequest={addRequest} />
                    </Route>                     
                    <Route exact path="/tenants/transactions">
                       <TenantTransactions tenantTransactions={tenantTransactions}/>
                    </Route>  
                    <Route exact path="/tenants/make_payment">
                       <TenantPayment />
                    </Route> 
                    <Route exact path={`/tenants/properties/${targetID}`}>
                        <EachProperty targetProperty={targetProperty} targetID={targetID}/>
                    </Route>                
                  </Switch>
            </div>           
        </section>
    )
}
