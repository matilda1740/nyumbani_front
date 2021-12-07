import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './tenants.css'
import '../property_owners/propOwners.css'

import TenantHeader from './TenantHeader'
import TenantSidebar from './TenantSidebar'
import TenantRented from './TenantRented'
import TenantListings from './TenantListings'
import TenantRequest from './TenantRequest'
import TenantRequestForm from './TenantRequestForm'
import TenantTransactions from './TenantTransactions'
import TenantPayment from './TenantPayment'

export default function TenantApp() {
    return (
        <section className="module_app_base">
            <TenantSidebar />
            <div className="module_app_body">
                <TenantHeader />
                <Switch>
                    {/* <Route path= {["/tenants", "/tenants/properties"]} component={TenantRented} /> */}
                    <Route exact path="/tenants">
                       <TenantRented />
                    </Route>             
                    <Route exact path="/tenants/properties">
                       <TenantRented />
                    </Route>                   
                    <Route exact path="/tenants/listings">
                       <TenantListings />
                    </Route> 
                    <Route exact path="/tenants/requests">
                       <TenantRequest />
                    </Route> 
                    <Route exact path="/tenants/submit_request">
                       <TenantRequestForm />
                    </Route>                     
                    <Route exact path="/tenants/transactions">
                       <TenantTransactions />
                    </Route>  
                    <Route exact path="/tenants/make_payment">
                       <TenantPayment />
                    </Route>                    
                </Switch>
            </div>           
        </section>
    )
}
