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
            <div className={`searchbar${this.state.isActive ? '--active' : '--inactive'}`}>

                <div className={this.className}><img src="../logo.svg" alt="logo windbnb"></img></div>
            
                <div className='searchbar__inputs' onClick={this.handleSearchClick.bind(this)}>
                    <div className="searchbar__location">
                        <p className="searchbar__label"></p>
                        <p className="searchbar__location-text">{this.state.location}</p>
                    
                        <li>
                            <ul>Every results</ul>
                            <ul>Helsinki, Finland</ul>
                            <ul>Turku, Finland</ul>
                            <ul>Oulu, Finland</ul>
                            <ul>Vaasa, Finland</ul>
                        </li>
                    </div>

                    <div className="searchbar__guests">
                        <p className="searchbar__label"></p>
                        <p className="searchbar__guests-text">{this.state.guests}</p>

                        <div className="searchbar__adults-guests">
                            <p className="label">Adults</p>
                            <p className="placeholder">Ages 13 or above</p>
                            <div className="number-button">
                                <p className="number-button__variator">-</p>
                                <p className="number-button__display">{this.state.children}</p>
                                <p className="number-button__variator">+</p>
                            </div>
                        </div>
                        <div className="searchbar__children-guests">
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
                        <i className=""></i>
                        <p className="searchbar__button-text">Search</p>    
                    </div>
                </div>
            
            </div>




            
                



        )
    }
}




export default SearchBar