import React, { Fragment} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment';

const PostItem = (props)=>{
    const {name,userId,date,title,deadline,money,skills} = props.post;
    return(
        <Fragment>
            <div>
                <table id="postsTable">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td><Link to={`/profile/${userId}`} >{name}</Link></td>
                        </tr>
                        <tr>
                            <th>Project Title</th>
                            <td>{title}</td>
                        </tr>
                        <tr>
                            <th>Skills Required</th>
                            <td>{skills.join()}</td>
                        </tr>
                        <tr>
                            <th>Money</th>
                            <td>{money}</td>
                        </tr>
                        <tr>
                            <th>Posted on</th>
                            <td>{moment(date).format('LLL')}</td>
                        </tr>
                        <tr>
                            <th>Deadline</th>
                            <td>{deadline}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to={`/post/${userId}`} ><button class="btn" id="postButton">View Post</button></Link>
            </div>
        </Fragment>
    )
}

export default PostItem;