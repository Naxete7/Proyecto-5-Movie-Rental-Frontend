import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss"
import { Button, Space } from 'antd';
import anillo  from '../../assets/img/anillo.png'



const Home = () => {
    const navigate = useNavigate();
    
    return (

        
        <div className="homeDesign">
          
          
            <div><img src="../../assets/img/anillo.png" alt="imagen de portada" /></div> 
            

            <div>Alquila todas las peliculas y series que quieras.</div> 
            
            <div className="buttonHome">
                {/*<button className="buttonHomeDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Login</button>*/}
                 <Button className="buttonHomeDesign" onClick={() => navigate("/login")} href="../Login/">Login</Button>

                <Button className="buttonHomeDesign" onClick={() => navigate("/login")} href="../Login/" >Subscríbete</Button>
                {/*<button className="buttonHomeDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Subscríbete ya</button>*/}
            </div>


















        </div>
)
}

export default Home;