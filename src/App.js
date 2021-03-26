import React, { Component } from 'react'
import stays from './stays'

import './App.css';

import Stay from './components/Stay'
import SearchBar from './components/SearchBar'


class App extends Component {

  state = {
    stays: this.generateCards(),

  }


  generateCards(){

  }



  render(){
    return (
      <div className="App">
        <SearchBar />

        <div className="stays">
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
