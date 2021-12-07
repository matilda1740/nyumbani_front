import { Cancel, Home } from '@mui/icons-material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../property_owners/propOwners.css'
import './authforms.css'

import {useAuth} from '../../contexts/AuthContext'

export default function Register({registerUser}) {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [role, setRole] = useState();
    const [email, setEmail] = useState();
    const [password, setPass] = useState();
    const [confirmPass, setConfirmPass] = useState();

    const [isError, setIsError] = useState(false);
    const [clientSideError, setClientSideError] = useState();

    const roleBox = document.getElementById('role');

    const handleChange = input => async (e) => {
        e.preventDefault();
        
        if(e.target.name === "firstName"){
            setFirstName(e.target.value)
        }else if (e.target.name === "lastName"){
            setLastName(e.target.value)
        }else if (e.target.name === "email"){
            setEmail(e.target.value)
        }else if(e.target.name === "password"){
            setPass(e.target.value)
        }else if(e.target.name === "confirmPass"){
            setConfirmPass(e.target.value)
        }

        if(roleBox){
         setRole(roleBox.value)

        }
    }    

    const validateRegister = async () => {
        // CHECK IF EMPTY
        if(password !== confirmPass){
            setIsError(true);
            setClientSideError("Please Ensure Password is the same as the Confirm Password")
        }else{
            setIsError(false);
            setClientSideError("")
        }
    }

    const handleRegister = async  e => {
        e.preventDefault();
        validateRegister()
            .then( data => {
                registerUser({
                // userID: ,
                firstName: firstName,
                lastName: lastName,
                email: email,
                role: role,
                password: password,
                isDeleted : 1,               
                })
            })

        //     try{
        //         // console.log(userEmail, userPass)
        //         let response = await registerUser(userEmail, userPass)
                    
        //         if(response){
        //             // console.log(response.user.uid)
        //             await userTable.add({
        //             "userID": response.user.uid,
        //             "fname": firstName,
        //             "lname": lastName,
        //             "phone": userPhone,
        //             "type" : isAdmin ? "admin" : "customer",
        //             "email": userEmail,
        //             "pass": userPass,
        //             "datejoined": time
        //             }) 

        //         }
                
        //         await isAdmin ? history.push("/admin") : history.push("/")
        //         await  setIsAuthError(false);
        //     }catch(error){
        //         console.log("Registration Error: ", error)
        //         setIsAuthError(true);
        //         setAuthError(error.message)
        //     }
 
    }

    return (
        <section className="auth_body">
            <section className="auth_section">
                <div className="form_column column_left">
                    <div className="auth_image">
                        <img src="/images/logo.png" alt="Logo" />
                    </div>
                </div>
                <div className="form_column column_right">
                    <h2 className="add_prod_title">Sign Up</h2>
                    {
                    isError &&
                    <div className="form_error form_inputs">
                        <p>{clientSideError}</p>
                    </div> 
            
                    }                    
                    <form onSubmit={handleRegister} className="auth_form">
                    <label className="form_labels" htmlFor="firstName">First Name:</label>
                    <input onChange={handleChange("firstName")} type="text" className="form_inputs" name="firstName" />
                    <label className="form_labels">Last Name:</label>
                    <input onChange={handleChange("lastName")} type="text" className="form_inputs" name="lastName" />
                    <label className="form_labels">Email:</label>
                    <input onChange={handleChange("email")} type="email" className="form_inputs" name="email" />  
                    <label className="form_labels">Nyumbani Role:</label>

                    <select onChange={handleChange("role")} className="form_inputs" id="role" name="role">
                        <option value="" defaultValue>Select Role:</option>
                        <option value="1">Property Owner</option>
                        <option value="2">Tenant</option>
                    </select>     

                    <label className="form_labels">Password:</label>
                    <input onChange={handleChange("password")} type="password" className="form_inputs" name="password" />
                    <label className="form_labels">Confirm Password:</label>
                    <input onChange={handleChange("confirmPass")} type="password" className="form_inputs" name="confirmPass" password="" autoComplete="new-password" />
                    
                    <button type="submit" className="form_btn">Sign Up</button>

                    </form>
                    <div className="login_footer">
                        <p>Already have an account? <Link to="/login">Sign In</Link></p>
                        <p  className="back_home_div">
                        <Link to="/"><Home />Back Home</Link>
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}
