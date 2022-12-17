import { useState } from "react";
let id = 20;

function CardForm({ crearPokemon }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [habilidad, setHabilidad] = useState("");

  const handleSubmit = (e) => {
    id++;
    e.preventDefault();
    crearPokemon(name, img, habilidad);
    setName("");
    setImg("");
    setHabilidad("");
  };
  return (
    <form className="d-flex flex-column justify-content-around align-items-center p-3 bg-body w-100" onSubmit={handleSubmit}>
      <h2 className="text-center badge bg-primary text-nowrap fs-2 text">
        Crea un nuevo Pokémon!!!!
      </h2>
      <div className="d-flex flex-wrap justify-content-around m-3 w-100">
        <input
          className="Default input border border-warning m-3 p-1"
          type="text"
          placeholder="Coloca una foto del pokémon(URL)!!"
          onChange={(e) => setImg(e.target.value)}
          style={{width: "300px"}}
          value={img}
        />
        <input
          className="border border-warning titulo m-3 p-1"
          type="text"
          placeholder="Inserta el nombre del pokémon"
          onChange={(e) => setName(e.target.value)}
          style={{width: "300px"}}
          value={name}
        />
        <input
          className="border border-warning m-3 p-1"
          type="text"
          placeholder="Dinos una de sus habilidades"
          onChange={(e) => setHabilidad(e.target.value)}
          style={{width: "300px"}}
          value={habilidad}
        />
      </div>
      <button className="btn btn-success">Añadir</button>
    </form>
  );
}

export default CardForm;
