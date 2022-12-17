import logo from "../assets/LogoDePokemon.png";

function Menu() {
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
    </>
  );
}

export default Menu;
