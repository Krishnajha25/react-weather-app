import React from 'react'
import './TempCard.css'
import cloud from '../../assets/cloud.svg'

function TempCard() {
    return (
        <div className="temp_card">
            <input className="selectDay" type="radio" name="inputR" id="inputR"/>
            <div className="content">
                <span className="day">Fri</span>
                <span className="temp">
                    <span className="firstTemp">28&#176;</span>
                    19&#176;
                </span>
                <img src={cloud} className="icons-img" alt="cloud"/>
                <span className="weather">Sunny</span>
            </div>
        </div>
    )
}

export default TempCard
