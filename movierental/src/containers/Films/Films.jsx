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
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';



const Films = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const inputHandler = (e) => {
    console.log(e.target.value);
  }
const [movies, setMovies] = useState([]);
 

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

        <Container fluid className="filmsDesign" >
            <Row className="d-flex align-content-end justify-content-end" >
                  <Form className="d-flex searchDesign">
                  <Form.Control 
                    type="search"
                    placeholder="Search"
                    name="search"
                    aria-label="Search"
                    onChange={(e) => inputHandler(e)}
                  />
                  <Button bg="warning" variant="outline-success  ">Search</Button>
                </Form>

            </Row>
        
            <Row flex >

                {/* Here I proceed to MAP the hook which contains all the movies */}
              
                    {
                        movies.map(movie => ( <Col>
                        
                               
                                
                                    <Image className="moviePic " src={movie.poster} onClick={() => clickedMovie(movie)} key={movie.id} />
                            {/*<h3>{movie.title}</h3>*/}
                            </Col> 
                      ))
                    }

               
          
            </Row>
           </Container> 
    )



}

export default Films