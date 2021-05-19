import React, { Component } from "react";
import Card from "./Card";
import "./cardContainer.css";

class CardContainer extends Component {
  state = {
    searchCriteria: "",
    pokemonList: [],
    pokemonBerries: [],
    pokemonName: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  };

 componentDidMount() {
    this.setState({
      pokemonList: this.props.pokemonData[0].pokemon,
    });
  }

  searchCriteria = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      searchCriteria: search,
    });
  };

  sendPokemonToData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  onSubmit = (event, filteredData) => {
    event.preventDefault();
    const newPokemon = {
      name: this.state.pokemonName,
      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl,
      },
    };
    
    const newPokemonList = [newPokemon,...this.state.pokemonList]
    this.setState({
      pokemonList: newPokemonList,
    });
  };

  render() {
    const {pokemonList} = this.state
    const filteredData = pokemonList.filter((pokemon) =>
      pokemon.name.includes(this.state.searchCriteria)
    )
      ? pokemonList.filter((pokemon) =>
          pokemon.name.includes(this.state.searchCriteria)
        )
      : pokemonList

    return (
      <div className="main-card-container">
        <div>
          <input
            name="pokemonName"
            className="search-field"
            onChange={(e) => this.searchCriteria(e)}
            type="text"
            placeholder="Search for a pokemon"
          />
        </div>
        {/* form */}
        <div>
          
          <form onSubmit={(e) => this.onSubmit(e, filteredData)}>
            <input
              name="pokemonName"
              className="create-field"
              type="text"
              placeholder="Enter a Name"
              value={this.state.pokemonName}
              onChange={(e) => this.sendPokemonToData(e)}
            />
            <input
              name="hp"
              className="create-field"
              type="text"
              placeholder="Enter a HP"
              value={this.state.hp}
              onChange={(e) => this.sendPokemonToData(e)}
            />
            <input
              name="frontUrl"
              className="create-field"
              type="text"
              placeholder="Enter front URL"
              value={this.state.frontUrl}
              onChange={(e) => this.sendPokemonToData(e)}
            />
            <input
              name="backUrl"
              className="create-field"
              type="text"
              placeholder="Enter back URL"
              value={this.state.backUrl}
              onChange={(e) => this.sendPokemonToData(e)}
            />
            <input className="create-field" type="submit" value="Submit" />
          </form>
        </div>
        <div className="card-container">
          {filteredData.map((singlePokemon, index) => (
            <Card key={singlePokemon.name} pokemon={singlePokemon} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardContainer;