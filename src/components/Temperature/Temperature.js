import React from 'react'
import './Temperature.css'
import cloud from '../../assets/cloud.svg'

function Temperature(props) {

    // const imgURL = `http://openweathermap.org/img/wn/${props.weatherTypeIcon}@2x.png`;

    return (
        <div className="temperature_container">
            <h1 className="temperature_temp">{props.currTemp}&#176;C</h1>
            
            <img src={cloud} alt=""/>

        </div>
    )
}

export default Temperature
