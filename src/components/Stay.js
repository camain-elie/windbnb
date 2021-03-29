import React from 'react'
import './Stay.scss'

const Stay = ({city, country, superHost, title, rating, maxGuests, type, beds, photo}) => {

    return (
        <div className="stay">
            <div className="stay__image">
                <img src={photo} alt="stay" ></img>
            </div>

            <div className="stay__properties">
                <div className="stay__description">
                    {superHost && <div className="stay__superhost"><p>SUPER HOST</p></div>}
                    <div className="stay__type">{`${type} ${type === "Entire apartment" && beds !== null ?
                        (beds === 1 || beds === 0 ? ` . ${beds} bed` : ` . ${beds} beds`) : ''}`}</div>
                    <div className="stay__rating"><i className="material-icons">star</i>{rating}</div>
                </div>
                <div className="stay__title">
                    <p>{title}</p>
                </div>
            </div>

        </div>
    )
}

export default Stay