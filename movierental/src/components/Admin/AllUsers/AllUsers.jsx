import React, { useState, useEffect } from 'react';
import "./AllUsers.scss"

import { bringAllUsers, deleteUser } from '../../../services/apicalls';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';

const AllUsers = () => {

    const [allUsers, setAllUsers] = useState([]);

    const [error, setError] = useState('');



    const deleteMe = (userDelete) => {
        console.log(userDelete)
        deleteUser(userDelete)
            .then(res => {
                bringAllUsers()
                    .then(
                        (res) => {
                            console.log(res)
                            setAllUsers(res.data)
                        }
                    )
                    .catch((error) => {
                        console.error(error)
                        setError(error.response?.data || 'ups intentalo de nuevo')
                    })

            })


    }

    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.
        bringAllUsers()
            .then(
                (res) => {
                    console.log(res)
                    setAllUsers(res.data)
                }
            )
            .catch((error) => {
                console.error(error)
                setError(error.response?.data || 'ups intentalo de nuevo')
            })


    }, []);

    if (error) {
        return <h2>{error.repeat(999)} </h2>
    }
    if (allUsers.length !== 0) {
        return (
            // <pre>{JSON.stringify(allUsers, null, 2)}</pre>
            <div className='contentStyle2'>
                {
                    allUsers.map(allUser => {
                        return (
                            <Card style={{ width: '12rem' }} className="cards2" key={allUser.mail}>
                                <Card.Img variant="top" src={`https://robohash.org/YOUR-TE${allUser.mail}dsXT.png`} />
                                <Card.Body>
                                    <Card.Title>{allUser.name}</Card.Title>
                                    <Card.Text>
                                        {allUser.mail}
                                    </Card.Text>
                                    <Card.Text>
                                        {allUser.birth_Date}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => deleteMe(allUser.mail)}>Delete</Button>
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

export default AllUsers;