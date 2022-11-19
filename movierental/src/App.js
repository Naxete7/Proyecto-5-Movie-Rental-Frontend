
import './App.css';

//Implementamos React-router-dom en app.js, por eso importamos....

import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import navbar from './components/Navigator/Navegacion/Navbar';
//Importaciones de containers y componentes


// import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Home from './containers/Login/Home/Home';
import navbar from './components/Navigator/Navegacion/Navbar';
import Header from './components/Navigator/Header/Header';
// import Films from './containers/Films/Films';

function App() {
  return (
    // Todos los elementos en React van a estar en lenguaje JSX.
    <div className="App">

      {/* Genero el entorno de React Router Dom para el enrutado de vistas y componentes */}
      
      <BrowserRouter>
      
        <Header />
        
        <navbar/>
        
        <Routes>
        {/* La parte cambiante es lo que contiene Routes DENTRO */}

            {/* Cada Route contendrá una vista..... */} 
         
          
          <Route path="/" element={<Home />} />;
          
            <Route path="/login" element={<Login/>}/>
            {/* <Route path="/films" element={<Films/>}/> */}


        </Routes>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
