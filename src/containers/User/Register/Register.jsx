import React, {useState, useEffect} from "react";
import "./Register.scss"

import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/apicalls";
import {  login } from "../userSlice";
import {  useDispatch } from "react-redux";
import '../../../components/Button/ButtonDesign.scss'
import { loginUser } from "../../../services/apicalls";

import { Button, Form} from 'antd';



const Register = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  

  useEffect(() => {
  
    let loged = localStorage.getItem("SAVEUSERMAIL")
  

    if (loged) {          // TODO: redireccionar a una vista que diga que no puede acceder a registro si ya está logueado con un timeout y que luego redireccione a home            
        navigate("/");      
};});

  const regMe = () => {
    registerUser(user)
      .then(res => {
        
        try {
          loginUser(user)
              .then(res => {
                  //Aqui procedo a guardar el token en redux, o en alguna otra parte del proyecto

                  if (res.data.message === "Password or email is incorrect") {
                     
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
                      
                  }
              });
      } catch (error) {
         
      }
      })
  }

  const inputHandler = (e) => {

    //Aquí setearemos de forma DINÁMICA el BINDEO entre inputs y hook
    setUser((prevState)=> ({
        ...prevState, [e.target.name]: e.target.value
    }));

}

  const [user,setUser] = useState({
    username: "",
    mail: "",
    password: ""

  })
    const onFinish = (values) => {
     
    };
    const onFinishFailed = (errorInfo) => {
    
    };
    return (
      <div className="registerDesign">
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        
         
        <h1 className=" mb-3 ">REGISTER</h1>
          <Form.Item
            
          //label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
        <input type="text" name="username" placeholder="Username" onChange={(e)=>inputHandler(e)}/>
        </Form.Item>
  
        <Form.Item
          //label="mail"
          name="mail"
          rules={[
            {
              required: true,
              message: 'Please input your mail!',
            },
          ]}
        >
          <input type="mail" name="mail" placeholder="mail" onChange={(e)=>inputHandler(e)}/>
        </Form.Item>

        
  
        <Form.Item
          //label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <input type="password" name="password" placeholder="password" onChange={(e)=>inputHandler(e)}/>

        </Form.Item>
  
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
       
            </Form.Item>
  
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="buttonDesign   d-flex justify-content-center col-5  " type="primary" htmlType="submit" onClick={()=> regMe()}>
            Submit
          </Button>
        </Form.Item>
      </Form>

      </div>
    );
  };


export default Register;