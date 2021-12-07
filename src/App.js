import React, { useState } from 'react'
import './App.css'
import PropOwnersApp from './components/property_owners/PropOwnersApp'
import axios from './axios.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import TenantApp from './components/tenants/TenantApp';
import Error from './components/Error';

import { AuthProvider, useAuth } from "./contexts/AuthContext"
import AdminApp from './components/admin/AdminApp';

export default function App() {

  const history = useHistory()
  const [currentUserData, setCurrentUserData] = useState({

  })

  const [errors, setErrors] = useState([
    {
      loginErrors: {status: false, message: ""},
      regErrors: {status: false, message: ""},
      addPropErrors: {status: false, message: ""},
      getPropErrors: {status: false, message: ""}
    }
  ])

  // PROPERTIES
  const getProperties = async () => {
    // GET ALL PROPERTIES WHERE USERID == LOGGED IN USER
    // axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
    axios.get('/properties/1')
      .then( response => console.log("Success, Getting Properties: ", response.data))
      .catch( error => console.log("Error Getting Properties: ", error))  
  }
  const getAllListings = async () => {
    axios.get('/listings')
      .then( response => console.log("Success, Getting All Listings: ", response.data))
      .catch( error => console.log("Error Getting Listings: ", error))  
  } 
  const getEachListing = async () => {
    axios.get('/listings/1')
      .then( response => console.log("Success, Getting Specific Listings: ", response.data))
      .catch( error => console.log("Error Getting Listings: ", error))  
  } 

  const getApplications = async () => {
    axios.get('/applications/1')
      .then( response => console.log("Success, Getting Applications: ", response.data))
      .catch( error => console.log("Error Getting Applications: ", error))  
  } 

  const getRequests = async () => {
    // GET ALL REQUESTS
    axios.get('/requests/1')
      .then( response => console.log("Success, Getting Requests: ", response.data))
      .catch( error => console.log("Error Getting Requests: ", error))  
  } 
  const getEachProperty = async () => {
    // GET ALL LISTINGS WHERE USERID == LOGGED IN USER && PROP ID == CLICK
    axios.get('https://jsonplaceholder.typicode.com/comments?postId=1/comments?postId=1')
      .then( response => console.log("Success, Getting Individual Property: ", response.data))
      .catch( error => console.log("Error Getting Individual Property: ", error))  
  }  

// GET INFO FROM ADD PROP JS FILE
  const addProperty = async (propInfo) => {
    axios.post('https://jsonplaceholder.typicode.com/posts')
      .then( response => console.log("Success, Adding Pproperty: ", response.data))
      .catch( error => console.log("Error Add Pproperty: ", error))  
  }

  // DELETE FUNCTIONS

  const deleteUser = async (userID) => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then( response => console.log("Success, Deleting User: ", response.data))
      .catch( error => console.log("Error, Deleting User:: ", error))  
  }
  const deleteProperty = async (propID) => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then( response => console.log("Success, Deleting User: ", response.data))
      .catch( error => console.log("Error, Deleting User:: ", error))  
  }  
  const deleteListing= async (listingID) => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then( response => console.log("Success, Deleting User: ", response.data))
      .catch( error => console.log("Error, Deleting User:: ", error))  
  }  
  return (
    <section className="app_base">
    {/* <h1>Home Page</h1> */}
    <button onClick={getProperties}>Get Properties</button>
    <button onClick={getAllListings}>Get All Listings</button>
    <button onClick={getEachListing}>Get Each Listing</button>
    <button onClick={getApplications}>Get Applications</button>
    <button onClick={getRequests}>Get Requests</button>

        <Router>
          {/* <AuthProvider> */}
          <Switch>
            <Route exact path="/register">
              <Register/>
            </Route>
            <Route exact path="/">
              <Login/>
            </Route>                      
             <Route eaxct path="/login">
              <Login/>
            </Route>           
            <Route path="/prop_owners">
              <PropOwnersApp/>
            </Route>
            <Route path="/tenants">
              <TenantApp />
            </Route>  
            <Route path="/admin">
              <AdminApp />
            </Route>             
            <Route path="*">
              <Error />
            </Route>          
          </Switch>
          {/* </AuthProvider> */}
        </Router>
    </section>
  )
}
