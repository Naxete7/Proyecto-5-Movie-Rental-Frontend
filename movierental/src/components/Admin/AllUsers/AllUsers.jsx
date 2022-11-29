import React, { useState, useEffect } from 'react';
import "./AllUsers.scss"

import { bringAllUsers } from '../../../services/apicalls';

const AllUsers = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.

        if (allUsers.length === 0) {

            bringAllUsers()
            .then(
                (res) => {
                    console.log(res)
                    setAllUsers(res.data)
                }
            )
            .catch((error) => {
                console.error(error)
                setError(error.response?.data  || 'ups intentalo de nuevo' )
            })

        };


    }, [allUsers]);
    if(error) {
        return <h2>{error.repeat(999)} </h2>
    }
    if (allUsers.length !== 0) {
        return <pre>{JSON.stringify(allUsers, null, 2)}</pre>
    } else {
        return <h2>no data</h2>
    }
};

export default AllUsers;