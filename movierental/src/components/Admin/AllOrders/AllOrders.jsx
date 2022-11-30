import React, { useState, useEffect } from 'react';
import "./AllOrders.scss"

import { bringAllOrders } from '../../../services/apicalls';

import Card from 'react-bootstrap/Card';

const AllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.

        if (allOrders.length === 0) {

            bringAllOrders()
            .then(
                (res) => {
                    console.log(res)
                    setAllOrders(res.data)
                }
            )
            .catch((error) => {
                console.error(error)
                setError(error.response?.data  || 'ups intentalo de nuevo' )
            })

        };


    }, [allOrders]);

    console.log(allOrders)

    if(error) {
        return <h2>{error.repeat(999)} </h2>
    }
    if (allOrders.length !== 0) {
        return (
        // <pre>{JSON.stringify(allOrders, null, 2)}</pre>
        <div className='contentStyle'>
            {
                allOrders.map(allOrder => {
                    return (
                        <Card style={{ width: '12rem' }} className="cards" key={allOrder.id_order}>
                        <Card.Img variant="top" src={allOrder.film.poster} />
                        <Card.Body>
                            {/* <Card.Title>{allOrder.film.title}</Card.Title> */}
                            <Card.Text>
                                {allOrder.userMail}
                            </Card.Text>
                            <Card.Text>
                                From {allOrder.startedAt} Until {allOrder.endedAt}
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

export default AllOrders;