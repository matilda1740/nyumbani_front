import { Cancel, Home } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AddStepOne({steps, nextStep}) {
    return (
        <form className="add_property_form">

            <div className="form_column form_left form_image_upload">
                {/* <div className="form_quarter form_image_upload"> */}
                    <label className="form_labels">Upload property Photo:</label>
                    <img id="add_prop_image" src="/images/image_placeholder.jpeg" alt="Property" />	    
                <div className="added_images_div">
                    <img id="added_images" src="/images/image_placeholder.jpeg" alt="" />
                    <img id="added_images" src="/images/image_placeholder.jpeg" alt="" />
                    <img id="added_images" src="/images/image_placeholder.jpeg" alt="" />
                </div>                            
                    <input type="file" className="form_inputs" name="property_image" accept="image/*"/> 
                {/* </div> */}


            </div>


            <div className="form_column form_right">
                <label className="form_labels">Property Name:</label>
                <input type="text" className="form_inputs" name="property_name"/>

                <label className="form_labels">Property Description:</label>
                <input type="text" className="form_inputs" name="property_descr" />

                <label className="form_labels">Property Type:</label>
                <select className="form_inputs" id="property_type">
                    <option value="" disabled defaultValue>Select Type</option>
                    <option value="">Apartment</option>
                    <option value="">Bungalow</option>
                </select>
                <label className="form_labels">Expected Rent:</label>
                <input 
                type="text" className="form_inputs" name="property_rent" />   

                <label className="form_labels">Amenities:</label>                        
                <select className="form_inputs" id="property_amenities">
                    <option value="" disabled defaultValue>Select Available Amenties</option>
                    <option value="">Swimming Pool</option>
                    <option value="">Outdoor Grill</option>
                    <option value="">Treehouse</option>
                    <option value="">Gymnasium</option>
                    <option value="">RoofTop Garden</option>

                </select>                                                               
                {
                    steps === 1 && 
                    <button onClick={nextStep} className="form_btn">Next</button>
                }
                

            </div>
        </form>
    )
}
