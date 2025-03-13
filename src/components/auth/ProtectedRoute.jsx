import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext.jsx";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = () => {
    const {user} = useContext(AuthContext);
    return user.isLogged ? <Outlet/> : <Navigate to="/"/>;
};

export default ProtectedRoute;