import React, { useState, useEffect } from 'react';
//import "./UserActiveOrders.scss"

import { bringUserActiveOrders } from '../../../services/apicalls';

import { userData } from "../userSlice";

import { useSelector } from "react-redux";

import Card from 'react-bootstrap/Card';

const UserActiveOrders = () => {

    const [userActiveOrders, setUserActiveOrders] = useState([]);
    const [error, setError] = useState('');
    const user = useSelector(userData);
    const userMail = JSON.parse(localStorage.getItem("SAVEUSERMAIL"))

    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.

        if (userActiveOrders.length === 0) {

            bringUserActiveOrders(userMail)
                .then(
                    (res) => {
                        console.log(res)
                        setUserActiveOrders(res.data)
                        console.log(userActiveOrders)
                    }
                )
                .catch((error) => {
                    console.error(error)
                    setError(error.response?.data || 'ups intentalo de nuevo')
                })

        };


    }, 
    // [userActiveOrders]
    );



    if (error) {
        return <pre>{error.repeat(999)} </pre>
    }
    if (userActiveOrders.length !== 0) {
        return (
            // <pre>{JSON.stringify(userOrders, null, 2)}</pre>
           
            <div className='contentStyle'> 
                
            {userActiveOrders.map(userActiveOrder => {
                return (
                  
                    <Card style={{ width: '12rem' }} className="cards">
                        
                    <Card.Img className='imgCards' variant="top" src={userActiveOrder.film.poster || "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg"} />
                    <Card.Body>
                        <Card.Title>{userActiveOrder.name}</Card.Title>
                        <Card.Text>
                            {userActiveOrder.userMail}
                        </Card.Text>
                        <Card.Text>
                                Desde {userActiveOrder.startedAt} <br></br>
                               Hasta {userActiveOrder.endedAt}
                        </Card.Text>
                        <Card.Text>
                        {userActiveOrder.film.title}
                        </Card.Text>
                    </Card.Body>
                </Card>
                    
                )

                
            })}
            </div>
        )
    } else {
        return <pre>No tienes pedidos activos</pre>
    }
};

export default UserActiveOrders;