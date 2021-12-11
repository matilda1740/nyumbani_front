import React from 'react'
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
/* 
    1. BACKGROUNG IMAGE
    2. HEADER 
    3. INTRODUCE REAL ESTATE SYSTEM
    4. PROMPT LOGIN/REGISTER
    5. LIST SERVICES: P/O, TENANTS
*/
export default function Home() {
    return (
        <section className="module_app_base">
            {/* <section className="module_app_body"> */}
                {/* HEADER */}
                {/* BANNER SECTION OVERLAY  */}
                <section className="main_header">
                    <div className="main_header_left">
                        <img src="/images/logo.png" alt="Logo"/>
                    </div>

                    <div className="main_header_middle">
                        <p className="header_selection">Home</p>
                        <p className="header_selection">Product</p>
                        <p className="header_selection">About</p>
                        <p className="header_selection">Testimonials</p>
                        <p className="header_selection">Contact Us</p>
                    </div>

                    <div className="main_header_right">
                        <Link to="/login" className="btns login_btn">Login</Link>
                        <Link to="/register" className="btns signup_btn">Sign Up</Link>
                    </div>
                </section>
                <div className="banner_section">
                    <img src="/images/home_bg.svg" alt="Home Background"/>
                    {/* UPPER TRIANGLE */}
                    {/* <div className="banner_upper_triangle"></div> */}
                    {/* LOWER TRIANGLE */}
                </div>

            {/* </section> */}
        </section>
    )
}
