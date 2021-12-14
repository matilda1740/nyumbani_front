import React from 'react'
import { Add, SentimentVeryDissatisfied, Visibility } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Properties({getTargetProperty,propDetails}) {

    console.log("Properties Component, Propery Details: ", propDetails);

    
    // const handleView = (e) => {

    // }
    return (
        <section className="properties_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {
                    propDetails?.length ? 
                    <>
                   <div className="prop_title">
                    <h3>You own {propDetails?.length} Properties</h3>
                    </div>
                    <div className="prop_div">
                        {propDetails.map(property => (
                                <div className="each_prop_div" key={property.propertyID}>
                                    <p className="each_prop_title">{property.propertyDescription}</p>
                                    <div className="image_cont">
                                    { 
                                            property.thumbnailPhoto !== null ?
                                            <img src={`/images/${property.thumbnailPhoto.replace(/["]+/g, '')}`} alt="Property"/>
                                            :
                                            <img src="/images/prop1.jpeg" alt="Property"/>
                                    }
                                        
                                    </div>
                                    <div className="info_cont">
                                        <div className="each_info">
                                            <p>Status: </p>
                                            {
                                                property.availability === "0"
                                                ?
                                                <div className="info_div isOccupied">Occupied</div>                                : property.availability === "1" &&
                                                <div className="info_div isVacant">Vacant</div>    
                                            }
                                        </div>
                                        <div className="each_info">
                                            <Link onClick={getTargetProperty(property, property.propertyID )} to={`/prop_owners/properties/${property.propertyID}`} className="info_div details">View Details</Link>
                                        </div> 
                                                                                                                {/* <Link to="/"><Visibility/></Link> */}
                         
                                    </div>
                                </div>
                            ))
                        }
                        <Link to="/prop_owners/add_properties" className="each_prop_div add_prop_div">
                            <Add className="add_prop_icon" />
                            <p className="add_prop_text">Add Property</p>
                        </Link>                         
                    </div>
                    </>
                    :
                    <>
                        <div className="add_prop_title">
                        <h3>You haven't added any properties yet </h3>
                        <SentimentVeryDissatisfied />
                        </div>                    
                        <Link to="/prop_owners/add_properties" className="add_prop_div">
                            <Add className="add_prop_icon" />
                            <p className="add_prop_text">Add Property</p>
                        </Link>   
                    </>
                }
            </div>
        </section>
    )
}
