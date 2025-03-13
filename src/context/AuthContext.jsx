import {createContext, useState} from "react";
import axios from "axios";

export const TOKEN_KEY = 'TOKEN';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        isLogged: false,
        email: '',
        id: 0,
        jwt: ''
    })

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:3000/login', {email, password});

            if (response.status === 200) {
                const {accessToken, user} = response.data;

                localStorage.setItem(TOKEN_KEY, accessToken);

                setUser({
                    isLogged: true,
                    email: user.email,
                    id: user.id,
                    jwt: accessToken
                });

                return {error: false, data: 'Sesión iniciada correctamente'};
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            return {error: true, data: 'Usuario o contraseña incorrectos'};
        }
    };
    const logout = () => {
        setUser({
            isLogged: false,
            email: '',
            id: 0
        });
        localStorage.removeItem(TOKEN_KEY);
    }

    const register = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:3000/register', {email, password});

            if (response.status === 201) {
                return {error: false, data: 'Usuario registrado correctamente'};
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            return {error: true, data: 'Error al registrar usuario'};
        }
    };

    return (
        <AuthContext.Provider value={{user, setUser, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext, AuthProvider}