import { Cancel, Home,CheckCircleOutline  } from '@mui/icons-material'
import React , {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function TenantPayment() {

    const history = useHistory();

    const [isCard, setIsCard] = useState(false);
    const [isMpesa, setIsMpesa] = useState(false);
    // const [payDetails, setPayDetails] = useState();
    const [payAmt, setPayAmt] = useState();
    const [payMethod, setPayMethod] = useState();
    const [payType, setPayType] = useState();


    const handleChange = input => (e) => {
        if(input === "paymentMethod"){
            if(e.target.value === "Card"){
                isCard ? setIsCard(false) : setIsCard(true)
                setIsMpesa(false)
            }else if(e.target.value === "Mpesa"){
                isMpesa ? setIsMpesa(false) : setIsMpesa(true)
                setIsCard(false)
            }else {
                setIsMpesa(false)
                setIsCard(false)
            }
        }

        input === "paymentAmount" ? setPayAmt(e.target.value) : 
        input === "paymentMethod" ? setPayMethod(e.target.value) :
        input === "paymentType" && setPayType(e.target.value)

    }

    const [ successAlert, setSuccessAlert] = useState(false);
    const [ alertMsg, setAlertMsg] = useState("");
    const alertStyle = { display: successAlert ? `flex`  : `none`}
    
    const handlePayment = (e) => {
        e.preventDefault();
        setSuccessAlert(true)
        setAlertMsg("Payment Initiated Successfully!")
        setTimeout(() => {
            setSuccessAlert(false)
            setAlertMsg("")   
            history.push({pathname: "/tenants/transactions", state: {
            paymentID: "4",
            propertyID: "10",
            recipientID: "1",
            senderID: "6",
            paymentDate: new Date().getFullYear()+ "-" + new Date().getMonth()   + "-" + new Date().getDate(),
            paymentAmount: payAmt,
            paymentMethod: payMethod,
            paymentType: payType,
            status: 0
        }})        
        }, 4000);        
    }
    return (
        <section className="section_body">
            <div className="user_alerts success" style={{ display: alertStyle.display }}>
                <p>{alertMsg}</p>
                <CheckCircleOutline />
                {/* <CancelOutlined /> */}
            </div>  
            <div className="payment_form_div">
                <h2 className="add_prod_title">Make a Payment</h2>
                <form onSubmit={handlePayment} className="auth_form">

                <label className="form_labels">Type of Payment</label>

                <select onChange={handleChange("paymentType")} className="form_inputs" id="paymentType" name="paymentType">
                    <option value="" defaultValue>Select Type:</option>
                    <option value="Rent">Rent</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Electricity">Electricity</option>
                </select> 

                <label className="form_labels">Payment Amount in Ksh.</label>
                <input onChange={handleChange("paymentAmount")} type="text" className="form_inputs" name="paymentAmount" />

                <label className="form_labels">Method of Payment</label>
                <select onChange={handleChange("paymentMethod")} className="form_inputs" id="paymentMethod" name="paymentMethod">
                    <option value="" defaultValue>Select Method:</option>
                    <option value="Card">Credit Card</option>
                    <option value="Mpesa">Mpesa</option>
                </select>     
                {
                    isCard ? 
                    <>
                        <label htmlFor="cardName" className="form_labels">Card Holder Name</label>
                        <input onChange={handleChange("cardName")} type="text" className="form_inputs" name="cardName" />   
                        <label htmlFor="cardNo" className="form_labels">Card Number</label>
                        <input onChange={handleChange("cardNo")} type="number" className="form_inputs" name="cardNo" />
                        <div className="form_row">
                        <label htmlFor="expiry_date" className="form_labels">Expiry Date</label>
                        <input onChange={handleChange("expiry_date")} type="date" className="form_inputs" name="expiry_date" />
                        <label htmlFor="cvc" className="form_labels">CVC</label>
                        <input onChange={handleChange("cvc")} type="number" className="form_inputs" name="cvc" />

                        </div>

                    </>
                    :
                    isMpesa ?
                    <>
                        <label htmlFor="mpesaNo" className="form_labels">Phone Number</label>
                        <input onChange={handleChange("mpesaNo")} type="text" className="form_inputs" name="mpesaNo" />                         
                    </>
                    :
                    <>
                    </>
                }

                <div className="form_footer">
                   <button type="submit" className="form_btn">Make Payment</button>
                   <Link to="/tenants/transactions"><Cancel />Cancel</Link>

                </div>
                
                </form>

            </div>            
        </section>
    )
}
