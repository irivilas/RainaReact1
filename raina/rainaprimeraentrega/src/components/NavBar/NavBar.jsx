import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";


export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2">
      <Link to={"/"}>
        <h4>Mi Tienda RAINA</h4>
      </Link>
      <div>
        <Link to={"/category/juguetes"}>
          <button className="btn btn-outline-dark mx-2">Juguetes</button>
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
};