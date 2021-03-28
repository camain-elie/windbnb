import React, {Component} from 'react'

import './SearchBar.scss'

class SearchBar extends Component {
    state = {
        location: '',
        guests: 0,
        isActive: false,
    }

    handleSearchClick(e){
        this.setState({ isActive: !this.state.isActive })
    }

    render(){
        return (
            <div className={`searchbar ${this.state.isActive ? 'searchbar--active' : ''}`}>
                <div className={this.className}><img src="../logo.svg" alt="logo windbnb"></img></div>
                


                <div className="searchbar__inputs" onClick={this.handleSearchClick.bind(this)}>
                    <input className="searchbar__location" placeholder="Add location" />
                    <input className="searchbar__guests" placeholder="Add guests" />
                    <button className="searchbar__button" ><img src="../search.svg" className="searchbar__search-icon" alt="search icon"></img></button>
                </div>

        
            </div>
        )
    }
}




export default SearchBar