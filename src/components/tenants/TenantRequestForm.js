import { Cancel, Home, CheckCircleOutline } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function TenantRequestForm({addRequest}) {

    const history = useHistory();

    const [reqMessage, setReqMessage] = useState();

    const handleChange = input => (e) => {
        if(input === "request_message"){
            setReqMessage(e.target.value.trim());
        }
    }
    const [ successAlert, setSuccessAlert] = useState(false);
    const [ alertMsg, setAlertMsg] = useState("");
    const alertStyle = { display: successAlert ? `flex`  : `none`}

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessAlert(true)
        setAlertMsg("Maintenance Ticket Raised Successfully!")
        setTimeout(() => {
            setSuccessAlert(false)
            setAlertMsg("")   
            history.push(
                {pathname: "/tenants/requests", 
                state: {
                    requestID: 5, 
                    propertyID:10, 
                    tenantID: '6', 
                    dateRequested:  new Date().getFullYear()+ "-" + new Date().getMonth()   + "-" + new Date().getDate(), 
                    dateCompleted: "0000-00-00",
                    propertyPhysicalAddress: "Mzima Springs, Lavington",
                    requestMessage: reqMessage,
                    requestStatus: "0"
                    }
                 })        
        }, 4000);
                
    }

    return (
        <section className="section_body">
            <div className="user_alerts success" style={{ display: alertStyle.display }}>
                <p>{alertMsg}</p>
                <CheckCircleOutline />
                {/* <CancelOutlined /> */}
            </div>            
            <div className="request_form_div">
                <h2 className="add_prod_title">Raise a Maintenance Ticket</h2>
                {/* {
                isError &&
                <div className="form_error form_inputs">
                    <p>{clientSideError}</p>
                </div> 
        
                }                     */}
                <form onSubmit={handleSubmit} className="auth_form">

                <label className="form_labels">Type of Request</label>

                <select onChange={handleChange("request_type")} className="form_inputs" id="request_type" name="request_type">
                    <option value="" defaultValue>Select Ticket Type:</option>
                    <option value="Maintainance">Maintainance</option>
                    <option value="Checking In/Out">Checking In/Out</option>
                </select>     

                <label htmlFor="ticket_descr" className="form_labels">Ticket Description</label>
                <textarea onChange={handleChange("request_message")}  className="form_inputs" id="" name="ticket_descr" rows="12"></textarea>
                <div className="form_footer">
                   <button type="submit" className="form_btn">Raise Ticket</button>
                   <Link to="/tenants/requests" className="back_home_div"><Cancel />Cancel</Link>

                </div>
                </form>

            </div>            
        </section>
    )
}
