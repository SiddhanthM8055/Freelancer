import React, { Fragment,useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const CreateProfile = (props) => {
  const history = useHistory();
  const [formData,setFormData] = useState({
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
  });
  const{
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
  } = formData;
  
  const onChangeHandler = (event) => setFormData({...formData,[event.target.name]:event.target.value});
  const onSubmitHandler = async (event)=>{
    event.preventDefault();
    const newProfile = {
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
    };
    try{
      const config = {
        headers:{'Content-Type':'application/json','x-auth-token':props.token}
      };
      const body = JSON.stringify(newProfile);
      const res = await axios.post('http://localhost:8080/api/profile',body,config);
      if(res.status === 200){
          history.push('/dashboard');
      }
    }
    catch(err){
      throw err;
    }
  }
  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
      <i className="fas fa-user"></i> Let's get some information to make your profile stand out</p>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" value={company} onChange = {onChangeHandler}/>
          <small className="form-text">Could be your own company or one you work for</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" value={website} onChange = {onChangeHandler}/>
          <small className="form-text">Could be your own or a company website</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange = {onChangeHandler}/>
          <small className="form-text">City and Country suggested (eg. Bangalore, India)</small>
        </div>
	      <div className="form-group">
          <select name="status" value={status} onChange = {onChangeHandler}>
            <option value="0">Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">Give us an idea of where you are at in your career</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Skills" name="skills" value={skills} onChange = {onChangeHandler}/>
          <small className="form-text">Please use comma separated values (eg.HTML,CSS,JavaScript,PHP)</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChangeHandler}
          />
          <small className="form-text">Impress the employers with your Github repo</small>
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio" id="splTextArea" value={bio} onChange = {onChangeHandler}></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Education" name="education" value={education} onChange = {onChangeHandler}/>
          <small className="form-text">Degree and College</small>
        </div>
	      <div className="form-group">
          <input type="text" placeholder="Experience" name="experience" value={experience} onChange = {onChangeHandler}/>
          <small className="form-text">Experience</small>
        </div>
	      <div className="form-group">
          <input type="text" placeholder="Contacts" name="contacts" value={contacts} onChange = {onChangeHandler}/>
          <small className="form-text">Contact details</small>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
      </form>
    </Fragment>
  )
}

export default CreateProfile;