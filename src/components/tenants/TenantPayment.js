import { Cancel, Home } from '@mui/icons-material'
import React , {useState} from 'react'
import { Link } from 'react-router-dom'

export default function TenantPayment() {

    const [isCard, setIsCard] = useState(false);
    const [isMpesa, setIsMpesa] = useState(false);

    const handlePayment = () => {

    }

    const handleChange = input => (e) => {

        if(input === "payment_method"){
            if(e.target.value === "card"){
                isCard ? setIsCard(false) : setIsCard(true)
                setIsMpesa(false)
            }else if(e.target.value === "mpesa"){
                isMpesa ? setIsMpesa(false) : setIsMpesa(true)
                setIsCard(false)
            }else {
                setIsMpesa(false)
                setIsCard(false)
            }
        }
    }
    return (
        <section className="section_body">
            <div className="payment_form_div">
                <h2 className="add_prod_title">Make a Payment</h2>
                {/* {
                isError &&
                <div className="form_error form_inputs"> 
                    <p>{clientSideError}</p>
                </div> 
        
                }                     */}
                <form onSubmit={handlePayment} className="auth_form">

                <label className="form_labels">Type of Payment</label>

                <select onChange={handleChange("payment_type")} className="form_inputs" id="request_type" name="request_type">
                    <option value="" defaultValue>Select Type:</option>
                    <option value="rent">Rent</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="electricity">Electricity</option>
                </select> 

                <label className="form_labels">Payment Amount in Ksh.</label>
                <input onChange={handleChange("payAmt")} type="text" className="form_inputs" name="payAmt" />

                <label className="form_labels">Method of Payment</label>
                <select onChange={handleChange("payment_method")} className="form_inputs" id="request_type" name="request_type">
                    <option value="" defaultValue>Select Method:</option>
                    <option value="card">Credit Card</option>
                    <option value="mpesa">Mpesa</option>
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
