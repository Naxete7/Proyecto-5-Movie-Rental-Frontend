
import axios from 'axios';

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
    
            return axios.get("http://api.themoviedb.org/3/movie/popular?api_key=78701b4e0dfb52f1194f8f82670bab14&language=en-US&page=1");
            
    
        } catch (error) {
            console.log(error);
        }
    };

    export const bringUserInfo = (email) => {
    
        return axios.get("http://localhost:3000/users/id/" + email)
        
    };

    export const bringUserOrders = (email) => {
    
        return axios.get(`http://localhost:3000/orders/${email}`)

    };

    export const bringAllOrders = () => {
    
        return axios.get(`http://localhost:3000/orders/`)

    };
