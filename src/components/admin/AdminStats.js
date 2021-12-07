import React from 'react'
import { Bar, Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale ,LinearScale,
//   PointElement,
//   LineElement, BarElement} from 'chart.js';
// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,   LinearScale,
//   PointElement,
//   LineElement,BarElement);

export default function AdminStats() {
// Chart.defaults.scale.gridLines.display = false;

    // const trans_options = {
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //         position: 'right',
    //         }
    //     },
    // };
    return (
        <section className="properties_section">
            <div className="section_routes_div">

            </div>
            <section className="section_body">
                <div className="prop_title listing_title">
                    <h3>App Analytics</h3>
                </div>              

                <section className="stats_divs_row">
                    <div className="stats_divs">
                        <div className="stats_heading_row">
                            <h3>User Information</h3>
                        </div>
                        <div className="stats_info_row">
                            <div className="stats_info_col stats_chart_div">
                                <Doughnut   
                                    datasetIdKey='id'
                                    options={{
                                        plugins: {
                                            legend: {
                                            position: 'bottom',
                                            },
                                        }
                                    }}                                
                                    data={{
                                    labels: ['Tenants', 'Property Owners'],
                                    datasets: [{
                                        data: [259000,321420],
                                        backgroundColor: ['#410001','#110041'],
                                    }]
                                }}
                                />
                            </div>
                            <div className="stats_info_col"></div>
                        </div>
                    </div>
                    <div className="stats_divs">
                        <div className="stats_heading_row">
                            <h3>Property Information</h3>
                        </div>
                        <div className="stats_info_row">
                            <div className="stats_info_col stats_chart_div">
                                <Doughnut
                                datasetIdKey='id'
                                options={{
                                        plugins: {
                                            legend: {
                                            position: 'bottom'
                                            }
                                        },                                       
                                    }}                                data={{
                                    labels: [' Vacant', ' Occupied'],
                                    datasets: [{
                                        data: [2789,545],
                                        backgroundColor: ['#200041','#410041'],
                                    }]
                                }}
                                />
                            </div>
                            <div className="stats_info_col"></div>
                        </div>
                    </div>
                    <div className="stats_divs bigger_div">
                        <div className="stats_heading_row">
                            <h3>Transactions Analysis</h3>
                        </div>
                        <div className="stats_info_row">
                            <div className="stats_info_col stats_chart_div">
                                <Bar
                                    datasetIdKey='id'
                                    options={{
                                        elements:{
                                               pointStyle: 'circle' 

                                        },
                                        plugins: {
                                            legend: {
                                            position: 'bottom',
                                            }
                                            ,
                                           
                                        }, 
                                        scales: {
                                            x: {
                                            grid: {
                                                display: false,
                                            },
                                            },
                                            y: {
                                            grid: {
                                                display: false,
                                            },
                                            },
                                        }

                                    }}
                                    data={{
                                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                                        datasets: [
                                            {
                                                label: 'Rent',
                                                data: [12, 23,45,11,65,90, 54,65, 78, 32, 45, 67],
                                                backgroundColor: '#007CA7'
                                            }
                                            ],
                                        
                                        }}
                                />;
                            </div>
                            <div className="stats_info_col"></div>
                        </div>
                    </div> 
                </section>

                {/* <section className="stats_divs_row"></section> */}
            </section>
        </section>
    )
}
