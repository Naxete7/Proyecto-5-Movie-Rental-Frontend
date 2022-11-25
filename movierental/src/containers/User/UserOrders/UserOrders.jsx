import React, { useState, useEffect } from 'react';
import "./UserOrders.scss"

import { bringUserOrders } from '../../../services/apicalls';

import { userData } from "../userSlice";

import { useSelector } from "react-redux";


const UserOrders = () => {

    const [userOrders, setUserOrders] = useState([]);
    const [error, setError] = useState('');
    const user = useSelector(userData);
    const userMail = JSON.parse(localStorage.getItem("SAVEUSERMAIL"))

    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.

        console.log(userMail)

        if (userOrders.length === 0) {

            bringUserOrders(userMail)
            .then(
                (res) => {
                    console.log(res)
                    setUserOrders(res.data)
                }
            )
            .catch((error) => {
                console.error(error)
                setError(error.response?.data  || 'ups intentalo de nuevo' )
            })

        };


    }, [userOrders]);
    if(error) {
        return <h2>{error.repeat(999)} </h2>
    }
    if (userOrders.length !== 0) {
        return <pre>{JSON.stringify(userOrders, null, 2)}</pre>
    } else {
        return <h2>no data</h2>
    }
};

export default UserOrders;