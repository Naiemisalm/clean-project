
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Servies from './pages/Servies';


const PublicRoute = [
  {path:"/", name: "Home", Component: Home},
  {path:"/about", name: "About", Component: About},
  {path:"/servies", name: "Servies", Component: Servies},
  {path:"/contact", name: "Contact", Component: Contact},
  {path:"/login", name: "Login", Component: Login},

];

function App() {
  return (
    <div>
      <Navbar>
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/servies' element={<Servies/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route> */}

        {PublicRoute.map((route) => ( <Route path={route.path} element={<route.Component/>} /> ))}

      </Routes>
      </Navbar>
    </div>
  );
}

export default App;
