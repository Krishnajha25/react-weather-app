import React from 'react'
import './Temperature.css'
import cloud from '../../assets/cloud.svg'

function Temperature() {
    return (
        <div className="temperature_container">
            <h1 className="temperature_temp">26&#176;C</h1>
            <img src={cloud} alt=""/>
        </div>
    )
}

export default Temperature
