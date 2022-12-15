import logo from "./assets/LogoDePokemon.png";
import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [serie, setSerie] = useState({ cargando: true, info: null });

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => {
        setSerie({ cargando: false, info: res.results });
      });
  }, []);
  return (
    <>
      <nav className="navbar sticky-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              alt="Logo"
              width="160"
              height="40"
              className="d-inline-block align-text-top"
              src={logo}
            />
          </a>
        </div>
      </nav>
      <h1 className="text-center text-primary shadow p-3 mb-5 bg-body rounded fw-bold">Pokémones</h1>
      <div className="container-cards">
        {serie.cargando ? (
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          serie.info.map((pokemon) => {
            return <Card info={pokemon.url} key={pokemon.name} />;
          })
        )}
      </div>
    </>
  );
}

export default App;
