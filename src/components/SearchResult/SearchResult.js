import React from 'react'
import './SearchResult.css'
import cloud from '../../assets/cloud.svg'

function SearchResult(props) {
    return (
        <div onClick={()=>props.submit(props.cityName, props.stateName)} className="searchlist_container">
            <p className="location_name">{props.cityName}, {props.stateName}</p>
            <div className="meta_data_container">
                <div className="temp_icon">
                    <span className="meta_temp_data">{props.temp}&#176; C</span>
                    <span className="meta_temp_status">{props.weatherType}</span>
                </div>
                <img src={cloud} alt=""/>
            </div>
        </div>
    )
}

export default SearchResult
