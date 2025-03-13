import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

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
        <form onSubmit={handleSubmit} style={{border: "1px solid black", borderRadius: "20px", marginTop: "10px"}}>
            <div style={{padding: '10px', border: "1px solid black", margin: "10px"}}>
                <label htmlFor="email">Correo electrónico: </label>
                <input type="email" name="email" id="email" value={user.email} onChange={handleChange} required/>
            </div>
            <div style={{padding: '10px', border: "1px solid black", margin: "10px"}}>
                <label htmlFor="password">Contraseña: </label>
                <input type="password" name="password" id="password" value={user.password} onChange={handleChange}
                       required/>
            </div>
            <button type="submit" style={{padding: '10px', margin: "10px"}}>login</button>
        </form>
    );
};

export default Login;