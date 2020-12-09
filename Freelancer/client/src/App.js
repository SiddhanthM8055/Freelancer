import React, {Fragment,useState} from 'react';
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
import './App.css';
import Navbar from './component/layout/Navbar';
import NavbarLogin from './component/layout/NavbarLogin';
import Home from './component/layout/Home';
import Login from './component/auth/Login';
import Signup from './component/auth/Signup';
import Dashboard from './component/Dashboard';
import MyProfile from './component/MyProfile';
import CreateProfile from './component/CreateProfile';
import EditProfile from './component/EditProfile';
import CreatePost from './component/CreatePost';
import Profiles from './component/Profiles';
import ProfilebyID from './component/ProfilebyID';
import Posts from './component/Posts';
import PostbyID from './component/PostbyID';

const App = () => {
    var user_token = '';
    const [user_flag,new_token] = useState(user_token);

    const getTokenHandler = (token) =>{
        new_token(token);
    }
    const resetTokenHandler = ()=>{
        new_token('');
    }
    return(
        <Router>
            <Fragment>
                {user_flag===''?<Navbar />:<NavbarLogin resetToken={resetTokenHandler}/>}
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    {user_flag!=='' && <Route exact path='/dashboard' render={()=>(<Dashboard token={user_flag} />)} />}
                    <section className='container'>
                    <Route exact path='/signup' render={()=>(<Signup setToken={getTokenHandler} />)} />
                    <Route exact path='/login' render={()=>(<Login setToken={getTokenHandler} />)} />
                    <Route exact path='/myProfile' render={()=>(<MyProfile token={user_flag} />)} />
                    <Route exact path='/profiles' component={ Profiles }/>
                    <Route exact path='/profile/:id' component={ ProfilebyID }/>
                    <Route exact path='/createProfile' render={()=>(<CreateProfile token={user_flag} />)} />
                    <Route exact path='/editProfile' render={()=>(<EditProfile token={user_flag} />)} />
                    <Route exact path='/posts' render={()=>(<Posts token={user_flag} />)} />
                    <Route exact path='/post/:id' render={(routerProps)=>(<PostbyID token={user_flag} {...routerProps} />)} />
                    <Route exact path='/createPost' render={()=>(<CreatePost token={user_flag} />)} />
                    {(window.location.href === 'http://localhost:3000/dashboard' && user_flag==='')?<Redirect to='/' />:''}
                    {(window.location.href === 'http://localhost:3000/profiles' && user_flag==='')?<Redirect to='/' />:''}
                    {(window.location.href === 'http://localhost:3000/posts' && user_flag==='')?<Redirect to='/' />:''}
                    {(window.location.href === 'http://localhost:3000/myProfile' && user_flag==='')?<Redirect to='/' />:''}
                    </section>
                </Switch>
            </Fragment>
        </Router>
    )
}

export default App;