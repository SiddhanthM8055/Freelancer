import React,{Fragment,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Dashboard = (props) => {
    console.log(props.token);
    var name;
    const [newName,setName]=useState(name);
    useEffect( () => {
      async function fetchData(){
      try{
        const config = {
          headers:{'x-auth-token':props.token}
        };
        const res = await axios.get('http://localhost:8080/api/auth',config);
        console.log(res.data.name);
        setName(res.data.name);
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
          <div className="landing">
      <div className="dark-overlay" >
        <div className="landing-inner">
          <h1 className="x-large">Freelancer</h1>
          <p className="lead">
           {"Welcome "+newName}
          </p>
		  <Link to='/myProfile'><button className="btn" id="profileButton">My Profile</button></Link>
        </div>
      </div>
      </div>
    </Fragment>
    )
}

export default Dashboard;
