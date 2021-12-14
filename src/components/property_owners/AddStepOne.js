import { Cancel, Home } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddStepOne({steps, nextStep}) {
    
    const [propertyDetails, setPropertyDetails] = useState();
    const [prodImage, setProdImage] = useState();
    // const [otherImages, setOtherImages] = useState();
    const otherImages = []

    const loadImage = (event) => {
        event.preventDefault();
        const image = document.querySelector("#add_prop_image");
        if(event.target.files[0] !== undefined){
            // image.src = URL.createObjectURL(event.target.files[0]);
            image.style.display = "block"
            setProdImage(URL.createObjectURL(event.target.files[0]))
        }else {
            image.src = "/images/image_placeholder.jpeg";
        }
            console.log(image, event)     

    }

    const loadMultipleImages = (event) => {
        event.preventDefault();
        Array.from(event.target.files)?.map( img => otherImages.push(img.name.replace(/'/g, ''))
            )
        console.log(otherImages)     
        
    }

    const handleChange = input => (e) => {
        e.preventDefault();
        (input === "product_image") 
            ? loadImage(e) 
            : (input === "otherImages") && loadMultipleImages(e)
            // : setPropertyDetails({
            //                         ...propertyDetails, 
            //                         [input]:e.target.value.replace("C:\\fakepath\\", "")
            //                 })

    }

    return (
        <form className="add_property_form">

            <div className="form_column form_left form_image_upload">
                {/* <div className="form_quarter form_image_upload"> */}
                    <label className="form_labels">Upload Property Photos:</label>
                    <img id="add_prop_image" src={prodImage ? prodImage : "/images/image_placeholder.jpeg" } alt="Property" />	
                   <input 
                    onChange={handleChange("product_image")}  
                        type="file" className="form_inputs" name="product_image" accept="image/*"/>                  
                    
                    <label className="form_labels">Upload More Photos:</label>

                    <div className="added_images_div">

                    {
                        otherImages?.length ?
                            otherImages?.map( imgsrc => (
                            <img id="added_images" src={`/images/${imgsrc.replace(/'/g, "")}`}  alt="Property" />
                            ))
                            :
                            <>
                            <img id="added_images" src="/images/image_placeholder.jpeg" alt="" />
                            <img id="added_images" src="/images/image_placeholder.jpeg" alt="" />
                            <img id="added_images" src="/images/image_placeholder.jpeg" alt="" />                    
                            </>
                    }
                    </div>    
        
                    <input 
                    onChange={handleChange("otherImages")}  
                        type="file" className="form_inputs" name="otherImages" accept="image/*" multiple/>                                     
                {/* </div> */}


            </div>


            <div className="form_column form_right">
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
