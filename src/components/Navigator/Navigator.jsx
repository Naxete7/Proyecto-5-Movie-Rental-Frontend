
import React from 'react';

//Ya que voy a trabajar con react-router-dom, importo su método useNavigate

import {useNavigate} from "react-router-dom";
import "./Navigator.scss"


 
const Navigator = ({destinoUno, destinoDos, pathUno, pathDos, destinoTres, pathTres}) => {

    //En una variable, NO un hook, instancio el método useNavigate...para poder acceder a los métodos de react-router-dom

    const surfer = useNavigate();

     return (
         <div className='navigatorDesign'>
            <div onClick={()=>surfer(pathUno)}>{destinoUno}</div>
            <div onClick={()=>surfer(pathDos)}>{destinoDos}</div>
            <div onClick={()=>surfer(pathTres)}>{destinoTres}</div>
        </div>
     )
}
export default Navigator;