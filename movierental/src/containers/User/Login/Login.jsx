
import React, { useState, useEffect } from 'react';
import "./Login.scss";
import { loginUser } from '../../../services/apicalls';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { userData, login } from "../userSlice";
import Navigator from '../../../components/Navigator/Navigator';
import { errorCheck } from '../../../services/useful';
import { Card } from 'antd';


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
        passwordError: ""
    })

    useEffect(() => {
        console.log(userReduxCredentials); 
        let loged = localStorage.getItem("SAVEUSERMAIL")
        console.log(loged)

        if (loged) {          // TODO: redireccionar a una vista que diga que no puede acceder a registro si ya está logueado con un timeout y que luego redireccione a home            
            navigate("/");       
    };});

            //Handlers

            const inputHandler = (e) => {
                console.log(e.target.value);

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
                console.log(user)
                loginUser(user)
                    .then(res => {
                        //Aqui procedo a guardar el token en redux, o en alguna otra parte del proyecto
                        console.log(res);
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


                        // if(res){
                        //     //Quiere decir que la respuesta del backend al proceso de login es correcta...

                        //     setTimeout(()=>{
                        //         navigate("/");
                        //     },1000);
                        // }
                    });

            }

            return (
                <div className='loginDesign'>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                    <Navigator pathUno={"/"} destinoUno={"Home"} pathDos={"/register"} destinoDos={"Register"} />

                    <div className="inputsContainer">
                        <div>
                            <input type="mail" name="mail" placeholder="mail" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "mail")} />
                            <div className="errorInput">{userError.mailError}</div>
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="password" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "password")} />
                            <div className="errorInput">{userError.passwordError}</div>
                        </div>
                    </div>
                    <div onClick={() => logMe()} className="buttonDesign">
                        Login me!
                    </div>

                </div>
            )
        }
export default Login;
       