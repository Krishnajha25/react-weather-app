import React from 'react'
import './Card.css'
import Temperature from '../Temperature/Temperature'
// import Graph1 from '../Graph1/Graph1'
// import Graph2 from '../Graph2/Graph2'
import LineChart from '../LineChart/LineChart'

function Card() {
    return (
        <div className="card_container">
            <Temperature />
            
            <div className="lineChartContainer">
                <LineChart />
            </div>
            {/* <Graph1 />
            <Graph2 /> */}
        </div>
    )
}

export default Card
