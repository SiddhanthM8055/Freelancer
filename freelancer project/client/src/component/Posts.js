import React, { Fragment,useState,useEffect } from 'react'
import axios from 'axios'
import PostItem from './PostItem'

const Posts = (props) => {
    var posts = [];
    const [newPosts,setPosts] = useState(posts);
    useEffect( () => {
            async function fetchData(){
                const config = {
                    headers:{'x-auth-token':props.token}
                };
                const res = await axios.get('http://localhost:8080/api/posts',config);
                if(res.status===200){
                    setPosts(res.data);
                }
            }
            fetchData();
        },
        [props.token]
    );
    return (
        <Fragment>
            <h1 class="large text-primary">Posts</h1>
            <p class="lead"><i class="fas fa-user"></i> Welcome to the community!</p>
            <div className="posts">
            {newPosts.map(post => <PostItem key={post._id} post={post} />)}
            </div>
        </Fragment>
    )
}

export default Posts;