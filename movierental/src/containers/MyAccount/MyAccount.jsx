import "./MyAccount.scss"
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from '../User/Profile/Profile'
import UserOrders from '../User/UserOrders/UserOrders';
import AllOrders from '../../components/Admin/AllOrders/AllOrders'
import { userData } from "../User/userSlice";
import { useSelector } from "react-redux";
import AllUsers from "../../components/Admin/AllUsers/AllUsers";
import DeleteUser from "../../components/Admin/DeleteUser/DeleteUser";
import { Container, Row, Col } from "react-bootstrap";
const MyAccount = () => {

    let navigate = useNavigate();

    const userReduxCredentials = useSelector(userData);

   

    const userRole = localStorage.getItem("SAVEUSERROLE")

    // const userRole = undefined

    // const userRole = "admin"

    useEffect(() => {
        

        console.log(userRole); 
        // console.log(userReduxCredentials?.credentials?.token); 

        if (userRole === "null" || userRole === null) {          // TODO: redireccionar a una vista que diga que no puede acceder a registro si ya está logueado con un timeout y que luego redireccione a home            
            navigate("/");       
    };});

    console.log(userRole); 

    if(userRole === "userRole" || userRole === "2") {
        return <div className = "myAccountDesign">
            <Profile/>
            <UserOrders/>
        </div>
    }
    else {
        return  <Container >
        <Row  >   <Profile/> </Row> 
        <Row > <AllOrders/></Row>  
        <Row>  <AllUsers/></Row>
        </Container>
    }
};

export default MyAccount;