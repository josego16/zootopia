import React, {useContext} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {AuthContext} from "../context/AuthContext.jsx";

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);

    return (
        <div>
            <header>
                <h1>National Geographic</h1>
                <nav style={{marginTop: "30px"}}>
                    {!user.isLogged ? (
                        <>
                            <NavLink style={{marginRight: "10px"}} to="/">Login</NavLink>
                            <NavLink style={{marginRight: "10px"}} to="/register">Registro</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink style={{marginRight: "10px"}} to="/home">Home</NavLink>
                            <NavLink style={{marginRight: "10px"}} to="/animals">Animales</NavLink>
                            <NavLink style={{marginRight: "10px"}} to="/form">Formulario</NavLink>
                            <NavLink style={{marginRight: "10px"}} to="/about">Sobre Nosotros</NavLink>
                            <button onClick={logout}>Cerrar sesión</button>
                        </>
                    )}
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Navbar;