
import React, { useState, useEffect } from 'react';

import './Profile.scss';

import { bringUserInfo } from '../../../services/apicalls';

const Profile = () => {

    //I will create a hook on which I will deposit the movies once they arrive to us...

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.

        console.log("antes del if")

        if (userInfo.length === 0) {
            // bringmovies()

            console.log("dentro del if")

            setTimeout(() => {
                //Adding a 2 seconds delay on purpose...

                bringUserInfo().then(
                    (res) => {
                        setUserInfo(res)
                        console.log(res)
                    }
                );


            }, 2000);

        };


    }, [userInfo]);


    console.log(userInfo)

    if (userInfo.length !== null) {
        //This means that we HAVE movies inside our hook

        console.log("Returbbb")

        return (
            <div className="profileInfo">

                <div className="leftSide">
                    {
                        userInfo.map(userInfo => {
                            return <div className="movieDesign" key={userInfo.data.id}>
                                <div>{userInfo.data.name}</div>
                                <div>{userInfo.data.birth_Date}</div>
                                <div>{userInfo.data.mail}</div>
                            </div>
                        })
                    }

                </div>





            </div>
        )
    }
};

export default Profile;