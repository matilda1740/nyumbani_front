import React from 'react'
import './App.css'
import PropOwnersApp from './components/property_owners/PropOwnersApp'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default function App() {
  return (
    <section className="app_base">
        <Router>
          <Switch>
            <Route path="/prop_owners">
              <PropOwnersApp />
            </Route>
          </Switch>
        </Router>
    </section>
  )
}
