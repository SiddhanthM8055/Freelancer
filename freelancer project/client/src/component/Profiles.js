import React, { Fragment,useState,useEffect } from 'react'
import axios from 'axios'
import ProfileItem from './ProfileItem'


const Profiles = () => {
    var profs = [];
    const [profiles,getProfiles] = useState(profs);
    useEffect( () => {
            async function fetchData(){
            const res = await axios.get('http://localhost:8080/api/profile');
            if(res.status===200){
                getProfiles(res.data);
            }
        };
        fetchData();
    },
    []);
    return (
        <Fragment>
            <h1 class="large text-primary">Hire Freelancers</h1>
            <p class="lead">
            Browse and connect with Freelancers
            </p>
            <div className="profiles">
            {profiles.map(profile => <ProfileItem key={profile._id} profile={profile} />)}
            </div>
        </Fragment>
    )
}

export default Profiles;
