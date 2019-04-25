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
    console.log(id)
  };

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
