import React from 'react'
import './TempCard.css'
import cloud from '../../assets/cloud.svg'
import rain from '../../assets/rain.svg'
import sun from '../../assets/sun.svg'
import cloudy from '../../assets/cloudy.svg'

function TempCard(props) {

    const date = new Date(props.date);
    const daysArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const day = daysArray[date.getDay()];

    let weatherType
    let imgUrl
    if(props.weatherType === "clear sky"){
        weatherType = "Clear"
        imgUrl = sun
    }else if(props.weatherType === "scattered clouds"){
        weatherType = "Cloud"
        imgUrl = cloud
    }else if(props.weatherType === "light rain"){
        weatherType = "Drizzle"
        imgUrl = rain
    }else if(props.weatherType === "overcast clouds" || props.weatherType === "few clouds"){
        weatherType = "Cloudy"
        imgUrl = cloudy
    }

    return (
        <div className="temp_card">
            <input 
            className="selectDay" 
            type="radio" 
            name="inputR" 
            id="inputR" 
            onClick={() => props.click(props.date.substring(0, 10))}/>
            <div className="content">
                <span className="day">{day}</span>
                <span className="temp">
                    <span className="firstTemp">{ Math.ceil(props.maxTemp) }&#176;</span>
                    {Math.floor(props.minTemp)}&#176;
                </span>
                <img src={imgUrl} className="icons-img" alt="cloud"/>
                <span className="weather">{weatherType}</span>
            </div>
        </div>
    )
}

export default TempCard
