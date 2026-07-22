import {NavLink, Outlet} from "react-router-dom";
import Header from "../assets/Header.jsx";

const Navbar = () => (
    <div>
        <header>
            <Header title="National Geographic"/>
            <nav style={{marginTop: "30px"}}>
                <NavLink style={{marginRight: "10px"}} to="/">Inicio</NavLink>
                <NavLink style={{marginRight: "10px"}} to="/animals">Animales</NavLink>
                <NavLink style={{marginRight: "10px"}} to="/about">Sobre Nosotros</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
);

export default Navbar;
