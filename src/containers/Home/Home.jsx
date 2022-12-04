import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Space } from 'antd';
import { useState } from "react";
import { useEffect } from "react";
import { bringTopRated } from "../../services/apicalls";
import card, { Col, Container, Image, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from "react-redux";
import { addFilm } from "../Films/FilmSlice";
import "./Home.scss";

const Home = () => {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    let isLoged = localStorage.getItem("SAVEUSERMAIL")

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.

        if (movies.length === 0) {

            //Adding a 1 seconds delay on purpose...

            setTimeout(() => {

                bringTopRated().then(
                    (res) => {
                        setMovies(res.data)
                     
                    }
                );

            }, 1000);

        };

    }, [movies]);

     const clickedMovieH = (movie) => {

        //Guardo la película seleccionada en redux.

        dispatch(addFilm({ ...movie, details: movie }));

        setTimeout(() => {
            navigate("/filmsView");
        }, 750);
    }

    if (isLoged) {
        return (

            <Container fluid className="filmsDesign" >
                <Row className="d-flex align-content-end justify-content-end" >
                    <div className="tituloDesign row-12 d-flex align-items-center justify-content-center">VideoRent</div>
                    <div className="textCentralDesign row-12 d-flex align-items-center justify-content-center">Alquila todas las películas que quieras.</div>

                </Row>
<br></br>
                <Row  >
                <pre className="textCentralDesign flex">PELÍCULAS MÁS VALORADAS</pre>

                    <Carousel>

                        {
                            movies.map(movie => (<Carousel.Item>
                                <Image className="moviePic " src={movie.poster} key={movie.id} onClick={() => clickedMovieH(movie)} />
                            </Carousel.Item>

                            ))
                        }

                    </Carousel>



                </Row>
            </Container>
        )
    } else {

        return (
            <Container fluid >
               
                 <Row className="tituloDesign  align-items-center justify-content-center">VR</Row> 
                <Row className="d-flex align-content-end justify-content-end" >
                    <div className="buttonHome row-6  d-flex justify-content-center">
                       
                        <Button className="buttonDesign  d-flex justify-content-center " onClick={() => navigate("/login")} href="../Login/">Login</Button>

                        <Button className="buttonDesign  d-flex justify-content-center  " onClick={() => navigate("/register")} href="../Register" >Suscríbete</Button>
                  
                    </div>

                </Row>

                <Row flex >
                    <pre>PELÍCULAS MÁS VALORADAS</pre>

                    <Carousel>

                        {
                            movies.map(movie => (<Carousel.Item>
                                <Image className="moviePic " src={movie.poster} key={movie.id} onClick={()=> clickedMovieH(movie) } />
                            </Carousel.Item>

                            ))
                        }

                    </Carousel>



                </Row>
            </Container>
        )

    }




}

export default Home;
