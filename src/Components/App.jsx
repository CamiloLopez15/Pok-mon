import { useEffect, useState } from "react";
import CardList from "./CardList";
import Menu from "./Menu";
import CardForm from "./CardForm";
let id = 20;

function App() {
  const [data, setData] = useState({ cargando: true, info: null });
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => {
        setData({ cargando: false, info: res.results });
      });
  }, []);

  function crearPokemon(name, img, habilidad) {
    id = id + 1;
    let newState = [
      ...data.info,
      {
        name,
        url: {
          img,
          name,
          id,
          habilidad,
        },
      },
    ];
    setData({ cargando: false, info: newState });
  }

  function eliminarPokemon(pokemonId) {
    setData({
      cargando: false,
      info: data.info.filter((pokemon) => pokemon.name !== pokemonId),
    });
  }

  return (
    <>
      <Menu />
      <CardForm crearPokemon={crearPokemon} />
      {data.cargando ? (
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <CardList info={data.info} eliminarPokemon={eliminarPokemon}></CardList>
      )}
    </>
  );
}

export default App;
