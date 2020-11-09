import React from 'react'
import './Card.css'
import Temperature from '../Temperature/Temperature'
import Graph1 from '../Graph1/Graph1'
import Graph2 from '../Graph2/Graph2'

function Card() {
    return (
        <div className="card_container">
            <Temperature />
            <Graph1 />
            <Graph2 />
        </div>
    )
}

export default Card
