import { Filter, Search, Sort } from '@mui/icons-material'
import React from 'react'

export default function Applications() {
    return (
        <section class="applications_section">
            <div className="section_routes_div">

            </div>
            <div className="section_body">
                {/* TITLE */}
                    <div className="prop_title listing_title">
                        <h3>Applications</h3>
                        <p>You have 8 Applications</p>
                    </div>                  
                {/* SEARCH SORT AND FILTER OPTIONS SECTION */}
                    <div className="sf_options_div">
                        <button className="each_sf_option"><Sort /><p>Sort</p></button>
                        <button className="each_sf_option"><Filter /><p>Filter</p></button>
                        <button className="each_sf_option"><Search /><p>Search</p></button>
                    </div>
                {/* TABLE */}
                <div className="table_area">
                    <table className="applications_table">
                        <thead>
                            <tr>
                                <th>Client Name</th>
                                <th>Phone Number</th>
                                <th>Interested in</th>
                                <th>Application Date</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>Jerry Seinfeld</td>
                                    <td>+254 711111111</td>
                                    <td>Maisionette</td>
                                    <td>25th March 2000</td>
                                    <td><p className="details">View Details</p></td>
                                </tr>
                                <tr>
                                    <td>Jerry Seinfeld</td>
                                    <td>+254 711111111</td>
                                    <td>Maisionette</td>
                                    <td>25th March 2000</td>
                                    <td><p className="details">View Details</p></td>
                                </tr>
                                <tr>
                                    <td>Jerry Seinfeld</td>
                                    <td>+254 711111111</td>
                                    <td>Maisionette</td>
                                    <td>25th March 2000</td>
                                    <td><p className="details">View Details</p></td>
                                </tr>
                                <tr>
                                    <td>Jerry Seinfeld</td>
                                    <td>+254 711111111</td>
                                    <td>Maisionette</td>
                                    <td>25th March 2000</td>
                                    <td><p className="details">View Details</p></td>
                                </tr>
                                <tr>
                                    <td>Jerry Seinfeld</td>
                                    <td>+254 711111111</td>
                                    <td>Maisionette</td>
                                    <td>25th March 2000</td>
                                    <td><p className="details">View Details</p></td>
                                </tr>
                        </tbody>    
                    </table>  
                </div>

            </div>            
           
        </section>
    )
}
