
import React, {useState} from 'react';
import "./Login.scss";

import { loginUser } from '../../services/apicalls';

import { useNavigate } from 'react-router-dom';

import Navigator from '../../components/Navigator/Navigator';
 
const Login = () => {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        mail : "",
        password : ""
    });

    //Handlers

    const inputHandler = (e) => {
        //console.log(e.target.value);
        
        //Aqui setearemos DINÁMICAMENTE el BINDEO entre inputs y hook.
        setUser((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value

        }));

        
    }


    //Funciones

    const logMe = () => {

        //Estoy ejecutando loginUser y le paso el body (que en este caso es el hook user)
        console.log(user)
        loginUser(user)
            .then(res => {
                //Aqui procedo a guardar el token en redux, o en alguna otra parte del proyecto
                console.log(res);
                
                if(res){
                    //Quiere decir que la respuesta del backend al proceso de login es correcta...

                    setTimeout(()=>{
                        navigate("/");
                    },1000);
                }
            });

    }

     return (
         <div className='loginDesign'>
            <pre>{JSON.stringify(user, null,2)}</pre>
            <Navigator pathUno={"/"} destinoUno={"Home"} pathDos={"/register"} destinoDos={"Register"}/>         

            <div className="inputsContainer">
                <input type="text" name="mail" placeholder="mail" onChange={(e)=>inputHandler(e)}/>
                <input type="password" name="password" placeholder="password" onChange={(e)=>inputHandler(e)}/>
            </div>
            <div onClick={()=>logMe()} className="buttonDesign">
                Login me!
            </div>

         </div>
     )
}
export default Login;