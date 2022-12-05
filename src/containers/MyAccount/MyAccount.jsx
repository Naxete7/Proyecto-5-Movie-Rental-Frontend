import "./MyAccount.scss"
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from '../User/Profile/Profile'
import UserOrders from '../User/UserOrders/UserOrders';
import AllOrders from '../../components/Admin/AllOrders/AllOrders'

import AllUsers from "../../components/Admin/AllUsers/AllUsers";

import UserActiveOrders from "../User/UserActiveOrders/UserActiveOrders";
import ActiveAllOrders from "../../components/Admin/ActiveAllOrders/ActiveAllOrders";

import { Container, Row,  } from "react-bootstrap";

const MyAccount = () => {

    let navigate = useNavigate();

   

    const userRole = localStorage.getItem("SAVEUSERROLE")

    // const userRole = undefined

    // const userRole = "admin"

    useEffect(() => {
        

     
        // console.log(userReduxCredentials?.credentials?.token); 

        if (userRole === "null" || userRole === null) {          // TODO: redireccionar a una vista que diga que no puede acceder a registro si ya está logueado con un timeout y que luego redireccione a home            
            navigate("/");       
    };});

 

    if(userRole === "userRole" || userRole === "2") {
        return <div className = "myAccountDesign">
                <Container>
                <Row><h2>Usuario</h2></Row>
                <Row> <Profile /></Row>
                <Row><h2>Alquileres en activo</h2></Row>
                <Row> <UserActiveOrders /></Row> 
                <Row><h2>Todos los alquileres realizados</h2></Row>
                 <Row>  <UserOrders /></Row> 
                </Container>
        </div>
    }
    else {
        return <Container >
            <Row><h2>Usuario</h2></Row>
            <Row  > <Profile /> </Row> 
             <Row><h2>Alquileres en activo</h2></Row>
            <Row  > <ActiveAllOrders /> </Row> 
            <Row><h2>Todos los alquileres realizados</h2></Row>
            <Row > <AllOrders /></Row>  
            <Row><h2>Todos los usuarios</h2></Row>
        <Row>  <AllUsers/></Row>
                 </Container>
    }
};

export default MyAccount;