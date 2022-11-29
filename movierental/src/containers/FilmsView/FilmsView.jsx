import React from "react";
import "./FilmsView.scss";

import { useEffect, useState } from "react";
import { filmData, addFIlm } from "../FilmSlice";
import { userData } from "../User/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Container, Image, Row } from "react-bootstrap";


const FilmsView = () => {
  //const [film, setFilm] = useState({
  //  title:""
  //})
  const [movie, setMovie] = useState([]);
  const selectedFilm = useSelector(filmData);
  //const credentials = useSelector(userData);
  console.log(selectedFilm);
  if (selectedFilm?.id_film !== undefined) {
    
    return (

      <Container fluid>
        <Row>
       <div className="filmsViewDesign">
      <div>{selectedFilm?.title}</div>  
       <Row>
        <div><Image className="moviePic fluid" src={selectedFilm?.poster} /></div>  
            </Row>
            <Row>
      <div> {selectedFilm?.genre}</div> 
                <div className="text-break"> {selectedFilm?.sinopsis}</div>
                {/*{credentials?.credentials?.token !== undefined &&

                    
                }*/}
            </Row>
            <Row>
              <button className="buttonDesign">Alquilame</button>
              </Row>
          </div>
        </Row>  
</Container>
)

  } else {
    return (
      <div className="">Ha habido un error</div>
    )
   
  }
  
}


export default FilmsView