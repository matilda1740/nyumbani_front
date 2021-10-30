import React from 'react'
import { Add, SentimentVeryDissatisfied } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Properties() {
    return (
        <div className="properties_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {/* IF NO PROPERTIES */}
                {/* <div className="add_prop_title">
                <h3>You haven't added any properties yet </h3>
                <SentimentVeryDissatisfied />
                </div>
                <Link to="/prop_owners/add_properties" className="add_prop_div">
                    <Add className="add_prop_icon" />
                    <p className="add_prop_text">Add Property</p>
                </Link>    */}

                {/* IF PROPERTIES */}
                <div className="prop_title">
                    <h3>You own 3 Properties</h3>
                    </div>
                    <div className="prop_div">
                        <div className="each_prop_div">
                            <div className="image_cont">
                                <img src="/images/prop1.jpeg" alt="Property"/>
                            </div>
                            <div className="info_cont">
                                <div className="each_info">
                                    <p>Status: </p>
                                    <div className="info_div isOccupied">Occupied</div>
                                </div>
                                <div className="each_info">
                                    <div className="info_div details">View Details</div>
                                </div>                            
                            </div>
                        </div>

                        <div className="each_prop_div">
                            <div className="image_cont">
                                <img src="/images/prop1.jpeg" alt="Property"/>
                            </div>
                            <div className="info_cont">
                                <div className="each_info">
                                    <p>Status: </p>
                                    <div className="info_div isVacant">Vacant</div>
                                </div>
                                <div className="each_info">
                                    <div className="info_div details">View Details</div>
                                </div>                            
                            </div>
                        </div>

                        <div className="each_prop_div">
                            <div className="image_cont">
                                <img src="/images/prop1.jpeg" alt="Property"/>
                            </div>
                            <div className="info_cont">
                                <div className="each_info">
                                    <p>Status: </p>
                                    <div className="info_div isOccupied">Occupied</div>
                                </div>
                                <div className="each_info">
                                    <div className="info_div details">View Details</div>
                                </div>                            
                            </div>
                        </div>

                        <Link to="/prop_owners/add_properties" className="each_prop_div add_prop">
                            <Add className="add_prop_icon" />
                            <p className="add_prop_text">Add Property</p>
                        </Link> 

                    </div>
            </div>
        </div>
    )
}
