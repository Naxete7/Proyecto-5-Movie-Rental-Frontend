import React from "react";
import "./FilmsView.scss";

import { useEffect, useState } from "react";
import { filmData, addFIlm } from "../FilmSlice";
import { userData } from "../User/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { orderFilm } from "../../services/apicalls";
import { setDayInSeventh } from "../../services/useful";


const FilmsView = () => {
  //const [film, setFilm] = useState({
  //  title:""
  //})
  const orderMovie = async () => {
    const mail = sessionStorage.getItem("SAVEUSERMAIL")
    let today = new Date();
    let date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`
    let end = setDayInSeventh()
    let endDate = `${end.getDate()}/${end.getMonth()+1}/${end.getFullYear()}`
    let movieBody = {
      "startedAt": date,
      "endedAt": endDate,
      "userMail": mail,
      "filmIdFilm": selectedFilm.id_film
    }

    let resp = await orderFilm(movieBody)
    return resp
  }

  const [movie, setMovie] = useState([]);
  const selectedFilm = useSelector(filmData);
  //const credentials = useSelector(userData);
  console.log(selectedFilm);
  if (selectedFilm?.id_film !== undefined) {
    
    return (
       <div className="filmsViewDesign">
      <div>{selectedFilm?.title}</div>  
       
        <div>
        <img className="moviePic" src={selectedFilm?.poster} /></div>  
       
      <div> {selectedFilm?.genre};</div> 
                {/*<img className="moviePic" src={movie.poster}/>*/}
                {/*{credentials?.credentials?.token !== undefined &&

                    
                
                }*/}
                <button className="buttonDesign" onClick={()=>orderMovie()}>Alquilame</button>
            </div>

)

  } else {
    return (
      <div className="">Ha habido un error</div>
    )
   
  }
  
}


export default FilmsView