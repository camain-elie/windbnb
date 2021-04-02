import React, { Component } from 'react'
import stays from './stays'

import './App.scss';

import Stay from './components/Stay'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'


class App extends Component {

  constructor(props){
    super(props)
    
    let tstays = this.generateStays()
    this.setState({ stays: tstays}, this.searchFunc("", 1))

  }

  state = {
    stays: this.generateStays(),
    displayedStays: [],
    location: "",
    guests: 0,
  }

  componentDidMount(){
    this.generateDisplayedStays("", 0)
  }

 

  generateStays(){
    
    const staysList = stays.map((data,key) => {
      return (<Stay key={key} city={data.city} country={data.country}
        superHost={data.superHost} title={data.title}
        rating={data.rating} maxGuests={data.maxGuests}
        type={data.type} beds={data.beds}
        photo={data.photo} />)

    })
    staysList.push(<Stay key={14} />)
    
    return staysList
  }

  generateDisplayedStays(location, guests){

    const displayedStays = this.state.stays.filter((stay) => {

      return ((stay.props.city === location || location === '' ) && (stay.props.maxGuests >= guests))
    })
  

    this.setState({ displayedStays: displayedStays})

  }

  searchFunc = (location, guests) => {

    this.setState({ location: location, guests: guests}, this.generateDisplayedStays(location, guests))
  }

 

  render(){
    
    return (
      <div className="App">
        <SearchBar handleSearchClick={this.searchFunc.bind(this)}/>

        <div className="stays">
          <div className="stays__header">
            <h1 className="stays__title">Stays in Finland</h1>
            <div className="stays__clearblock"></div>
            <p className="stays__number">{`${this.state.displayedStays.length} stay${this.state.displayedStays.length > 1 ? 's' : ''}`}</p>
          </div>

          <div className="stays__content">
            {this.state.displayedStays}
          </div>
          
          
          {!this.state.displayedStays.length &&
            <div className="no-results">
              <h2>No Results</h2>
              
              <p>
                Sorry, we were unable to find any results matching your criteria.
              </p>
              <p>
                Maybe you should try again with another destination or leave some of your friends home ! ;)
              </p>
            </div>}
        </div>
  
        <Footer />
        
      </div>
    )
  }
}





export default App;
