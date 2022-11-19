import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss"


const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div className="homeDesign">
            <div>Alquila todas las peliculas y series que quieras.</div> 
            
            <div className="buttonHome">
                <button className="buttonHomeDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Login</button>
                 


                <button className="buttonHomeDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Subscríbete ya</button>
            </div>


















        </div>
)
}

export default Home;