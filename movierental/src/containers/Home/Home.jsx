import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
//import { bringFilms } from '../../services/apiCalls';
import { useSelector, useDispatch } from "react-redux";
//import { userData } from "../../Containers/User/userSlice";
//import { filmData, addFilm } from "../../Containers/Films/filmSlice";

import "./Home.scss"

const Home = () => {
   const dispatch = useDispatch();
    const navigate = useNavigate();

    //Hooks

    const [films, setFilms] = useState([]);

    useEffect(() => {


        if (films.length === 0) {

            bringFilms()
                .then(films => {

                    setFilms(films)

                })
                .catch(error => console.log(error))

        }

    }, []);

    const clickedFilm = (films) => {

        //Guardo la película seleccionada en redux.

        dispatch(addFilm({...films,details: films}));

        setTimeout(()=>{
            navigate("/filmdetail");
        },750);
    }

    if (films.length === 0) {

        return (
            <div className='homeDesign'>soy Home</div>
        )

    } else {

        //Mapeamos las películas por defecto

        return (
            <div className='homeDesign'>

                {

                    films.map(
                        movie => {
                            return (
                                <div onClick={()=>clickedFilm(films)} key={films.id} className="movieShow">
                                    <img className="moviePic" src={"https://image.tmdb.org/t/p/w200/" + films.poster_path} />
                                </div>
                            )
                        }
                    )
                }

            </div>
        )



    }

}

export default Home;