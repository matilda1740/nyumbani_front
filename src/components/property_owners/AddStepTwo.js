import { ArrowBack, CodeSharp, Room } from '@mui/icons-material'
import React, {useState} from 'react'

export default function AddStepTwo({steps, prevStep}) {
    
    const [geoLocate, setGeoLocate] = useState(false);
    const findMe = () => {
        setGeoLocate(true) 

        const status = document.querySelector(".geoStatus");
        const mapLink = document.querySelector('.map-link');

        if(status !== undefined && status !== null) {
            function success(position){
                const latitude  = position.coords.latitude;
                const longitude = position.coords.longitude;

                status.textContent = '';
                // mapLink.src = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
                mapLink.src = `https://maps.google.com/maps/embed/v1/place?&q=${latitude}',${longitude}`;
                mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
            };
            function error(){
                status.textContent = 'Unable to retrieve your location';
            }

            if(!navigator.geolocation) {
                status.textContent = 'Geolocation is not supported by your browser';
            } else {
                status.textContent = 'Locating…';
                navigator.geolocation.getCurrentPosition(success, error);
            } 
        }
        
      
    }

    const howTolocate = value => (e) => {

        e.preventDefault();
        (value === "enter") 
            ? setGeoLocate(false)
            : findMe()
    }
    return (
        <form className="add_property_form">

            <div className="form_column locate_form">
                <h3>Location Details</h3>

                <div className="locate_row">
                    <button onClick={howTolocate("enter")} className="each_sf_option">Enter Details</button>
                    <button onClick={howTolocate("find_me")} className="each_sf_option">Use Current Location</button>
                </div> 

                {
                    geoLocate 
                    ? 
                    <>
                        <h4 className="geoStatus"></h4>
                        <iframe title="map-link" className="map-link" width="100%" height="300" frameBorder="0"  marginHeight="0" marginWidth="0"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Malet%20St,%20London%20WC1E%207HU,%20United%20Kingdom+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 

                    </>
                    :
                    <>
                        <label className="form_labels">Physical Address:</label>
                        <input 
                        type="text" className="form_inputs" name="property_rent" />                     
                    <label className="form_labels">County:</label>
                    <select className="form_inputs" id="property_type">
                        <option value="" disabled defaultValue>Select County</option>
                        <option value="">Nairobi</option>
                        <option value="">Meru</option>
                    </select>
                    <label className="form_labels">Sub-County:</label>
                    <select className="form_inputs" id="property_type">
                        <option value="" disabled defaultValue>Select Sub-County</option>
                        <option value="">Karen</option>
                        <option value="">Roysambu</option>
                        <option value="">Madaraka</option>
                    </select>
                    </>
                }
                        
            </div>

            <div className="form_column form_right">
                <label className="form_labels">Property Size:</label>
                <input type="text" className="form_inputs" name="property_name"/>

                <label className="form_labels">Land Size:</label>
                <input type="text" className="form_inputs" name="property_descr" />

                <label className="form_labels">No of Rooms:</label>
                <input 
                type="text" className="form_inputs" name="property_rent" />   

 
                <label className="form_labels">Date Built:</label>
                <input 
                type="date" className="form_inputs" name="property_rent" />                                                                
                {
                    steps === 2 && 
                    <div className="nav_row">
                    <p onClick={prevStep}><ArrowBack/>Prev</p>
                    <button className="form_btn">Complete</button>
 
                    </div>
                }
            </div>
        </form>

    )
}
