import './css/App.css'
import AnimalList from "./components/animal/AnimalList.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AnimalProvider} from "./context/AnimalContext.jsx";
import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AnimalDetail from "./components/animal/AnimalDetails.jsx";
import AnimalForm from "./components/form/AnimalForm.jsx";
import SignIn from "./mui-auth/sign-in/SignIn.jsx";
import SignUp from "./mui-auth/sign-up/SignUp.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/", element: <Navbar/>,
            children: [
                {index: true, element: <Home/>},
                {path: "/animals", element: <AnimalList/>},
                {path: "/animals/:id", element: <AnimalDetail/>},
                {path: "/form", element: <AnimalForm/>},
                {path: "/login", element: <SignIn/>},
                {path: "/register", element: <SignUp/>},
                {path: "/about", element: <About/>},
                {path: "/*", element: <NotFound/>},
            ]
        }
    ])
    return (
        <AnimalProvider value={router}>
            <RouterProvider router={router}/>
        </AnimalProvider>
    )
}

export default App