import React from "react";
import "../Films/Films.scss";
import { useNavigate } from "react-router-dom";
import { bringFilms, bringAccion, bringComedia, bringInfantil, searchFilms } from '../../services/apicalls'
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addFilm, filmData } from "./FilmSlice"
import card, { Col, Container, Image, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';



const Films = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    const [criteria, setCriteria] = useState('')

    const inputHandler = (e) => {
        console.log(e.target.value);
        setCriteria(e.target.value);
    }




    const clickedMovie = (movie) => {

        //Guardo la película seleccionada en redux.

        dispatch(addFilm({ ...movie, details: movie }));

        setTimeout(() => {
            navigate("/filmsView");
        }, 750);
    }

    const filmsComedia = () => {
        bringComedia()
            .then(res => {
                setMovies(res.data)
            })
    }

    const filmsAccion = () => {
        bringAccion()
            .then(res => {
                setMovies(res.data)
            })
    }

    const filmsInfantil = () => {
        bringInfantil()
            .then(res => {
                setMovies(res.data)
            })
    }

    const allFilms = () => {
        bringFilms().then(
            (res) => {
                setMovies(res.data)
                console.log(res.data)
            }
        );
    }

    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.

        if (movies.length === 0) {


            //Adding a 1 seconds delay on purpose...



            setTimeout(() => {

                bringFilms().then(
                    (res) => {
                        setMovies(res.data)
                        console.log(res.data)
                    }
                );

            }, 3000);



        };

    }, [movies]);

    useEffect(() => {

        console.log(criteria)

        if (criteria !== '') {

            //Voy a aplicar mi proceso de debounce....

            const bring = setTimeout(() => {

                searchFilms(criteria)
                    .then(res => {
                        console.log(res)
                        setMovies(res.data)
                        console.log(res.data)
                    })
                    .catch(error => console.log(error));

            }, 150);

            return () => clearTimeout(bring);

        } else if (criteria === '') {
            bringFilms().then(
                (res) => {
                    setMovies(res.data)
                    console.log(res.data)
                }
            );
        }

    }, [criteria])

    console.log(criteria)
    console.log(movies)



    if (movies.length === 0) {
        return (
            <Container fluid className="filmsDesign" >
                 <Row className="d-flex align-content-end justify-content-end" >
                    <Form className="d-flex searchDesign">
                        <Form.Control
                            type="criteria"
                            placeholder="search for a film!"
                            name="criteria"
                            aria-label="Go!"
                            onChange={(e) => inputHandler(e)}
                        />
                    </Form>

                </Row>
                <Row flex >

                    <Button bg="warning" variant="outline-success" onClick={allFilms}>Todas</Button>
                    <Button bg="warning" variant="outline-success" onClick={filmsComedia}>Comedia</Button>
                    <Button bg="warning" variant="outline-success" onClick={filmsAccion}>Acción</Button>
                    <Button bg="warning" variant="outline-success" onClick={filmsInfantil}>Infantil</Button>



                </Row>
                <Row className="d-flex align-content-end justify-content-end" >
                    <div className="spinner">Searching for films</div>

                </Row>

            </Container>
        )
    } else {
        return (
            <Container fluid className="filmsDesign" >
                <Row className="d-flex align-content-end justify-content-end" >
                    <Form className="d-flex searchDesign">
                        <Form.Control
                            type="criteria"
                            placeholder="search for a film!"
                            name="criteria"
                            aria-label="Go!"
                            onChange={(e) => inputHandler(e)}
                        />
                    </Form>

                </Row>

                <Row flex >

                    <Button bg="warning" variant="outline-success" onClick={allFilms}>Todas</Button>
                    <Button bg="warning" variant="outline-success" onClick={filmsComedia}>Comedia</Button>
                    <Button bg="warning" variant="outline-success" onClick={filmsAccion}>Acción</Button>
                    <Button bg="warning" variant="outline-success" onClick={filmsInfantil}>Infantil</Button>



                </Row>

                <Row flex >

                    {/* Here I proceed to MAP the hook which contains all the movies */}

                    {
                        movies.map(movie => (<Col>



                            <Image className="moviePic " src={movie.poster} onClick={() => clickedMovie(movie)} key={movie.id} />

                        </Col>
                        ))
                    }



                </Row>
            </Container>
        )
    }



}

export default Films