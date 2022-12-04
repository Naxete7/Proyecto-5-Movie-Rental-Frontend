import React from "react";
import "./FilmsView.scss";
import { Button, Space } from 'antd';
import { useEffect, useState } from "react";
import { filmData, addFIlm } from "../Films/FilmSlice";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { orderFilm } from "../../services/apicalls";
import { setDayInSeventh } from "../../services/useful";
import '../../components/Button/ButtonDesign.scss'
import { useNavigate } from "react-router-dom";


const FilmsView = () => {
  let navigate = useNavigate();

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
     
      let resp =  orderFilm(movieBody)
      setTimeout(() => {
        navigate("/myaccount");
    }, 750);
      return resp
    } catch (error) {
      console.log(error)
    }
  }

  const [movie, setMovie] = useState([]);
  const selectedFilm = useSelector(filmData);

  if (selectedFilm?.id_film !== undefined) {
      
    if (loged){
          return (

      <Container fluid className="filmsViewDesign" >
              <Row className= "align-items-center">
                <Col >

                <div><Image className="moviePicView fluid" src={selectedFilm?.poster} /></div>  
                    <Button className="buttonDesign" onClick={()=>orderMovie()}>Alquílame</Button>
                </Col>
                <Col className=" align-items-center">
                    <div className="titleDesign text-fluid">{selectedFilm?.title}</div>
                  <div className="genreDesign">Género: {selectedFilm?.genre}</div>  
                  <div className="ratingDesign align-items-center">Puntuación: {selectedFilm?.rating}</div> 
               <div className="sinopsisDesign text-break "> {selectedFilm?.sinopsis}</div>
                </Col>
                
                
                
        </Row>  
</Container>
)
    } else {
      return (

      <Container fluid className="filmsViewDesign">
        <Row className= "align-items-center">
                  
              <Col>
                
                <div><Image className="moviePicView fluid" src={selectedFilm?.poster} /></div>

              </Col>
             
              <Col className= "align-items-center">
               <div className="titleDesign text-fluid align-items-center">{selectedFilm?.title}</div>
                <div className="genreDesign">Género: {selectedFilm?.genre}</div>  
               <div className="ratingDesign align-items-center">Puntuación: {selectedFilm?.rating}</div> 
               <div className="sinopsisDesign text-break  align-items-center"> {selectedFilm?.sinopsis}</div>  
              </Col>
            
              <Row>
              
              </Row>
              
            <Row>
                
                <br/> <br/>
                
                 </Row>
              
         
        </Row>  
</Container>
)
        }


  } else {
    return (
      <div className="filmsViewDesign"> <Spinner className=" spinnerDesign mb-5" /> 
        <h3>Ha habido un error</h3></div>
      
    )
   
  }
  
}


export default FilmsView




