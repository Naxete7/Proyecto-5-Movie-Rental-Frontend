
import axios from 'axios';

var root = 'https://localhost:3001/films/';
//var apiKey = '210d6a5dd3f16419ce349c9f1b200d6d';

export const loginUser = async (body) => {
   
console.log(body)

// const bodyReq = JSON.stringify(body)

// console.log(bodyReq)

    return axios.post(
        "http://localhost:3000/auth/login",
            body
            // {
            //     "mail": 'elbanking@punsdhi.com',
            //     "password": 'gsdfg34563SFGSF'
            //   }
        );
};

export const registerUser = async (body) => {
   
    console.log(body)
    
    // const bodyReq = JSON.stringify(body)
    
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

    export const bringAllOrders = () => {
    
        return axios.get(`http://localhost:3001/orders/`)

    };

    export const bringAllUsers = () => {
    
        return axios.get(`http://localhost:3001/users/`)

    };

    export const deleteUser = (email) => {
    
        return axios.delete("http://localhost:3001/users/delete/" + email)
        
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

    
