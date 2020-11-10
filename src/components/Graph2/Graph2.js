import React from 'react'
import './Graph2.css'
import SunTime from '../SunRisetSet/SunTime'

function Graph2(props) {

    var sunrise = props.sunrise
    var dateSunrise = new Date(sunrise * 1000);
    var hoursSunrise = dateSunrise.getHours();
    var minutesSunrise = "0" + dateSunrise.getMinutes();
    var sunriseTime = hoursSunrise + ':' + minutesSunrise.substr(-2);

    var sunset = props.sunset
    var dateSunset = new Date(sunset * 1000);
    var hoursSunset = dateSunset.getHours();
    var minutesSunset = "0" + dateSunset.getMinutes();
    var sunsetTime = hoursSunset + ':' + minutesSunset.substr(-2);


    // console.log(newTime)
    // console.log(new Date(props.sunset).time())

    return (
        <div className="graph2_container">
            <SunTime sunrise={sunriseTime} sunset={sunsetTime } />
        </div>
    )
}

export default Graph2
