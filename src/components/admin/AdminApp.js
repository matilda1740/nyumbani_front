import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import '../tenants/tenants.css'
import '../property_owners/propOwners.css'
import './admin.css'

import AdminSidebar from './AdminSidebar'
import TenantHeader from '../tenants/TenantHeader'
import AdminStats from './AdminStats'
import AdminVerify from './AdminVerify'
import AdminUsers from './AdminUsers'

export default function AdminApp() {
    return (
        <section className="module_app_base">
            <AdminSidebar />
            <div className="module_app_body">
                <TenantHeader />
                <Switch>
                    <Route exact path="/admin">
                       <AdminStats />
                    </Route>             
                    <Route exact path="/admin/statistics">
                       <AdminStats />
                    </Route>                   
                    <Route exact path="/admin/verification">
                     <AdminVerify />
                    </Route> 
                    <Route exact path="/admin/users">
                     <AdminUsers />
                    </Route> 
                    <Route exact path="/admin/profile">
                       {/* <TenantRequestForm /> */}
                    </Route>                     
                </Switch>
            </div>           
        </section>
    )
}
