import React from 'react'
import './Stay.scss'

const Stay = ({city, country, superhost, title, rating, maxGuests, type, beds, photo}) => {
    console.log(photo)
    return (
        <div className="stay">
            <div className="stay__image">
                <img src={photo} alt="stay"></img>
            </div>

            <div className="stay__properties">
                <div className="stay__description">
                    {superhost && <p className="stay__superhost">SUPER HOST</p>}
                    <div className="stay__type">{type}</div>
                    <div className="stay__rating">{rating}</div>
                </div>
                <div className="stay__title">
                    <p>{title}</p>
                </div>
            </div>

        </div>
    )
}

export default Stay