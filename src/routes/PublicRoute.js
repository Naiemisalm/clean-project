import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/home/Home';
import Login from '../pages/Login';
import Servies from '../pages/Servies';

 export const PublicRoute = [
    { path: "/", name: "Home", Component: Home },
    { path: "/home", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/servies", name: "Servies", Component: Servies },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/login", name: "Login", Component: Login },

];