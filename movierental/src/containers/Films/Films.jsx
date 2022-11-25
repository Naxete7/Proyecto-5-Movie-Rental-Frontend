import React from "react";
import "../Films/Films.scss";
import Navigator from "../../components/Navigator/Navigator";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/apicalls";
import { bringFilms } from '../../services/apicalls'
import { useState } from "react";
import { useEffect } from "react";
import { Button, Space } from 'antd';
import img from '../../assets/img/Sin título.png'






const Films = () => {
    
    let navigate = useNavigate();
    
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

        
        <div className="homeDesign container-fluid   d-flex flex-column align-items-center justify-content-around" >
            
            

<div className="moviesShowcase row">
                {/* Here I proceed to MAP the hook which contains all the movies */}
               
                <div className="leftSide col">
                    {
                        movies.map(movie => {
                            return <div  className="movieDesign col"  key={movie.id}>
                                {/*<div>{movie.original_title}</div>*/}
                                <div ><img className="moviePic" src={url+movie.poster_path} onClick={() => navigate("/filmsView")} href="../FilmsView" /></div>
                            </div>
                        })
                    }

                </div>

            </div>

        </div>
    )

  



}















export default Films