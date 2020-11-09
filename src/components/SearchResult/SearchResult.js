import React from 'react'
import './SearchResult.css'
import cloud from '../../assets/cloud.svg'

function SearchResult() {
    return (
        <div className="searchlist_container">
            <p className="location_name">Mumbai, Maharashtra</p>
            <div className="meta_data_container">
                <div className="temp_icon">
                    <span className="meta_temp_data">26&#176; C</span>
                    <span className="meta_temp_status">Smoke</span>
                </div>
                <img src={cloud} alt=""/>
            </div>
        </div>
    )
}

export default SearchResult
