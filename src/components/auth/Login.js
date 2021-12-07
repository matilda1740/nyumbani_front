import { Home } from '@mui/icons-material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../property_owners/propOwners.css'

export default function Login({loginUser}) {

    const [userEmail, setUserEmail] = useState();
    const [userPass, setUserPass] = useState();
    const [isError, setError] = useState(false);
    const [clientSideError, setClientSideError] = useState();

    const handleChange = input => async (e) => {
        e.preventDefault();
        if (e.target.name === "email"){
            setUserEmail(e.target.value)
        }else if(e.target.name === "password"){
            setUserPass(e.target.value)
        }

    }    

    const validateLogin = async () => {
        if(userEmail === undefined || userEmail === "" || userEmail === null || userPass === undefined || userPass === null || userPass === ""){
            setError(true);
            setClientSideError("Ensure all Fields are Filled")
            // CHECK WHICH ONE IN PARTICULAR
        }else {
              setError(false);
            setClientSideError("")  
        }
    }

    const handleLogin = async e => {
        e.preventDefault();
        validateLogin()
            .then( data => loginUser(userEmail, userPass))
            // .catch( error => console.log("ClientSide Error: ", error))
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
                    <form onSubmit={handleLogin} className="auth_form login_form">
                    <h2 className="add_prod_title">Sign In</h2>

                    {
                    isError &&
                    <div className="form_error form_inputs">
                        <p>{clientSideError}</p>
                    </div> 
            
                    }
                    <label className="form_labels">Email:</label>
                    <input onChange={handleChange("email")} type="email" className="form_inputs" name="email" />  

                    <label className="form_labels">Password:</label>
                    <input onChange={handleChange("password")} type="password" className="form_inputs" name="password" />
                    
                    <button type="submit" className="form_btn">Sign In</button>

                    </form>
                    <div className="login_footer">
                        <p>Are you a new user? <Link to="/register">Sign Up</Link></p>
                        <p  className="back_home_div">
                        <Link to="/"><Home />Back Home</Link>
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}
