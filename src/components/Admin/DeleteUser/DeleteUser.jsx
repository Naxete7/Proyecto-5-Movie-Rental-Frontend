
import React, { useState, useEffect } from 'react';

import './DeleteUser.scss';

import { deleteUser } from '../../../services/apicalls';

import { useSelector } from "react-redux";

import { Button, Checkbox, Form, Input } from 'antd';

const DeleteUser = () => {
    
    const [userDelete,setUserDelete] = useState({
            mail: ""
          })

    const deleteMe = () => {
        console.log(userDelete)
        deleteUser(userDelete.mail)
          .then(res => {
            console.log(res)
          })
      }

    const inputHandler = (e) => {
        console.log(e.target.value)
    
        //Aquí setearemos de forma DINÁMICA el BINDEO entre inputs y hook
        setUserDelete((prevState)=> ({
            ...prevState, [e.target.name]: e.target.value
        }));

        
   
}

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
      autoComplete="off"
    >

      <Form.Item
        //label="mail"
        name="mail"
        rules={[
          {
            required: true,
            message: 'Please input user Email',
          },
        ]}
      >
        <input type="mail" name="mail" placeholder="mail" onChange={(e)=>inputHandler(e)}/>
      </Form.Item>
        <Button className="buttonDesign" type="primary" htmlType="submit" onClick={()=> deleteMe()}>
          Delete
        </Button>
    </Form>

    </div>
  )
}

export default DeleteUser;
