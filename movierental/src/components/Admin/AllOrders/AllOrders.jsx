import React, { useState, useEffect } from 'react';
import "./AllOrders.scss"

import { bringAllOrders } from '../../../services/apicalls';

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
    if(error) {
        return <h2>{error.repeat(999)} </h2>
    }
    if (allOrders.length !== 0) {
        return <pre>{JSON.stringify(allOrders, null, 2)}</pre>
    } else {
        return <h2>no data</h2>
    }
};

export default AllOrders;