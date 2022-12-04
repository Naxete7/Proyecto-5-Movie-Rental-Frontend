
import axios from 'axios';
//var apiKey = '210d6a5dd3f16419ce349c9f1b200d6d';

export const loginUser = async (body, res) => {

    try {
        let resp = await axios.post(
            "https://proyecto04-videoclub-production-4de8.up.railway.app/auth/login",
            body
        );
        console.log(resp)
    
        if (resp.data === "Password or email is incorrect") {
            return "El email o la contraseña son incorrectos"
    
        } else if (resp.data.message === "Login successful") {
            return resp
        }
    } catch (error) {
        console.log(error)
        return error.response
    }

    
};

export const registerUser = async (body) => {

    console.log(body)

    return axios.post(
        "https://proyecto04-videoclub-production-4de8.up.railway.app/auth/register",
        body
        // {
        //     "mail": 'elbanking@punsdhi.com',
        //     "password": 'gsdfg34563SFGSF'
        //   }
    );
};

export const bringFilms = () => {

    try {

        return axios.get("https://proyecto04-videoclub-production-4de8.up.railway.app/films");


    } catch (error) {
        console.log(error);
    }
};

export const bringTopRated = () => {

    try {

        return axios.get("https://proyecto04-videoclub-production-4de8.up.railway.app/films/topfilms");


    } catch (error) {
        console.log(error);
    }
};

export const bringComedia = () => {

    try {

        return axios.get("https://proyecto04-videoclub-production-4de8.up.railway.app/films/genre/comedia");


    } catch (error) {
        console.log(error);
    }
};

export const bringAccion = () => {

    try {

        return axios.get("https://proyecto04-videoclub-production-4de8.up.railway.app/films/genre/accion");


    } catch (error) {
        console.log(error);
    }
};
export const bringInfantil = () => {

    try {

        return axios.get("https://proyecto04-videoclub-production-4de8.up.railway.app/films/genre/infantil");


    } catch (error) {
        console.log(error);
    }
};

export const searchFilms = async (criteria) => {

    
    try {

        return await axios.get(`https://proyecto04-videoclub-production-4de8.up.railway.app/films/title/${criteria}`)
        
    } catch (error) {
        console.log(error);
    }
}

export const bringUserInfo = (email) => {

    return axios.get("https://proyecto04-videoclub-production-4de8.up.railway.app/users/id/" + email)

};

export const bringUserOrders = (email) => {

    return axios.get(`https://proyecto04-videoclub-production-4de8.up.railway.app/orders/${email}`)

};

export const bringUserActiveOrders = (email) => {

    return axios.get(`https://proyecto04-videoclub-production-4de8.up.railway.app/orders/active/${email}`)

};

export const bringAllOrders = () => {

    return axios.get(`https://proyecto04-videoclub-production-4de8.up.railway.app/orders/`)

};

export const bringActiveAllOrders = () => {

    return axios.get(`https://proyecto04-videoclub-production-4de8.up.railway.app/orders/active/orders/all`)

};

export const bringAllUsers = () => {

    return axios.get(`https://proyecto04-videoclub-production-4de8.up.railway.app/users/`)

};

export const deleteUser = (email) => {

    return axios.delete("https://proyecto04-videoclub-production-4de8.up.railway.app/users/delete/" + email)

};

export const orderFilm = async (movie) => {
    const jwt = localStorage.getItem("SAVEJWT")
    let config = {
        headers: {
            Authorization: `Bearer ${jwt}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
            'Access-Control-Allow-Methods': '*',
            "Content-Type": "application/json"
        }

    }
    return await axios.post(`https://proyecto04-videoclub-production-4de8.up.railway.app/orders/neworder`,movie,config)
};

export const bringOneFilm = (film) => {
        return axios.get(`https://proyecto04-videoclub-production-4de8.up.railway.app/films/title/${film}`)
   
    }
