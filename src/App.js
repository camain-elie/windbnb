import React, { Component } from 'react'
import stays from './stays'

import './App.scss';

import Stay from './components/Stay'
import SearchBar from './components/SearchBar'


class App extends Component {

  state = {
    stays: this.generateCards(),
    displayedStays: stays,
    numberOfStays: 0,
  }


  generateCards(){

  }

  searchFunc = (e) => {
    console.log(e)
    
  }

  render(){
    return (
      <div className="App">
        <SearchBar searchFunction={this.searchFunc}/>

        <div className="stays">
          <div className="stays__header">
            <h1 className="stays__title">Stays in Finland</h1>
            <p className="stays__number">{`${this.state.numberOfStays} stay${this.state.numberOfStays > 1 ? 's' : ''}`}</p>
          </div>
          {stays.map((data, key) => 
          <Stay key={key} city={data.city} country={data.country}
            superHost={data.superHost} title={data.title}
            rating={data.rating} maxGuests={data.maxGuests}
            type={data.type} beds={data.beds}
            photo={data.photo} />
          
            

          )}
        </div>
  
        
      </div>
    )
  }
}





export default App;
