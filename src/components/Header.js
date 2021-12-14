import { Email, Notifications, Person, Settings } from '@mui/icons-material'
import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header({logoutUser, loginData, currentUserData}) {

    const [y, setY] = useState(window.scrollY);
    const headerDiv = document.querySelector(".prop_owners_header_section")

    const handleNavigation = useCallback(
    e => {
        const window = e.currentTarget;
        if(window.scrollY > 1) { 
            
            if(headerDiv !== null && headerDiv.classList.contains("header_notscrolled")) {
                headerDiv.classList.remove("header_notscrolled")
                headerDiv.classList.add("header_scrolled")
            }
        } else {
            if(headerDiv !== null && headerDiv.classList.contains("header_scrolled")) {
                headerDiv.classList.remove("header_scrolled")
                headerDiv.classList.add("header_notscrolled")
            }
        }
        setY(window.scrollY);
    }, [y]
    );

    useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
        window.removeEventListener("scroll", handleNavigation);
    };
    }, [handleNavigation]);

    return (
        <div className="prop_owners_header_section header_notscrolled">

            <div className="left_header">
                 <Link onClick={logoutUser()} to="/login" className="profile_div">
                 <Person />
                 {
                     loginData ?
                    <p>{loginData.email}</p>                    
                    // <p>{currentUserData.firstName + " " + currentUserData.lastName}</p> */}
                    : <p>Anonymous</p>
                 }
                    
                </Link>
           
                <Notifications />
                <Email />
                <Settings />
            </div>
        </div>
    )
}
