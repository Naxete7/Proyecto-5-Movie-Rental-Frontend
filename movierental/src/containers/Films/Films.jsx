import React from "react";
import "../Films/Films.scss";
import { useNavigate } from "react-router-dom";
import { bringFilms } from '../../services/apicalls'
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {addFilm, filmData} from "../FilmSlice"
import card, { Col, Container, Image, Row }  from "react-bootstrap";




const Films = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    
const [movies, setMovies] = useState([]);
 
    //const url = "https:/3005/movies/"

  const clickedMovie = (movie) => {

        //Guardo la película seleccionada en redux.

        dispatch(addFilm({...movie,details: movie}));

        setTimeout(()=>{
            navigate("/filmsView");
        },750);
    }

    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.

        if (movies.length === 0) {
            // bringmovies();

            setTimeout(() => {
                //Adding a 1 seconds delay on purpose...

                bringFilms().then(
                    (res) => {setMovies(res.data)
                        console.log(res.data)}
                );


            }, 1000);

        };

    }, [movies]);


    return (

        <Container fluid >
        {/*<div className="homeDesign    d-flex flex-column align-items-center justify-content-around" >*/}
            <Row flex className="filmsDesign">
{/*<div className="moviesShowcase ">*/}
                {/* Here I proceed to MAP the hook which contains all the movies */}
              
                    {
                        movies.map(movie => ( <Col>
                        
                                {/*<div>{movie.original_title}</div>*/}
                                
                                    <Image  className="moviePic " src={movie.poster} onClick={() => clickedMovie(movie)} key={movie.id} />
                            
                            </Col> 
                      ))
                    }

               
          
            </Row>
           </Container> 
    )



}

export default Films