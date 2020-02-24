import React from "react";
import PokemonSASS from "./Pokemon.scss";

export default function Pokemon(props) {
  return (
    <div className="card shadow-sm mb-4 Pokemon">
      <div class="card-body pb-0">
        <h5 class="card-title">{props.name}</h5>
        <h6 class="card-subtitle mb-3 text-info">
          {props.awesome ? "Damn right" : "Whatever floats your goat"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? "YESSUR" : "nah"}
          <br />
          {props.abilities.length} abilities
        </p>
      </div>
      <ul className="list-group list-group-flush ">
        {props.abilities.map(ability => {
          return (
            <li className="list-group-item bg-info text-white">{ability}</li>
          );
        })}
      </ul>
    </div>
  );
}
