import React from "react";
import { useNavigate } from "react-router-dom";
import { bringFilms } from '../../services/apicalls'
import { Button, Space } from 'antd';
//import anillo  from '../../assets/img/anillo.png'
import { useState } from "react";
import { useEffect } from "react";


import "./Home.scss"

const Home = () => {
    const navigate = useNavigate();
    
const [movies, setMovies] = useState([]);
 
    const url = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.

        if (movies.length === 0) {
            // bringmovies();

            setTimeout(() => {
                //Adding a 2 seconds delay on purpose...

                bringFilms().then(
                    (res) => {setMovies(res.data.results)
                        console.log(res)}
                );


            }, 2000);

        };


    }, [movies]);


    return (

        
        <div className="homeDesign">
          
          
            {/*<div><img src="../../assets/img/anillo.png" alt="imagen de portada" /></div> */}
            

            <div className="textCentralDesign">Alquila todas las peliculas y series que quieras.</div> 
            
            <div className="buttonHome">
                {/*<button className="buttonHomeDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Login</button>*/}
                 <Button className="buttonHomeDesign" onClick={() => navigate("/login")} href="../Login/">Login</Button>

                <Button className="buttonHomeDesign" onClick={() => navigate("/login")} href="../Login/" >Subscríbete</Button>
                {/*<button className="buttonHomeDesign" onClick={() => navigate("/login")} href="../Login/Login.jsx</div>">Subscríbete ya</button>*/}
            </div>


<div className="moviesShowcase">
                {/* Here I proceed to MAP the hook which contains all the movies */}
               
                <div className="leftSide">
                    {
                        movies.map(movie => {
                            return <div  className="movieDesign" key={movie.id}>
                                <div>{movie.original_title}</div>
                                <div ><img className="moviePic" src={url+movie.poster_path} /></div>
                            </div>
                        })
                    }

                </div>





            </div>















        </div>
)
}

export default Home;