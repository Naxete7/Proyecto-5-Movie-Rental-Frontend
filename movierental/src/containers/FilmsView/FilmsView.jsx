import React from "react";
import "./FilmsView.scss";

import { useEffect, useState } from "react";
import { filmData, addFIlm } from "../FilmSlice";
import { userData } from "../User/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { orderFilm } from "../../services/apicalls";
import { useNavigate } from "react-router-dom";


const FilmsView = () => {
  //const [film, setFilm] = useState({
  //  title:""
  //})
  const orderMovie = (movie) => {

  }

  let navigate = useNavigate()

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
                <button className="buttonDesign">Alquilame</button>
            </div>

)

  } else {
    return (
      <div className="">Ha habido un error</div>
    )
   
  }
  
}


export default FilmsView