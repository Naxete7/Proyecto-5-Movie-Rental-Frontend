
import './App.css';

//Implementamos React-router-dom en app.js, por eso importamos....

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './containers/Home/Home';


//Importaciones de containers y componentes


<<<<<<< HEAD
// import Register from './containers/Register/Register';
import Login from './containers/User/Login/Login.jsx';
import Header from './components/Header/Header';
=======
 import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Header from './components/Navigator/Header/Header';
import Footer from './components/Footer/Footer';
>>>>>>> 3b6a92cc22703a0d00964763adf6129f0e3a94d1
// import Films from './containers/Films/Films';

function App() {
  return (
    // Todos los elementos en React van a estar en lenguaje JSX.
    <div className="App">

      {/* Genero el entorno de React Router Dom para el enrutado de vistas y componentes */}
      
      <BrowserRouter>
      
        <Header>

        <navbar/>
        </Header>
        
        
        <Routes>
        {/* La parte cambiante es lo que contiene Routes DENTRO */}

            {/* Cada Route contendrá una vista..... */} 
         
          
          <Route path="/" element={<Home />} />;
          
          <Route path="/login" element={<Login />} />;
          <Route path='/register' element={<Register/>}/>;
            {/* <Route path="/films" element={<Films/>}/> */}


        </Routes>
      
        <Footer/>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
