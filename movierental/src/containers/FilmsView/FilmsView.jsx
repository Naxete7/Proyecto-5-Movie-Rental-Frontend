import React from "react";
import "./FilmsView.scss";

import { useEffect, useState } from "react";
import { filmData, addFIlm } from "../FilmSlice";
import { userData } from "../User/userSlice";
import { useSelector, useDispatch } from "react-redux";


const FilmsView = () => {
  //const [film, setFilm] = useState({
  //  title:""
  //})
  
  const selectedFilm = useSelector(filmData);
  //const credentials = useSelector(userData);
  console.log(selectedFilm);
  if (selectedFilm?.id_film !== undefined) {
    
    return (
       <div className="filmsViewDesign">
        {selectedFilm?.title}
        <br/>
        {selectedFilm?.poster}
        <br/>
        {selectedFilm?.genre};
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