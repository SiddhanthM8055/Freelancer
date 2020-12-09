import React, { Fragment,useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'

const Login = (props) => {
    const history = useHistory();
    const [formData,setFormData] = useState({
      email:'',
      password:''
    });
      
    const {email,password} = formData;
    
    const onChangeHandler = (event)=> setFormData({...formData,[event.target.name]:event.target.value});
      
    const onLoginHandler = async (event)=>{
      event.preventDefault();
      const newUser = {
        email,
        password
      }
      try{
        const config = {
          headers:{'Content-Type':'application/json'}
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post('http://localhost:8080/api/auth',body,config);
        console.log(res.data);
        if(res.status === 200){
          props.setToken(res.data._id);
          history.push('/dashboard');
        }
        else{
          console.log('Invalid credentials');
        }
      }
      catch(err){
        throw err;
      }
    }
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={onLoginHandler}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChangeHandler}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </Fragment>
  )
}

export default Login;