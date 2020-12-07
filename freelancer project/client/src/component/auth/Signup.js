import React,{Fragment,useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'

const Signup = (props) => {
  const history = useHistory();
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  });
  
  const {name,email,password,password2} = formData;

  const onChangeHandler = (event)=> setFormData({...formData,[event.target.name]:event.target.value});
  
  const onSignUpHandler = async (event)=>{
    event.preventDefault();
    if(password !== password2){
      console.log("Passwords do not match");
    }
    else{
      const newUser = {
        name,
        email,
        password
      }
      try{
        const config = {
          headers:{'Content-Type':'application/json'}
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post('http://localhost:8080/api/users',body,config);
        if(res.status === 200){
          console.log(res.data._id);
          props.setToken(res.data._id);
          history.push('/createProfile');
        }
      }
      catch(err){
        throw err;
      }
    }
  }
    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={onSignUpHandler}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={onChangeHandler} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={onChangeHandler}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
        </Fragment>
    )
}

export default Signup;