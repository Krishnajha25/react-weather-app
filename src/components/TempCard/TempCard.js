import React from 'react'
import './TempCard.css'
import cloud from '../../assets/cloud.svg'

function TempCard() {
    return (
        <div className="temp_card">
            <div className="content">
                <span className="day">Fri</span>
                <span className="temp">
                    <span className="firstTemp">28</span>
                    19
                </span>
                <img src={cloud} className="icons-img" alt="cloud"/>
                <span className="weather">Sunny</span>
            </div>
        </div>
    )
}

export default TempCard
