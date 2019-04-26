import React, { Component } from "react";
import ShipCard from "./components/ShipCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ships from "./StarShips.json";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    ships,
    score: 0,
    topScore: 0,
    ids: []

  };

  handleClick = id => {
    console.log("this is id " + id)
    var isFound = this.state.ids.indexOf (id);
  
     if (isFound === -1) {
       var newScore = this.state.score +1;
       this.setState({score: newScore})
        if(this.state.topScore < newScore ){
          this.setState({topScore: newScore})
        }
       var check = [...this.state.ids,id];
       console.log("this is check " + check)
       this.setState({ids: check})
     }
     else{
      this.setState({score: 0, ids: []})
     }
     


    
    this.setState ({
      ships: this.shuffle(ships)
    })
  }
    // check if current id is in ids array
      // if id is in array end game and shuffle cards
      // if id is not in array then add to array, add one to score, checl to see if scrore > topscore if so make topScore = score and shuffle cards
  

    // shuffle ships array -- google js shuffle array
    shuffle(ships) {
      
      let i = ships.length -1;
      console.log("i=" + i)
      while (i > 0){
        const j = Math.floor(Math.random() * (i + 1));
        console.log(j)
        const place = ships[i];
        ships[i] = ships[j];
        ships[j] = place;
        i--;
      }
      return ships;
    }


   render() {
    return (
      <Wrapper>
        <Nav
        score = {this.state.score}
        topScore = {this.state.topScore}
        />

        <Title>Ship-List</Title>
        {this.state.ships.map(ship => (
          <ShipCard
            handleClick={this.handleClick}
            id={ship.id}
            key={ship.id}
            name={ship.name}
            image={ship.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
