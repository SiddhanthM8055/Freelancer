import React, { Fragment,useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const MyProfile = (props) => {
    var prof={
        skills:'',
        company:'',
        status:'',
        website:'',
        location:'',
        bio:'',
        githubusername:'',
        education:'',
        experience:'',
        contacts:''
    }
    const [newProf,setProf] = useState(prof);
    const {
        skills,
        company,
        status,
        website,
        location,
        bio,
        githubusername,
        education,
        experience,
        contacts
    } = newProf;
    
    useEffect(() => {
        async function fetchData(){
            try{
                const config = {
                    headers:{'x-auth-token':props.token}
                };
                const res = await axios.get('http://localhost:8080/api/profile/me',config);
                console.log(res.data);
                res.data.skills = res.data.skills.join();
                setProf(res.data);
                
            }
            catch(err){
                throw err;
            }
        }
        fetchData();
    },
    [props.token]);
    return (
        <Fragment>
            <table id="profileTable">
                <tbody>
                    <tr>
                        <th>Status</th>
                        <td id="profileTableTitle">{status}</td>
                    </tr>
                    <tr>
                        <th>Company</th>
                        <td id="profileTableCompany">{company}</td>
                    </tr>
                    <tr>
                        <th>Website</th>
                        <td id="profileTableWebsite">{website}</td>
                    </tr>
                    <tr>
                        <th>Skills</th>
                        <td id="profileTableSkills">{skills}</td>
                    </tr>
                    <tr>
                        <th>Github Username</th>
                        <td id="profileTableGithub">{githubusername}</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td id="profileTableLocation">{location}</td>
                    </tr>
                    <tr>
                        <th>Education</th>
                        <td id="profileTableEducation">{education}</td>
                    </tr>
                    <tr>
                        <th>Experience</th>
                        <td id="profileTableExperience">{experience}</td>
                    </tr>
                    <tr>
                        <th>Contact Details</th>
                        <td id="profileTableEmail">{contacts}</td>
                    </tr>
                    <tr>
                        <th>Bio</th>
                        <td id="profileTableBio">{bio}</td>
                    </tr>
                </tbody>
            </table>
            <div id="updateProfile">
			    <Link to='/editProfile'> <button className="btn" id="profileButton">Update Profile</button></Link>
		    </div>
        </Fragment>
    )
}

export default MyProfile;