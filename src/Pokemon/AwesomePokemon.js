import React, { useState } from "react";

export default function AwesomePokemon() {
  const [value, setValue] = useState("Like This");

  const pokemonArray = [
    {
      name: "Chicken",
      awesome: 1
    },
    {
      name: "sloth",
      awesome: 2
    },
    {
      name: "porcupine",
      awesome: 3
    },
    {
      name: "Killer whale",
      awesome: 4
    },
    {
      name: "Velociraptor",
      awesome: 5
    }
  ];

  return (
    <div>
      <ul>
        {pokemonArray.map(pokemon => {
          return (
            <li>
              Awesomeness level {pokemon.awesome}: {pokemon.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
