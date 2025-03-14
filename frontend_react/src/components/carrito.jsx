import { Link, Outlet } from "react-router-dom";
import "../styles/carrito.css";

const Carrito = () => {
    return (
    <div>
        <div className="circulo">
            <div className="carrito">
                <img src="" alt="" />
                <Link to="/"> ventas</Link>
            </div>
        </div>
        <Outlet></Outlet>
    </div>
    );
};
export default Carrito;
