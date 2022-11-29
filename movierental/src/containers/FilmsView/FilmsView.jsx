import React from "react";
import "./FilmsView.scss";

import { useEffect, useState } from "react";
import { filmData, addFIlm } from "../FilmSlice";
import { userData } from "../User/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { orderFilm } from "../../services/apicalls";
import { setDayInSeventh } from "../../services/useful";
import { Container, Image, Row } from "react-bootstrap";


const FilmsView = () => {

  let loged = localStorage.getItem("SAVEUSERMAIL");


  const orderMovie =  () => {
    try {
      const mail = localStorage.getItem("SAVEUSERMAIL")
      let today = new Date();
      let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
      let end = setDayInSeventh()
      let endDate = `${end.getFullYear()}-${end.getMonth()+1}-${end.getDate()}`
      let movieBody = {
        "startedAt": date,
        "endedAt": endDate,
        "userMail": mail.replaceAll('"', ''),
        "filmIdFilm": selectedFilm.id_film
      }
      console.log(movieBody)
      let resp =  orderFilm(movieBody)
      return resp
    } catch (error) {
      console.log(error)
    }
  }

  const [movie, setMovie] = useState([]);
  const selectedFilm = useSelector(filmData);
  //const credentials = useSelector(userData);
  console.log(selectedFilm);
  console.log(loged);
  if (selectedFilm?.id_film !== undefined) {
      

    if (loged){
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
                 </Row>
              
          </div>
        </Row>  
</Container>
)
        }



    

  } else {
    return (
      <div className="">Ha habido un error</div>
    )
   
  }
  
}


export default FilmsView