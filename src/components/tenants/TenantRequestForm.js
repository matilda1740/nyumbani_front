import { Cancel, Home } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function TenantRequestForm() {

    const submitRequest = () => {

    }

    const handleChange = input => () => {

    }
    return (
        <section className="section_body">
            <div className="request_form_div">
                <h2 className="add_prod_title">Raise a Maintenance Ticket</h2>
                {/* {
                isError &&
                <div className="form_error form_inputs">
                    <p>{clientSideError}</p>
                </div> 
        
                }                     */}
                <form onSubmit={submitRequest} className="auth_form">

                <label className="form_labels">Type of Request</label>

                <select onChange={handleChange("request_type")} className="form_inputs" id="request_type" name="request_type">
                    <option value="" defaultValue>Select Ticket Type:</option>
                    <option value="1">Maintainance</option>
                    <option value="2">Checking In/Out</option>
                </select>     

                <label htmlFor="ticket_descr" className="form_labels">Ticket Description</label>
                <textarea className="form_inputs" id="" name="ticket_descr" rows="12"></textarea>
                <div className="form_footer">
                   <button type="submit" className="form_btn">Raise Ticket</button>
                   <Link to="/tenants/requests" className="back_home_div"><Cancel />Cancel</Link>

                </div>
                </form>

            </div>            
        </section>
    )
}
