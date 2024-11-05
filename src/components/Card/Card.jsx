import React from 'react'
import './Card.scss'

const Card = ({name ="скоро будет.." , img="/soon.gif"}) => {
    return (
        <>
            <div className="card">
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>66 отзывов</p>
                <button>купить</button>
            </div>
        </>
    )
}

export default Card
