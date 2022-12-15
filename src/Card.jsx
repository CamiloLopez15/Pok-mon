import { useState, useEffect } from "react";
import "./Card.css";

function Card({ info }) {
  const [data, setData] = useState({ cargando: true, info: null });

  useEffect(() => {
    fetch(info)
      .then((res) => res.json())
      .then((res) => {
        setData({ cargando: false, info: res });
      });
  }, []);
  // console.log(data.info.abilities[0].ability.name)
  return (
    <>
      {data.cargando ? (
        <></>
      ) : (
        <div className="card">
          <img
            src={data.info.sprites.other.home.front_default}
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
                  {data.info.abilities[0].ability.name}
                </i>
              </b>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
