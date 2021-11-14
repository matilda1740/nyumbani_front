import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './tenants.css'
import '../property_owners/propOwners.css'

import TenantHeader from './TenantHeader'
import TenantSidebar from './TenantSidebar'
import TenantRented from './TenantRented'

export default function TenantApp() {
    return (
        <section className="module_app_base">
            <TenantSidebar />
            <div className="module_app_body">
                <TenantHeader />
                <Switch>
                    <Route exact path="/tenants/properties">
                       <TenantRented />
                    </Route>                   
                </Switch>
            </div>           
        </section>
    )
}
