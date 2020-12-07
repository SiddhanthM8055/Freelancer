import React,{Fragment,useState,useEffect} from 'react'
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'
import moment from 'moment'

const PostbyID = (props) => {
    const history = useHistory();
    var post={
        name:'',
        skills:'',
        email:'',
        description:'',
        title:'',
        money:'',
        deadline:'',
        date:''
    }
    const [newPost,setPost] = useState(post);
    const {
        name,
        skills,
        email,
        description,
        title,
        money,
        deadline,
        date
    } = newPost;
    useEffect(() => {
        async function fetchData(){
            try{
                const url = 'http://localhost:8080/api/posts/'+props.match.params.id;
                const config = {
                    headers:{'x-auth-token':props.token}
                }
                const res = await axios.get(url,config);
                res.data.skills = res.data.skills.join();
                setPost(res.data);
            }
            catch(err){
                throw err;
            }
        }
        fetchData();
    },
    [props.match.params.id,props.token]);
    const deletePostHandler = async () => {
        try{
            const url = 'http://localhost:8080/api/posts/'+props.token;
            const config = {
                headers:{'x-auth-token':props.token}
            }
            const res = await axios.delete(url,config);
            if(res.status === 200){
                history.push('/posts');
            }
        }
        catch(err){
            throw err;
        }
    }
    return (
        <Fragment>
            <div>
                <Link to='/posts' ><button class="btn" id="postButton">Back</button></Link>
                <table id="postsTable">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td><Link to={`/profile/${props.match.params.id}`} >{name}</Link></td>
                        </tr>
                        <tr>
                            <th>Project Title</th>
                            <td>{title}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{description}</td>
                        </tr>
                        <tr>
                            <th>Skills Required</th>
                            <td>{skills}</td>
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
                        <tr>
                            <th>Contact Details</th>
                            <td>{email}</td>
                        </tr>
                    </tbody>
                </table>
                {props.token === props.match.params.id?<button type="button" class="btn btn-danger" onClick={deletePostHandler}>Delete Post</button>:<Fragment></Fragment>}
            </div>
        </Fragment>
    )
}

export default PostbyID;