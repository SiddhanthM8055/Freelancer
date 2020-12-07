import React, { Fragment} from 'react'
import {Link} from 'react-router-dom'

const ProfileItem = (props) => {
    const {userId,name,status,skills,education,experience} = props.profile;
    return (
        <Fragment>
            <div>
            <table id="profileTable">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td><Link to={`/profile/${userId}`} >{name}</Link></td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{status}</td>
                    </tr>
                    <tr>
                        <th>Skills</th>
                        <td>{skills.join()}</td>
                    </tr>
                    <tr>
                        <th>Education</th>
                        <td>{education}</td>
                    </tr>
                    <tr>
                        <th>Experience</th>
                        <td>{experience}</td>
                    </tr>
                </tbody>
            </table>
            <Link to={`/profile/${userId}`} ><button class="btn" id="profileButton">View Profile</button></Link>
            </div>
        </Fragment>
    )
}

export default ProfileItem;
