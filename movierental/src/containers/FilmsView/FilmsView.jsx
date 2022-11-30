import React from "react";
import "./FilmsView.scss";
import { Button, Space } from 'antd';
import { useEffect, useState } from "react";
import { filmData, addFIlm } from "../FilmSlice";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Image, Row } from "react-bootstrap";
import { orderFilm } from "../../services/apicalls";
import { setDayInSeventh } from "../../services/useful";
import '../../components/Button/ButtonDesign.scss'


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

      <Container fluid className="filmsViewDesign" >
              <Row >
                <Col className=" align-content-center justify-content-center">

                <div><Image className="moviePic fluid" src={selectedFilm?.poster} /></div>  
                    <Button className="buttonDesign" onClick={()=>orderMovie()}>Alquílame</Button>
                </Col>
                <Col className=" d-grid align-content-start justify-content-start">
                    <div className="titleDesign text-fluid">{selectedFilm?.title}</div>
              <div className="genreDesign"> {selectedFilm?.genre}</div>  
               <div className="sinopsisDesign text-break"> {selectedFilm?.sinopsis}</div>
                </Col>
                
                
                
        </Row>  
</Container>
)
    } else {
      return (

      <Container fluid className="filmsViewDesign">
        <Row>
                  
              <Col>
                
                <div><Image className="moviePicView fluid" src={selectedFilm?.poster} /></div>

              </Col>
             
              <Col>
               <div className="titleDesign text-fluid">{selectedFilm?.title}</div>
              <div className="genreDesign"> {selectedFilm?.genre}</div>  
               <div className="sinopsisDesign text-break"> {selectedFilm?.sinopsis}</div>  
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
      <div className="">Ha habido un error</div>
    )
   
  }
  
}


export default FilmsView




