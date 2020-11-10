import React from 'react'
import './SunTime.css'

function SunTime(props) {
    return (
        <div className="suntime_container">
            <div className="sun_time_container">
                <span className="text1">Sunrise</span>
                <span className="sun_time"> {props.sunrise+"am"} </span>
            </div>
            <div className="sun_time_container">
                <span className="text1">Sunset</span>
                <span className="sun_time"> {props.sunset+"pm"} </span>
            </div>
        </div>
    )
}

export default SunTime