import { AddBox, ContentCopy, Create, Delete, PermMedia, Receipt, YouTube } from '@mui/icons-material';
import React from 'react'

export default function EachProperty({propTargetID}) {
    console.log(propTargetID);

    // const [isShowActive, setShowActive]
    return (
        <section className="each_property_section">
            <div className="section_routes_div">

            </div>

            <div className="section_body">
                <div className="prop_title listing_title">

                    <h3>Upper West Side Apartments</h3> {/* Property Name */}
                    {/* <p>You have 3 active each_propertys</p> */}
                </div>
            
                <div className="target_property_body">
                    <div className="image_section">
                        <div className="each_property_upper">
                            <img src="/images/prop1.jpeg" alt="Property"/>
                        </div>
                        <div className="each_property_lower">
                            <div className="each_options">
                                <PermMedia />
                                <p>Show Gallery</p>
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

                        {/* DIV WITH OTHER IMAGES */}

                    </div>

                    <div className="options_section">

                    </div>

                    <div className="details_section">
                        <div className="subsection_title">
                            <h4><em>Property Details</em></h4>
                            <Create/>
                        </div>

                        <div className="details_row">
                            <p className="details_labels">Property Type: </p>
                            <p className="details_values">Apartments</p>
                        </div>
                        <div className="details_row">
                            <p className="details_labels">Property Description: </p>
                            <p className="details_values">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eos perferendis exercitationem! Nulla ut, voluptates animi consequuntur tempore eveniet alias?</p>
                        </div>
                        <div className="details_row">
                            <p className="details_labels">Location: </p>
                            <p className="details_values">Nairobi, Kenya</p>
                        </div>                                             
                        <div className="details_row">
                            <p className="details_labels">Physical Address</p>
                            <p className="details_values">111111 - 00100</p>
                        </div>   
                        <div className="details_row">
                            <p className="details_labels">Amenities</p>
                            <p className="details_values">Parking Spaces, WheelChair Accessibility</p>
                        </div>  

                    </div>
                </div>

            </div>

        </section>
    )
}
