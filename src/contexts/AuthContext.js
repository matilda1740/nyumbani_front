
import React, { useContext, useEffect, useState } from 'react'
import axios from '../axios'

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

// export default AuthContext;
export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    const registerUser = (email, password) => {
        axios.post("https://jsonplaceholder.typicode.com/posts", {email, password}, {headers: {'Content-Type': 'application/json'}})
            .then( response => {
            console.log("Registration Response: ", response.data)
            } )
            .catch( error => console.log("Registeration Error: ", error))
    }

    const loginUser = (email, password) => {
        axios.post('https://jsonplaceholder.typicode.com/posts', 
                {email, password}, 
                {headers: {'Content-Type': 'application/json'}}
                )
            .then( response => {
            console.log("Login Response: ", response) 
            })
            .catch( error => console.log("Login Error: ", error));
    }

    const logoutUser = () => {
        // return auth.signOut()
    }
    // the create user function also calls the set user

    useEffect(() => {
        // const unsubscribe =  auth.onAuthStateChanged( user => {
        //     setCurrentUser(user)
        //     setLoading(false);
        // })
        // return unsubscribe;
    }, [])

    const value = { currentUser, registerUser, loginUser, logoutUser }

    return (

        <AuthContext.Provider value={value}>
            { !loading && children}
        </AuthContext.Provider>
    )
}