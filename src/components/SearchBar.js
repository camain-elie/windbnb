import React, {Component} from 'react'

import './SearchBar.scss'

class SearchBar extends Component {
    state = {
        location: '',
        guests: 0,
        adults: 0,
        children: 0,
        isActive: false,
    }

    handleSearchClick(e){
        this.setState({ isActive: !this.state.isActive })
    }

    render(){
        return (
            <div className={`searchbar searchbar${this.state.isActive ? '--active' : '--inactive'}`}>

                <div className="searchbar__logo"><img src="../logo.svg" alt="logo windbnb"></img></div>
            
                <div className="searchbar__inputs" onClick={this.handleSearchClick.bind(this)}>
                    <div className="searchbar__location">
                        <p className="searchbar__label">LOCATION</p>
                        <p className={`searchbar__location-text ${this.state.location ? '' : 'placeholder'}`}>{this.state.location ? this.state.location : 'Add location'}</p>
                    
                        <li className="searchbar__location-list">
                            <ul>
                                <i className="material-icons">highlight_off</i>
                                Every results
                            </ul>
                            <ul>
                                <i className="material-icons">room</i>
                                Helsinki, Finland
                            </ul>
                            <ul>
                                <i className="material-icons">room</i>
                                Turku, Finland
                            </ul>
                            <ul>
                                <i className="material-icons">room</i>
                                Oulu, Finland
                            </ul>
                            <ul>
                                <i className="material-icons">room</i>
                                Vaasa, Finland
                            </ul>
                        </li>
                    </div>

                    <div className="searchbar__guests">
                        <p className="searchbar__label">GUESTS</p>
                        <p className={`searchbar__guests-text ${this.state.guests ? '' : 'placeholder'}`}>
                            {this.state.guests ? this.state.guests + ' guests': 'Add guests'}
                        </p>

                        <div className="searchbar__change-guests">
                            <p className="label">Adults</p>
                            <p className="placeholder">Ages 13 or above</p>
                            <div className="number-button">
                                <p className="number-button__variator">-</p>
                                <p className="number-button__display">{this.state.children}</p>
                                <p className="number-button__variator">+</p>
                            </div>
                        </div>
                        <div className="searchbar__change-guests">
                            <p className="label">Children</p>
                            <p className="placeholder">Ages 2-12</p>
                            <div className="number-button">
                                <p className="number-button__variator">-</p>
                                <p className="number-button__display">{this.state.adults}</p>
                                <p className="number-button__variator">+</p>
                            </div>
                        </div>
                    </div>

                    <div className="searchbar__button" >
                        <i className="material-icons">search</i>
                        <p className="searchbar__button-text">Search</p>    
                    </div>
                    
                </div>
            
            </div>




            
                



        )
    }
}




export default SearchBar