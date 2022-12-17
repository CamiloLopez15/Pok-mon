import { useState, useEffect } from "react";
import "./Card.css";
import Card from "./Card";

function CardList({ info, eliminarPokemon }) {
  const [pokemonesUrl, setPokemonesUrl] = useState(info);
  useEffect(() => {
    setPokemonesUrl(info);
  }, [info]);
  return (
    <>
      <h1 className="p-3 mb-5 bg-body border-top border-secundary shadow-sm text-center text-primary fw-bold">
        Pokémones
      </h1>

      <div className="container-cards">
        {pokemonesUrl.map((pokemon) => {
          return (
            <Card
              info={pokemon.url}
              key={pokemon.name}
              eliminarPokemon={eliminarPokemon}
            />
          );
        })}
      </div>
    </>
  );
}

export default CardList;
