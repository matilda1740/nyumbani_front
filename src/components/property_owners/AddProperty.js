import { Cancel, Home } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AddStepOne from './AddStepOne';
import AddStepTwo from './AddStepTwo';

export default function AddProperty() {

    const handleAddPropety = () => {

    }

    const [steps, setSteps] = useState(1)

    // HANDLE STEPS
    const nextStep = () => setSteps(steps + 1)

    const prevStep = () => steps !== 0 && setSteps(steps - 1)
    
    return (
        <section className="add_property_main">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
            <section className="add_prop_section"> 
                <h2 className="add_prod_title">Add New Property</h2>
                {   steps === 1 
                        ? <AddStepOne steps={steps} nextStep={nextStep}/>
                        : steps === 2 && <AddStepTwo steps={steps} prevStep={prevStep}/>
                }
                <div className="login_footer back_home_div add_footer">
                    <Link to="/prop_owners/properties"><Cancel />Cancel</Link>
                    <Link to="/prop_owners"><Home />Back Home</Link>
                </div>
            </section>             
            </div>        

        </section>
    )
}
