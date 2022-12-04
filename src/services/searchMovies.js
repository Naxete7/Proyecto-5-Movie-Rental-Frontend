import React, { useEffect, useState } from "react";
import { searchFilm, searchFilmByGenre } from "./apicalls";
import { Col, Container, Row } from "react-bootstrap";
import "./Browser.css";

const BrowserFilms = ({ search }) => {
  const [filmSearch, setFilmSearch] = useState([]);
  const [filmSearchGenre, setFilmSearchGenre] = useState([]);

  useEffect(() => {
   
    if (search !== "") {
      const bring = setTimeout(() => {
        searchFilm(search)
          .then((res) => {
            setFilmSearch(res.data);
          })
          .catch((error) => console.log(error));
        searchFilmByGenre(search)
          .then((res) => {
            setFilmSearchGenre(res.data);
          })
          .catch((error) => console.log(error));
      }, 350);
      return () => clearTimeout(bring);
    } else if (search === "") {
      setFilmSearch([]);
      setFilmSearchGenre([]);
    }
  }, [search]);

  if (filmSearch.length !== 0) {
    return (
      <Container className="browserDesign">
        <Row>
          {filmSearch.map((search) => (
            <Col className="divMovie">
              <img className="imgMovie" src={search.poster} alt=""></img>
              <h6>{search.title}</h6>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  if (filmSearchGenre.length !== 0) {
    return (
      <Container className="browserDesign">
        <Row>
          {filmSearchGenre.map((search) => (
            <Col className="divMovie">
              <img className="imgMovie" src={search.poster} alt=""></img>
              <h6>{search.title}</h6>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
};

export default BrowserFilms;