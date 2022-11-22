import React, {useState, useEffect} from "react";
import "./Register.scss"
import Navigator from "../../../components/Navigator/Navigator";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/apicalls";
import { userData, login } from "../userSlice";
import { useSelector, useDispatch } from "react-redux";


import { Button, Checkbox, Form, Input } from 'antd';



const Register = () => {
  let navigate = useNavigate()
  const userReduxCredentials = useSelector(userData);

  useEffect(() => {
    console.log(userReduxCredentials); 
    if (userReduxCredentials?.credentials?.token !== undefined || localStorage.getItem("SAVEJWT") !== null) {          // TODO: redireccionar a una vista que diga que no puede acceder a registro si ya está logueado con un timeout y que luego redireccione a home            
        navigate("/");       
};});

  const regMe = () => {
    registerUser(user)
      .then(res => {
        console.log(res)
      })
  }

  const inputHandler = (e) => {
    console.log(e.target.value)

    //Aquí setearemos de forma DINÁMICA el BINDEO entre inputs y hook
    setUser((prevState)=> ({
        ...prevState, [e.target.name]: e.target.value
    }));

}

  const [user,setUser] = useState({
    username: "",
    mail: "",
    password: "",

  })
    const onFinish = (values) => {
      console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
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
        
          <Navigator pathUno={"/login"} destinoUno={"Login"} pathDos={"/"} destinoDos={"Home"}/>
    
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
          <Checkbox>Remember me</Checkbox>
       
            </Form.Item>
  
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={()=> regMe()}>
            Submit
          </Button>
        </Form.Item>
      </Form>

      </div>
    );
  };


export default Register;