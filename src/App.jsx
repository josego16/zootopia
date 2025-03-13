import './css/App.css'
import AnimalList from "./components/animal/AnimalList.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AnimalProvider} from "./context/AnimalContext.jsx";
import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AnimalDetail from "./components/animal/AnimalDetails.jsx";
import AnimalForm from "./components/form/AnimalForm.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/", element: <Navbar/>,
            children: [
                {index: true, element: <Login/>},
                {path: "/register", element: <Register/>},
                {
                    element: <ProtectedRoute/>,
                    children: [
                        {path: "/home", element: <Home/>},
                        {path: "/animals", element: <AnimalList/>},
                        {path: "/animals/:id", element: <AnimalDetail/>},
                        {path: "/form", element: <AnimalForm/>},
                    ]
                },
                {path: "/about", element: <About/>},
                {path: "/*", element: <NotFound/>},
            ]
        }
    ])
    return (
        <AuthProvider>
            <AnimalProvider value={router}>
                <RouterProvider router={router}/>
            </AnimalProvider>
        </AuthProvider>
    )
}

export default App