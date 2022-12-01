
import axios from 'axios';

var root = 'https://localhost:3000/films/';
//var apiKey = '210d6a5dd3f16419ce349c9f1b200d6d';

export const loginUser = async (body, res) => {

    try {
        let resp = await axios.post(
            "http://localhost:3000/auth/login",
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
        "http://localhost:3000/auth/register",
        body
        // {
        //     "mail": 'elbanking@punsdhi.com',
        //     "password": 'gsdfg34563SFGSF'
        //   }
    );
};

export const bringFilms = () => {

    try {

        return axios.get("http://localhost:3000/films");


    } catch (error) {
        console.log(error);
    }
};


export const searchFilms = async (criteria) => {

    const config = {
        method: 'get',
        url: `${root}search/movies`
    }

    return await axios(config);
}
export const bringUserInfo = (email) => {

    return axios.get("http://localhost:3000/users/id/" + email)

};

export const bringUserOrders = (email) => {

    return axios.get(`http://localhost:3000/orders/${email}`)

};


export const bringUserActiveOrders = (email) => {

    return axios.get(`http://localhost:3000/orders/active/${email}`)

};

export const bringAllOrders = () => {

    return axios.get(`http://localhost:3000/orders/`)

};

export const bringActiveAllOrders = () => {

    return axios.get(`http://localhost:3000/orders/active/orders/all`)

};

export const bringAllUsers = () => {

    return axios.get(`http://localhost:3000/users/`)

};

export const deleteUser = (email) => {

    return axios.delete("http://localhost:3000/users/delete/" + email)

}
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
    return await axios.post(`http://localhost:3000/orders/neworder`,movie,config)
}
    


    export const bringOneFilm = (film) => {
        return axios.get(`http://localhost:3000/films/title/${film}`)
   
    }
