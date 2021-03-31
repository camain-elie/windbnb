import React, { Component } from 'react'
import stays from './stays'

import './App.scss';

import Stay from './components/Stay'
import SearchBar from './components/SearchBar'


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

  componentWillReceiveProps(){
    
  }

  generateStays(){
    
    const staysList = stays.map((data,key) => {
      return (<Stay key={key} city={data.city} country={data.country}
        superHost={data.superHost} title={data.title}
        rating={data.rating} maxGuests={data.maxGuests}
        type={data.type} beds={data.beds}
        photo={data.photo} />)

    })
    console.log(staysList, 'stays generated in generateStays')
    return staysList
  }

  generateDisplayedStays(location, guests){
    console.log(this.state.location, this.state.guests, 'generateDisplayedStays', location, guests)
    const displayedStays = this.state.stays.filter((stay) => {

      return ((stay.props.city === location || location === '' ) && (stay.props.maxGuests >= this.state.guests))
    })
    console.log( this.state.stays, this.state.displayedStays, 'generateDisplayedStays 2' )

    this.setState({ displayedStays: displayedStays})

  }

  searchFunc = (alocation, guests) => {
    console.log(alocation, guests, ' in searchFunc')
    this.setState({ location: alocation, guests: guests}, this.generateDisplayedStays(alocation, guests))
  }

 

  render(){
    
    return (
      <div className="App">
        <SearchBar handleSearchClick={this.searchFunc.bind(this)}/>

        <div className="stays">
          <div className="stays__header">
            <h1 className="stays__title">Stays in Finland</h1>
            <p className="stays__number">{`${this.state.displayedStays.length} stay${this.state.displayedStays.length > 1 ? 's' : ''}`}</p>
          </div>

          {this.state.displayedStays}
        </div>
  
        {console.log(this.state.stays, this.state.displayedStays, 'render')}
        
      </div>
    )
  }
}





export default App;
