import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <header>
                <h1>National Geographic</h1>
                <nav>
                    <NavLink style={{marginRight: "10px"}} to="/">Home</NavLink>
                    <NavLink style={{marginRight: "10px"}} to="/animals">Animales</NavLink>
                    <NavLink style={{marginRight: "10px"}} to="/form">Formulario</NavLink>
                    <NavLink style={{marginRight: "10px"}} to="/login">Login</NavLink>
                    <NavLink style={{marginRight: "10px"}} to="/register">Registro</NavLink>
                    <NavLink to="/about">Sobre Nosotros</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Navbar;