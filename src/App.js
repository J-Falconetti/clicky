import React, { Component } from "react";
import FriendCard from "./components/ShipCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ships from "./StarShips.json";

class App extends Component {
  state = {
    ships
  };

  removeFriend = id => {
    const ships = this.state.shipss.filter(ship => ship.id !== id);
    this.setState({ ships });
  };

   render() {
    return (
      <Wrapper>
        <Title>Ship-List</Title>
        {this.state.ships.map(ship => (
          <FriendCard
            removeship={this.removeship}
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
