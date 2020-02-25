import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title.js";
import Pokemon from "./Pokemon/Pokemon.js";
import LikeCounter from "./Pokemon/LikeCounter";
import LikeButton from "./Pokemon/LikeButton";
import AwesomePokemon from "./Pokemon/AwesomePokemon";
import ArticleList from "./Pokemon/ArticleList";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"]
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"]
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"]
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"]
  }
];

function App() {
  return (
    <div className="App">
      <main className="container my-5">
        <Title content="POKEMAAAAANS" />
        <LikeCounter />
        <LikeButton />
        <div className="row mt-4">
          {all_pokemon.map(pokemon => {
            return (
              <div className="col-md-6 col-lg-4">
                <Pokemon
                  name={pokemon.name}
                  weight={pokemon.weight}
                  awesome={pokemon.awesome}
                  terrifying={pokemon.terrifying}
                  abilities={pokemon.abilities}
                />
              </div>
            );
          })}
        </div>
        <AwesomePokemon />
        <ArticleList />
        {/*
        <Pokemon
          name="Charizard"
          weight="true"
          terrifying="Damn right"
          abilities={["Blaze", "Solar Power", "Tough Claws", "Drought"]}
        />
        <Pokemon
          name="Bulbasaur"
          weight="6.9"
          awesome="true"
          terrifying="depends"
          abilities={["Overgrow", "Chlorophyll"]}
        />
        <Pokemon
          name="Mewtwo"
          weight="122"
          awesome="true"
          terrifying="Youre not?"
          abilities={["Pressure", "Unnerve", "Steadfast", "Insomnia"]}
        />
        <Pokemon
          name="Mega Drill"
          weight="65"
          terrifying="Its a massive wasp?!"
          abilities={["unnerve", "Intimidate"]}
        />
        */}
      </main>
    </div>
  );
}

export default App;
