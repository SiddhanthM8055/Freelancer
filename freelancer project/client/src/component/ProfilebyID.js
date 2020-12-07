import React,{Fragment,useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProfilebyID = (props) => {
    var prof={
        name:'',
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
        name,
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
                const url = 'http://localhost:8080/api/profile/user/'+props.match.params.id;
                const res = await axios.get(url);
                res.data.skills = res.data.skills.join();
                setProf(res.data);
                
            }
            catch(err){
                throw err;
            }
        }
        fetchData()
    },
    [props.match.params.id]);
    return (
        <Fragment>
            <Link to='/profiles'> <button class="btn" id="profileButton">Back</button></Link>
            <table id="profileTable">
                <tbody>
                    <tr>
				        <th>Name</th>
                        <td id="profileTableId"><h4>{name}</h4></td>
			        </tr>
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
        </Fragment>
    )
}

export default ProfilebyID;