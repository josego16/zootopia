import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import '../../css/Register.css';

const Register = () => {
    const {register} = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({email: "", password: ""});

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (user.email && user.password) {
            const response = await register(user.email, user.password);
            if (!response.error) {
                navigate('/');
            } else {
                alert(response.data);
            }
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <h2>Registrarse</h2>
                <div className="input-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" name="email" id="email" value={user.email} onChange={handleChange} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" value={user.password} onChange={handleChange}
                           required/>
                </div>
                <button type="submit" className="register-button">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Register;