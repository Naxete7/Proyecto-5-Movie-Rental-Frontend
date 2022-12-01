import React, { useState, useEffect } from 'react';
import "./ActiveAllOrders.scss"

import { bringActiveAllOrders } from '../../../services/apicalls';

import Card from 'react-bootstrap/Card';

const ActiveAllOrders = () => {

    const [activeAllOrders, setActiveAllOrders] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.

        if (activeAllOrders.length === 0) {

            bringActiveAllOrders()
            .then(
                (res) => {
                    console.log(res)
                    setActiveAllOrders(res.data)
                }
            )
            .catch((error) => {
                console.error(error)
                setError(error.response?.data  || 'ups intentalo de nuevo' )
            })

        };
        

    }, []);

    console.log(activeAllOrders)

    if(error) {
        return <h2>{error.repeat(999)} </h2>
    }
    if (activeAllOrders.length !== 0) {
        return (
        // <pre>{JSON.stringify(allOrders, null, 2)}</pre>
        <div className='contentStyle'>
            {
                activeAllOrders.map(activeAllOrder => {
                    return (
                        <Card style={{ width: '12rem' }} className="cards" key={activeAllOrder.id_order}>
                        <Card.Img variant="top" src={activeAllOrder.film.poster} />
                        <Card.Body>
                            {/* <Card.Title>{allOrder.film.title}</Card.Title> */}
                            <Card.Text>
                                {activeAllOrder.userMail}
                            </Card.Text>
                            <Card.Text>
                                From {activeAllOrder.startedAt} Until {activeAllOrder.endedAt}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    )
                })
            }
        </div>
        
        )
    } else {
        return <h2>no data</h2>
    }
};

export default ActiveAllOrders;