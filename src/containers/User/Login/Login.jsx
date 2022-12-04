
import React, { useState, useEffect } from 'react';
import "./Login.scss";
import { loginUser } from '../../../services/apicalls';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { userData, login } from "../userSlice";
import Navigator from '../../../components/Navigator/Navigator';
import { errorCheck } from '../../../services/useful';
import { Card } from 'antd';
import '../../../components/Button/ButtonDesign.scss'
import { Button, Space } from 'antd';


const Login = () => {

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const userReduxCredentials = useSelector(userData);

    const [user, setUser] = useState({
        mail: "",
        password: ""
    });

    const [userError, setUserError] = useState({
        mailError: "",
        passwordError: "",
        LoginError: ""
    })

    useEffect(() => {
     
        let loged = localStorage.getItem("SAVEUSERMAIL")
       

        if (loged) {          // TODO: redireccionar a una vista que diga que no puede acceder a registro si ya está logueado con un timeout y que luego redireccione a home            
            navigate("/");
        };
    });

    //Handlers

    const inputHandler = (e) => {
       

        //Aqui setearemos DINÁMICAMENTE el BINDEO entre inputs y hook.
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }));
    }

    const errorHandler = (field, value, type) => {

        let error = ""

        error = errorCheck(field, value, type)

        setUserError(((prevState) => ({
            ...prevState,
            [field + "Error"]: error

        })))
    };


    //Funciones

    const logMe = () => {

        //Estoy ejecutando loginUser y le paso el body (que en este caso es el hook user)
       
        try {
            loginUser(user)
                .then(res => {
                    //Aqui procedo a guardar el token en redux, o en alguna otra parte del proyecto
                   

                    if (res.data.message === "Password or email is incorrect") {
                        setUserError(((prevState) => ({
                            ...prevState,
                            LoginError: "El email o la contraseña son incorrectos"

                        })))
                    } else {
                        localStorage.setItem("SAVEJWT", JSON.stringify(res.data.jwt));
                        localStorage.setItem("SAVEUSERMAIL", JSON.stringify(res.data.mail));
                        if (res.data.role === null) {
                            localStorage.setItem("SAVEUSERROLE", "userRole")
                        } else {
                            localStorage.setItem("SAVEUSERROLE", JSON.stringify(res.data.role))
                        }
                        

                        dispatch(login({
                            credentials: {
                                token: res.data.jwt,
                                mail: res.data.mail,
                                role: res.data.role
                            }
                        }));
                        setUserError(((prevState) => ({
                            ...prevState,
                            LoginError: ""

                        })))
                    }
                });
        } catch (error) {
            console.log(error)
        }

    }
    

    return (
        <div className='loginDesign'>
            <pre>Bienvenido de nuevo</pre>

            <div className="inputsContainer">
                <div className="errorInput">{userError.LoginError}</div>
                <div>
                    <input type="mail" name="mail" placeholder="mail" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "mail")} />
                    <div className="errorInput">{userError.mailError}</div>
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "password")} />
                    <div className="errorInput">{userError.passwordError}</div>
                </div>
            </div>
            <div onClick={() => logMe()} className="buttonDesignLogin">
                Login me!
            </div>

        </div>
    )
}
export default Login;
