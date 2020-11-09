import React from 'react'
import './PressureHumidity.css'

function PressureHumidity() {
    return (
        <div className="pressure__humidity">
            <div className="pressure">
                <span className="pressure_text text1">Pressure</span>
                <span>1002 hpa</span>
            </div>
            <div className="humidity">
                <span className="humidity_text text1">Humidity</span>
                <span>30%</span>
            </div>
        </div>
    )
}

export default PressureHumidity
