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
import Home from './components/Home';

export default function App() {

  const history = useHistory()
  const [currentUser,setCurrentUser] = useState(false)
  const [currentUserData, setCurrentUserData] = useState()

  const [propDetails, setPropDetails] = useState();
  const [allListings, setAllListings] = useState();
  const [userListings, setUserListings] = useState();
  const [applications, setApplications] = useState();
  const [requests, setRequests] = useState();

  const [errors, setErrors] = useState([
    {
      loginErrors: {status: false, message: ""},
      regErrors: {status: false, message: ""},
      addPropErrors: {status: false, message: ""},
      getPropErrors: {status: false, message: ""}
    }
  ])

  // AUTH
  const registerUser = async (userData) => {
    console.log("Main App User Details: ", userData);
    // setCurrentUser(true)
    // setCurrentUserData(userData)
      axios.post(
        '/register', 
        userData, 
        {headers: {'Access-Control-Allow-Origin': '*'}}
        )
      .then( response => console.log("Success, Registering User: ", response.data))
      .catch( error => console.log("Error Registering User: ", error))    
  }
  const loginUser = async (userData) => {

  }

  // PROPERTIES
  const getProperties = async () => {
    axios.get('/properties/1')
      .then( response => {
        console.log("Success, Getting Properties: ", response.data)
        setPropDetails(response.data)
      })
      .catch( error => console.log("Error Getting Properties: ", error))  
  }

  const getAllListings = async () => {
    axios.get('/listings')
      .then( response => {
      console.log("Success, Getting All Listings: ", response.data)
      setAllListings(response.data)
      } )
      .catch( error => console.log("Error Getting Listings: ", error))  
  } 

  const getUserListings = async () => {
    axios.get('/listing/1')
      .then( response => {
      console.log("Success, Getting User Listings: ", response.data)
      setUserListings(response.data)
      } )
      .catch( error => console.log("Error Getting Listings: ", error))  
  } 

  const getEachListing = async () => {
    axios.get('/listings/1')
      .then( response => console.log("Success, Getting Specific Listings: ", response.data))
      .catch( error => console.log("Error Getting Listings: ", error))  
  } 

  const getApplications = async () => {
    axios.get('/applications/1')
      .then( response => {
        console.log("Success, Getting Applications: ", response.data)
        setApplications(response.data)
      } )
      .catch( error => console.log("Error Getting Applications: ", error))  
  } 

  const getRequests = async () => {
    // GET ALL REQUESTS
    axios.get('/requests/1')
      .then( response =>
        {
          console.log("Success, Getting Requests: ", response.data)
          setRequests(response.data)
        } )
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

  // TENANT FUNCTIONS
  return (
    <section className="app_base">
        <Router>
          {/* <AuthProvider> */}
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>           
            <Route exact path="/register">
              <Register registerUser={registerUser} />
            </Route>
                     
             <Route eaxct path="/login">
              <Login/>
            </Route>
                <Route path="/prop_owners">
                  <PropOwnersApp 
                    currentUserData={currentUserData}
                    getProperties={getProperties} 
                    propDetails={propDetails} 
                    getAllListings={getAllListings}
                    allListings={allListings}
                    getUserListings={getUserListings}
                    userListings={userListings}
                    getApplications={getApplications}
                    applications={applications}
                    getRequests={getRequests}
                    requests={requests}
                    />
                </Route> 
                <Route path="/tenants">
                  <TenantApp currentUserData={currentUserData}/>
                </Route>                                {/* { */}
              {/* (currentUser && currentUserData !== undefined) ? */}
              {/* currentUserData.role === "Property Owner" ? 

              : currentUserData.role === "Tenant" &&

              :
             <Route eaxct path="/login">
              <Login/>
            </Route>                 */}
            {/* }          */}


            <Route path="/admin">
              <AdminApp currentUserData={currentUserData}/>
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
