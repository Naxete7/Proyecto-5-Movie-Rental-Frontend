
import './App.css';

//Implementamos React-router-dom en app.js, por eso importamos....

import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importaciones de containers y componentes

// import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
// import Films from './containers/Films/Films';

function App() {
  return (
    // Todos los elementos en React van a estar en lenguaje JSX.
    <div className="App">

      {/* Genero el entorno de React Router Dom para el enrutado de vistas y componentes */}
      
      <BrowserRouter>
      
      
        <Routes>
        {/* La parte cambiante es lo que contiene Routes DENTRO */}

            {/* Cada Route contendrá una vista..... */} 

            {/* <Route path="/" element={<Home/>}/>*/}
            <Route path="/register" element={<Register/>}/> 
            <Route path="/login" element={<Login/>}/>
            {/* <Route path="/films" element={<Films/>}/> */}


        </Routes>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
