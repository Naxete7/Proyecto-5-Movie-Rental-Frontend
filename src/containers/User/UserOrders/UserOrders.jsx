import React, { useState, useEffect } from 'react';
import "./UserOrders.scss"

import { bringUserOrders } from '../../../services/apicalls';

import { userData } from "../userSlice";

import { useSelector } from "react-redux";

import Card from 'react-bootstrap/Card';
import { Col, Row, Container } from 'react-bootstrap';

const UserOrders = () => {

    const [userOrders, setUserOrders] = useState([]);
    const [error, setError] = useState('');
    const user = useSelector(userData);
    const userMail = JSON.parse(localStorage.getItem("SAVEUSERMAIL"))

    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.

        if (userOrders.length === 0) {

            bringUserOrders(userMail)
                .then(
                    (res) => {
                        console.log(res)
                        setUserOrders(res.data)
                        console.log(userOrders)
                    }
                    
                )
                .catch((error) => {
                    console.error(error)
                    setError(error.response?.data || 'ups intentalo de nuevo')
                })

        };


    }, [userOrders]);

    console.log(userOrders)

    if (error) {
        return <h2>{ error.repeat(999) } </h2>

    }
    if (userOrders.length !== 0) {
        console.log(userOrders,"-----------------------------------------------------------------------------------------------------------")
        return (
            // <pre>{JSON.stringify(userOrders, null, 2)}</pre>
            <div className='contentStyle'> 
                
              
                {userOrders.map(userOrder => {
                  <div><h1> Todos los alquileres realizados por el usuario </h1> </div>
                return (
                    
                  
   
                     
                        <Card style={{ width: '12em' }} className="cards" key={userOrder.id_order}>
                    <Card.Img variant="top" src={userOrder.film.poster || "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg"} />
                    <Card.Body>
                        <Card.Title>{userOrder.name}</Card.Title>
                        <Card.Text>
                            {userOrder.userMail}
                        </Card.Text>
                        <Card.Text>
                            {userOrder.startedAt}-{userOrder.endedAt}
                        </Card.Text>
                        <Card.Text>
                            {userOrder.film.title}
                        </Card.Text>
                    </Card.Body>
                            </Card>
                    
                )

                
            })}
            </div>
        )
    } else {
        return <h2>Este usuario aun no ha realizado alquileres</h2>
    }
        
};

export default UserOrders;