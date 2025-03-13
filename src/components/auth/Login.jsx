import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import '../../css/Login.css';

const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({email: "", password: ""});

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (user.email && user.password) {
            const response = await login(user.email, user.password);
            if (!response.error) {
                navigate('/home');
            } else {
                alert(response.data);
            }
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Iniciar sesión</h2>
                <div className="input-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" name="email" id="email" value={user.email} onChange={handleChange} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" value={user.password} onChange={handleChange}
                           required/>
                </div>
                <button type="submit" className="login-button">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;