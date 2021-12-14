import { CheckCircleOutline } from '@mui/icons-material'
import React, { useState } from 'react'

export default function Notifications() {

    const [ alertType, setAlertType] = useState({success: false, failure: false});
    const [ alertMsg, setAlertMsg] = useState("");

    // const alertStyle = { display: successAlert ? `flex`  : `none`}

    return (
    // <div className="user_alerts success" style={{ display: alertStyle.display }}>
    //     <p>{alertMsg}</p>
    //     <CheckCircleOutline />
    //     {/* <CancelOutlined /> */}

    // </div>  
    )
}
