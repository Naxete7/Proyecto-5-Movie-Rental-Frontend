
import './App.css';

//Implementamos React-router-dom en app.js, por eso importamos....

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './containers/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/Button/ButtonDesign.scss'
import { Card } from 'react-bootstrap';
//Importaciones de containers y componentes
// import Register from './containers/Register/Register';
import Login from './containers/User/Login/Login.jsx';
import Header from './components/Header/Header';
 import Register from './containers/User/Register/Register';
import Footer from './components/Footer/Footer';
 import Films from './containers/Films/Films';
import FilmsView from './containers/FilmsView/FilmsView';
import Image from 'react-bootstrap/Image'
import Profile from './containers/User/Profile/Profile';
import UserOrders from './containers/User/UserOrders/UserOrders';
import AllOrders from './components/Admin/AllOrders/AllOrders';
import MyAccount from './containers/MyAccount/MyAccount';
import { createContext, useContext, useState } from 'react';
// import Films from './containers/Films/Films';
import { useSelector, useDispatch } from "react-redux";
import { login } from "./containers/User/userSlice";

const CurrentUserContext = createContext(null)

function App() {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null)
  let logged = useSelector(state => state.currentUser === currentUser)
  console.log(currentUser)

  if (logged) {
    console.log("ENTROOOOOO")
    dispatch(login({
      credentials: {
        token: localStorage.getItem("SAVEJWT"),
        mail: localStorage.getItem("SAVEUSERMAIL"),
        role: localStorage.getItem("SAVEUSERROLE")
      }
    }))
  }
  

  


  return (
    // Todos los elementos en React van a estar en lenguaje JSX.
    <div className="App">

      {/* Genero el entorno de React Router Dom para el enrutado de vistas y componentes */}
      
      <BrowserRouter>
      
        <CurrentUserContext.Provider
          value={{
            currentUser,
            setCurrentUser
          }}
          >
            <Header/>
        </CurrentUserContext.Provider>
       
        
        <Routes>
        {/* La parte cambiante es lo que contiene Routes DENTRO */}

            {/* Cada Route contendrá una vista..... */} 
          <Route path="/" element={<Home />} />;
          <Route path="/login" element={<Login />} />;
          <Route path='/register' element={<Register/>}/>;
          <Route path="/films" element={<Films/>}/>;
          <Route path="/filmsView" element={<FilmsView/>}/>;
          <Route path='/profile' element={<Profile/>} />;
          <Route path='/userorders' element={<UserOrders/>} />;
          <Route path='/allorders' element={<AllOrders/>} />;
          <Route path='/myaccount' element={<MyAccount/>} />;
           
        </Routes>
      
        <Footer/>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
