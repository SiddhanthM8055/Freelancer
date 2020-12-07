import React, { Fragment,useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const CreatePost = (props) => {
    const history = useHistory();
    const [formData,setFormData] = useState({
        title : '',
        description : '',
        skills : '',
        money : '',
        deadline : ''
    });
    const {title,description,skills,money,deadline} = formData;
    const onChangeHandler = (event)=> setFormData({...formData,[event.target.name]:event.target.value});
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const newPost = {
            title,
            description,
            skills,
            money,
            deadline
        }
        try{
            const config = {
              headers:{'Content-Type':'application/json','x-auth-token':props.token}
            };
            const body = JSON.stringify(newPost);
            const res = await axios.post('http://localhost:8080/api/posts',body,config);
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
            <h1 class="large text-primary">
        Post Project
      </h1>
      <div class="post-form">
        <div class="bg-primary p">
          <h3>Hire freelancers to do your project</h3>
        </div>
        <form class="form my-1" onSubmit={onSubmitHandler}>
          <div class="form-group">
          <input type="text" placeholder="Project Title" name="title" value={title} onChange={onChangeHandler}/>
          <small class="form-text"
            >A Title for your project</small
          >
        </div>
		<div class="form-group">
          <textarea placeholder="Description" name="description" id="specialTextArea" value={description} onChange={onChangeHandler}></textarea>
          <small class="form-text">Explain the Project in depth</small>
        </div>
		<div class="form-group">
          <input type="text" placeholder="Skills required" name="skills" value={skills} onChange={onChangeHandler}/>
          <small class="form-text"
            >Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</small
          >
        </div>
		<div class="form-group">
          <input type="text" placeholder="Deadline" name="deadline" value={deadline} onChange={onChangeHandler}/>
          <small class="form-text"
            >A deadline for your project</small
          >
        </div>
		<div class="form-group">
          <input type="text" placeholder="Payment" name="money" value={money} onChange={onChangeHandler}/>
          <small class="form-text">Money you are willing to pay for a project well done</small>
        </div>
		
        <input type="submit" class="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
        </Fragment>
    )
}

export default CreatePost;