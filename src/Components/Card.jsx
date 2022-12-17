import { useState, useEffect } from "react";
import "./Card.css";

function Card({ info, eliminarPokemon }) {
  const [data, setData] = useState({ cargando: true, info: null });
  const [url, setUrl] = useState("String");

  useEffect(() => {
    if (typeof info == "string") {
      fetch(info)
        .then((res) => res.json())
        .then((res) => {
          setData({ cargando: false, info: res });
        });
    } else {
      setUrl("Object");
      setData({ cargando: false, info: info });
    }
  }, []);

  return (
    <>
      {data.cargando ? (
        <></>
      ) : (
        <div className="card">
          <img
            src={
              url == "String"
                ? data.info.sprites.other.home.front_default
                : data.info.img
            }
            className="card-img-top"
            alt={data.info.name}
          />
          <div className="card-body">
            <h5 className="card-title text-capitalize">{data.info.name}</h5>
            <p className="card-text">
              Id: <b>{data.info.id}</b>
              <br />
              Habilidad:{" "}
              <b>
                <i className="text-capitalize">
                  {url == "String"
                    ? data.info.abilities[0].ability.name
                    : data.info.habilidad}
                </i>
              </b>
            </p>
            <a
              className="btn btn-primary"
              onClick={() => eliminarPokemon(data.info.name)}
            >
              Eliminar
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
