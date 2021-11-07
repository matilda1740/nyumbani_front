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
export default function App() {

  const history = useHistory()
  const [currentUserData, setCurrentUserData] = useState()

  const [errors, setErrors] = useState([
    {
      loginErrors: {status: false, message: ""},
      regErrors: {status: false, message: ""},
      addPropErrors: {status: false, message: ""},
      getPropErrors: {status: false, message: ""}
    }
  ])
  const registerUser = async (userInfo) => {
    // console.log("Register User: ", userInfo);
    axios.post("https://jsonplaceholder.typicode.com/posts", userInfo, {headers: {'Content-Type': 'application/json'}})
        .then( response => {
          console.log("Registration Response: ", response)
          history.push("/login");
        } )
        .catch( error => console.log("Registeration Error: ", error))
  }

  const loginUser = async (email, pass) => {

    // console.log("Email: ", email, "Pass: ", pass)
    axios.post('https://jsonplaceholder.typicode.com/posts', 
              {email, pass}, 
              {headers: {'Content-Type': 'application/json'}}
              )
         .then( response => {
          console.log("Login Response: ", response) 
          history.push("/prop_owners")
         })
         .catch( error => console.log("Login Error: ", error));
  }

  // PROPERTIES
  const getProperties = async () => {
    // GET ALL PROPERTIES WHERE USERID == LOGGED IN USER
    axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then( response => console.log("Success, Getting Properties: ", response.data))
      .catch( error => console.log("Error Getting Properties: ", error))  
  }
  const getListings = async () => {
    // GET ALL LISTINGS WHERE USERID == LOGGED IN USER
    axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then( response => console.log("Success, Getting Listings: ", response.data))
      .catch( error => console.log("Error Getting Listings: ", error))  
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
        <Router>
          <Switch>
            <Route path="/register">
              <Register registerUser={registerUser}/>
            </Route>
            <Route path="/login">
              <Login loginUser={loginUser}/>
            </Route>                      
            <Route path="/prop_owners">
              <PropOwnersApp getProperties={getProperties}/>
            </Route>
          </Switch>
        </Router>
    </section>
  )
}
