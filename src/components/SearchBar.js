import React, {Component} from 'react'
import PropTypes from 'prop-types'

import logo from '../assets/logo.svg'

import './SearchBar.scss'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: '',
            guests: 0,
            adults: 0,
            children: 0,
            isActive: false,
            handleSearchClick: this.props.handleSearchClick,
        }
    }

    handleSearchbarClick(e){
        e.stopPropagation()
        e.preventDefault()
        this.setState({ isActive: !this.state.isActive })
        console.log(e)
        
    }

    setLocation(e){
        this.setState({ location: e.target.dataset.location })
        e.stopPropagation()
    }

    removeLocation(e){
        this.setState({ location: '' })
        e.stopPropagation();   
    }

    updateGuests(){
        this.setState({ guests: this.state.adults + this.state.children })
    }
    
    addAdultGuest(e){
        this.state.adults < 20 ?
        this.setState({ adults: this.state.adults + 1}, this.updateGuests)
        : console.log('too many adults')
        e.stopPropagation()
    }

    addChildGuest(e){
        this.state.children < 20 ?
            this.setState({ children: this.state.children + 1},this.updateGuests)
            : console.log('too many children')
        e.stopPropagation()
    }

    removeAdultGuest(e){
        this.state.adults > 0 ?
        this.setState({ adults: this.state.adults - 1}, this.updateGuests)
        : console.log('too few adults')
        e.stopPropagation()
    }

    removeChildGuest(e){
        this.state.children > 0 ?
        this.setState({ children: this.state.children - 1}, this.updateGuests)
        : console.log('too few children')
        e.stopPropagation()
    }

    render(){
        return (
            <div className={`searchbar searchbar${this.state.isActive ? '--active' : '--inactive'}`}>

                <div className="searchbar__background"></div>

                <div className="searchbar__logo"><img src={logo} alt="logo windbnb"></img></div>
            
                <div className="searchbar__inputs" onClick={this.handleSearchbarClick.bind(this)}>
                    <div className="searchbar__location">
                        <p className="searchbar__label">LOCATION</p>
                        <p className={`searchbar__location-text ${this.state.location ? '' : 'placeholder'}`}>{this.state.location ? `${this.state.location}, Finland` : 'Add location'}</p>
                    
                        <li className="searchbar__location-list">
                            <ul data-location="" onClick={this.removeLocation.bind(this)}>
                                <i className="material-icons" >highlight_off</i>
                                Show every results
                            </ul>
                            <ul data-location="Helsinki" onClick={this.setLocation.bind(this)}>
                                <i className="material-icons">room</i>
                                Helsinki, Finland
                            </ul>
                            <ul data-location="Turku" onClick={this.setLocation.bind(this)}>
                                <i className="material-icons">room</i>
                                Turku, Finland
                            </ul>
                            <ul data-location="Oulu" onClick={this.setLocation.bind(this)}>
                                <i className="material-icons">room</i>
                                Oulu, Finland
                            </ul>
                            <ul data-location="Vaasa" onClick={this.setLocation.bind(this)}>
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
                                <p className={`number-button__variator ${this.state.adults < 1 ? 'number-button__variator--disabled' : ''}`} onClick={this.removeAdultGuest.bind(this)}>-</p>
                                <p className="number-button__display">{this.state.adults}</p>
                                <p className={`number-button__variator ${this.state.adults > 19 ? 'number-button__variator--disabled' : ''}`} onClick={this.addAdultGuest.bind(this)}>+</p>
                            </div>
                        </div>
                        <div className="searchbar__change-guests">
                            <p className="label">Children</p>
                            <p className="placeholder">Ages 2-12</p>
                            <div className="number-button">
                                <p className={`number-button__variator ${this.state.children < 1 ? 'number-button__variator--disabled' : ''}`} onClick={this.removeChildGuest.bind(this)}>-</p>
                                <p className="number-button__display">{this.state.children}</p>
                                <p className={`number-button__variator ${this.state.children > 19 ? 'number-button__variator--disabled' : ''}`} onClick={this.addChildGuest.bind(this)}>+</p>
                            </div>
                        </div>
                    </div>

                    <div className="searchbar__button" onClick={() => this.state.handleSearchClick(this.state.location, this.state.guests)}>
                        <i className="material-icons">search</i>
                        <p className="searchbar__button-text">Search</p>    
                    </div>
                    
                </div>

                <div className="searchbar__filter" onClick={this.handleSearchbarClick.bind(this)}>

                </div>
            </div>
            
        )
    }
}

SearchBar.propTypes = {
    handleSearchClick: PropTypes.func.isRequired,
}


export default SearchBar