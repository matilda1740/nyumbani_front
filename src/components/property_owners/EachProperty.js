import { AddBox, ContentCopy, Create, Delete, PermMedia, Receipt, YouTube } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'

export default function EachProperty({targetProperty,targetID}) {

    const [images, setImages] = useState();
    const [features, setFeatures] = useState();
    const [toggleOptions, setToggleOption] = useState();
    console.log(targetID, targetProperty, images);

    const [showImages, setShowImages] = useState(false);

    const showGallery = (e) => {
        showImages ? setShowImages(false) : setShowImages(true)
        // const gallery = document.querySelector(".other_images_section")
        // // if(gallery && showImages){
        // //     if(gallery.classList.contains("not_visible")) {
        // //         gallery.classList.remove("not_visible")
        // //         gallery.classList.add("visible") 
        // //     } else if(gallery.classList.contains("visible")){
        // //         gallery.classList.remove("visible")
        // //         gallery.classList.add("not_visible") 
        // //     }
        // // }else if(!showImages){

        // // }
    }
    useEffect(() => {
        if(targetProperty.propertyFeatures !== undefined && targetProperty.propertyFeatures !== null) {
            setFeatures(Object.keys(JSON.parse(targetProperty.propertyFeatures)))
        }
        if(targetProperty.otherImages !== undefined && targetProperty.otherImages !== null) {
        setImages(Object.values(JSON.parse(targetProperty.otherImages)))
        }
    }, [])
    return (
        <section className="each_property_section">
            <div className="section_routes_div">

            </div>

            <div className="section_body">
                <div className="prop_title listing_title">

                    <h3>{targetProperty.propertyDescription}</h3>
                </div>
            
                <div className="target_property_body">
                    <div className="image_section">
                        <div className="each_property_upper">
                            {/* <img src="/images/prop1.jpeg" alt="Property"/> */}
                            { 
                                targetProperty.thumbnailPhoto !== null ?
                                <img src={`/images/${targetProperty.thumbnailPhoto.replace(/["]+/g, '')}`} alt="Property"/>
                                :
                                <img src="/images/prop1.jpeg" alt="Property"/>
                            }                            
                        </div>
                        <div className="each_property_lower">
                            <div className="each_options">
                                <PermMedia />
                                <p onClick={showGallery}>{ !showImages ? "View " : "Hide "}Gallery</p>
                            </div>
                            <div className="each_options">
                                <AddBox /><p>Add to Listing</p>
                            </div>   
                            <div className="each_options">
                                <ContentCopy /><p>Copy Invite Link</p>
                            </div>
                            <div className="each_options">
                                <YouTube /><p>Add/Watch Video</p>
                            </div>
                        </div>
                        {
                            showImages ?
                            <div className="other_images_section">
                                {
                                    images?.length && images?.map((img)=>(
                                            <div className="each_other_image">
                                                <img src={`/images/${img}`} alt="Gallery" />
                                            </div>
                                            ))  
                                }
                            </div>
                            :
                            <div className="other_images_section"></div>
                        }
 
                    </div>

                    <div className="options_section">

                    </div>

                    <div className="details_section">
                        <div className="subsection_title">
                            <h4><em>Property Details</em></h4>
                            <Create/>
                        </div>
                        <div className="details_row">
                            <p className="details_labels">Property Description: </p>
                            <p className="details_values">This is a {targetProperty.bedrooms} bedroom, {targetProperty.bathrooms} bath <strong>{targetProperty.propertyType}</strong>, located in {targetProperty.propertyCounty} county.</p>
                        </div>                        
                                           
                        <div className="details_row">
                            <p className="details_labels">Physical Address</p>
                            <p className="details_values">{targetProperty.propertyPhysicalAddress}</p>
                        </div>   
                        <div className="details_row">
                            <p className="details_labels">Property Features: </p>
                            <p className="details_values">{features?.length ? features?.map(feat => `${feat} `): "None"} </p>
                        </div>
                        <div className="details_row">
                            <p className="details_labels">Property Rent: </p>
                            <p className="details_values">{targetProperty.propertyRent}</p>
                        </div>
                        <div className="details_row">
                            <p className="details_labels">Date Built: </p>
                            <p className="details_values">{targetProperty.dateBuilt}</p>
                        </div>  
   
                        
                            
                            {
                                targetProperty.tenantID !== null ?
                                <div className="details_row">
                                    <p className="details_labels">Occupancy Status
                                    <span className="request_btn status_closed">Occupied</span></p>
                                    <p className="details_values">This property has been occupied by {targetProperty.firstName + " " + targetProperty.lastName} from {targetProperty.dateRented}</p>                                </div>
                                :
                                <div className="details_row">
                                    <p className="details_labels">Occupancy Status</p>
                                    <p className="request_btn status_pending">Vacant</p>
                                </div>
                            }   

                        {/* <div className="details_row">
                            <p className="details_labels">Tenant Details</p>
                            
                        </div>   */}
                    </div>
                </div>

            </div>

        </section>
    )
}
