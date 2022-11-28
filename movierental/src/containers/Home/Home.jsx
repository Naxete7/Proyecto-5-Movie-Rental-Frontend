import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Space } from 'antd';
import { useState } from "react";
import { useEffect } from "react";
import { filmData } from "../FilmSlice";
import img from '../../assets/img/Sin título.png'

import "./Home.scss"

const Home = () => {
    
    let navigate = useNavigate();
    const filmsFromRdx = useSelector(filmData);
 useEffect(()=> {
       console.log("soy las peliculas", filmsFromRdx);    
 })
    
    
    return (

        
        <div className="homeDesign container-fluid   d-flex flex-column align-items-center justify-content-around" >
          
          
            <div className="logo row"><img className="imgDesign" src={img} alt="imagen de portada" /></div>
            

            <div className="textCentralDesign row-12 d-flex align-items-center justify-content-center">Alquila todas las películas y series que quieras.</div>
            
            <div className="buttonHome row-6  d-flex justify-content-center">
                {/*<button className="buttonHomeDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Login</button>*/}
                 <Button className="buttonHomeDesign col-6  d-flex justify-content-center " onClick={() => navigate("/login")} href="../Login/">Login</Button>

                <Button className="buttonHomeDesign col-6  d-flex justify-content-center  " onClick={() => navigate("/register")} href="../Register" >Suscríbete</Button>
                {/*<button className="buttonHomeDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Subscríbete ya</button>*/}
            </div>



                </div>

    )

  
}

export default Home;