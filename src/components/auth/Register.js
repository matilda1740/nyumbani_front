import { Cancel, CheckCircleOutline, Home } from '@mui/icons-material';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../property_owners/propOwners.css'
import './authforms.css'

import {useAuth} from '../../contexts/AuthContext'

export default function Register({registerUser}) {

    const history = useHistory();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [role, setRole] = useState();
    const [email, setEmail] = useState();
    const [password, setPass] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();

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
            setPasswordConfirm(e.target.value)
        }

        if(roleBox){
         setRole(roleBox.value)

        }
    }    

    const validateRegister = async () => {
        // CHECK IF EMPTY
        if(password !== passwordConfirm){
            setIsError(true);
            setClientSideError("Please Ensure Password is the same as the Confirm Password")
        }else{
            setIsError(false);
            setClientSideError("")
        }
    }
    // NOTIFICATIONS
    const [ successAlert, setSuccessAlert] = useState(false);
    const [ alertMsg, setAlertMsg] = useState("");
    const alertStyle = { display: successAlert ? `flex`  : `none`}

    const handleRegister = async e => {
        e.preventDefault();
        validateRegister()
            .then( data => {
                registerUser({
                firstName: firstName,
                lastName: lastName,
                email: email,
                role: role,
                password: password,
                passwordConfirm: password,
                })
                console.log({firstName, lastName, email, role, password,passwordConfirm})
                setSuccessAlert(true)
                setAlertMsg(`Successful ${role} Registration !`)
                setTimeout(() => {
                    setSuccessAlert(false)
                    setAlertMsg("") 
                    history.push("/login")                            
                }, 2000);
                                
            }) 
            .catch( error => console.log("Registration Component Error: ", error))
    }

    return (
        <section className="auth_body">
            <div className="user_alerts success" style={{ display: alertStyle.display }}>
                <p>{alertMsg}</p>
                <CheckCircleOutline />
                {/* <CancelOutlined /> */}
            </div>              <section className="auth_section">
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
                        <option value="Property Owner">Property Owner</option>
                        <option value="Tenant">Tenant</option>
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
