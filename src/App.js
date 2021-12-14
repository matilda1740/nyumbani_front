import React, { useState} from 'react'
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
import TenantApp from './components/tenants/TenantApp';
import Error from './components/Error';

import { AuthProvider, useAuth } from "./contexts/AuthContext"
import AdminApp from './components/admin/AdminApp';
import Home from './components/Home';

export default function App() {


  const [currentUser,setCurrentUser] = useState(false)
  const [currentUserData, setCurrentUserData] = useState()
  const [loginData, setLoginData] = useState()


  const [propDetails, setPropDetails] = useState();
  const [allListings, setAllListings] = useState();
  const [userListings, setUserListings] = useState();
  const [applications, setApplications] = useState();
  const [requests, setRequests] = useState();
  const [poTransactions, setPOTransaction] = useState();


  // TENANTS STATE 

  const [rentedProp, setRentedProp] = useState();
  const [tenantTransactions, setTenantTransactions] = useState();
  const [tenantRequests, setTenantRequests] = useState();


  const [errors, setErrors] = useState([
    {
      loginErrors: {status: false, message: ""},
      regErrors: {status: false, message: ""},
      addPropErrors: {status: false, message: ""},
      getPropErrors: {status: false, message: ""}
    }
  ])

  // AUTH
  const registerUser = (userData) => {
      setCurrentUserData(userData)
    // console.log("Main App User Details: ", userData);
    //   axios.post(
    //     '/register', userData
    //     )
    //   .then( response => {
    //     console.log("Success, Registering User: ", response.data)
    //     history.push('/login')
    //   })
    //   .catch( error => console.log("Error Registering User: ", error))    
  }
  const loginUser = async (details) => {
      setLoginData(details)
      // axios.post('/login', details)
      // .then( response => {
      //   console.log("Success, Logining User: ", response.data)
      //   setCurrentUser(details);
      //   // history.push('/prop_owners/properties')
      // } )
      // .catch( error => console.log("Error Logining User: ", error)) 
  }
    const logoutUser = (data) => () => {
        console.log("Logged Out: ", data)
        setCurrentUserData(data)
    }
  // PROPERTIES
  const getProperties = async () => {
    axios.get('/properties/1')
      .then( response => {
        console.log("Success, Getting Properties: ", [...new Set(response.data)])
        setPropDetails([...new Map(response.data.map((item) => [item["propertyID"], item])).values()])
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
      setUserListings([...new Map(response.data.map((item) => [item["propertyID"], item])).values()])
      } )
      .catch( error => console.log("Error Getting Listings: ", error))  
  } 

  const getEachListing = async () => {
    axios.get('/listings/1')
      .then( response => console.log("Success, Getting Specific Listings: ", response.data))
      .catch( error => console.log("Error Getting Listings: ", error))  
  } 

  // WORK ON THIS
  const getTransactions = async () => {
    axios.get('/transactions/1')
      .then( response => {
        console.log("Success, Getting P/O Transactions: ", response.data)
        setPOTransaction(response.data)
      })
      .catch( error => console.log("Error Getting P/O Transactions: ", error))  
  }

  const getApplications = async () => {
    axios.get('/applications/1')
      .then( response => {
        console.log("Success, Getting Applications: ", response.data)
        setApplications([...new Map(response.data.map((item) => [item["propertyDescription"], item])).values()])
      } )
      .catch( error => console.log("Error Getting Applications: ", error))  
  } 

  const getRequests = async () => {
    // GET ALL REQUESTS
    let temp = [];
    axios.get('/requests/1')
      .then( response =>
        {
          console.log("Success, Getting Applications: ", response.data)
          setRequests([...new Map(response.data.map((item) => [item["firstName"], item])).values()]);
        })
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

  const getRentedProperty = async () => {
    // GET ALL LISTINGS WHERE USERID == LOGGED IN USER && PROP ID == CLICK
    axios.get('/tenants/4')
      .then( response => {
        console.log("Success, Getting Tenant Rented Property: ", response.data)
        setRentedProp(response.data)
      } )
      .catch( error => console.log("Error Getting Tenant Rented  Property: ", error))  
  } 

  const getTenantTransactions = async () => {
    axios.get('/payments/tenant/6')
      .then( response => {
        console.log("Success, Getting Tenant Transactions: ", response.data)
        setTenantTransactions(response.data)
      } )
      .catch( error => console.log("Error Getting Tenant Transactions: ", error))  
  }  
  const getTenantRequests = async () => {
    axios.get('/tenants/requests/6')
      .then( response => {
        console.log("Success, Getting Tenant Requests: ", response.data)
        setTenantRequests([...new Map(response.data.map((item) => [item["requestID"], item])).values()])
      } )
      .catch( error => console.log("Error Getting Tenant Requests: ", error))  
  }
  // 


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
                     
             <Route exact path="/login">
              <Login 
                loginUser={loginUser} 
                currentUserData={currentUserData}
                loginData={loginData}
                />
            </Route>
                <Route path="/prop_owners">
                  <PropOwnersApp 
                  logoutUser={logoutUser}
                    loginData={loginData}
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
                    getTransactions={getTransactions}
                    poTransactions={poTransactions}
                    />
                </Route> 
                <Route path="/tenants">
                  <TenantApp 
                  logoutUser={logoutUser}
                  loginData={loginData}
                    currentUserData={currentUserData}
                    getRentedProperty={getRentedProperty}
                    rentedProp={rentedProp}
                    getAllListings={getAllListings}
                    allListings={allListings}
                    getTenantTransactions={getTenantTransactions}
                    tenantTransactions={tenantTransactions}
                    getTenantRequests={getTenantRequests}
                    tenantRequests={tenantRequests}
                    />
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
