import React, {useState} from 'react';
import '../CSS/Nav.css';
import {Link} from 'react-router-dom';
import ProfilePic from '../Images/Profilepic.png';

const Nav = (props) => {
    const [toggleLogout,setToggleLogout] = useState(false);
    const showLogout = () => {
       setToggleLogout(!toggleLogout);
       
    }
        return(
            <nav className="nav_main">
                <Link style={{textDecoration:'none'}} to="/">
                    <p className="nav_p">Sports Talkies</p>
                </Link>
                <ul className="nav_ul">
                {props.isAuthenticated ?
                   
                   <div className="postSignin_div">
                   <Link style={{ textDecoration: 'none' }} to="/create"> 
                   <li className="create_post">CREATE POST</li> 
                   </Link>
                   <img src={ProfilePic} className="image_nav" width="45px" height="45px" alt="user" onClick={showLogout}/>
                   {toggleLogout ?
                   <div className="logout">
                   <p className="logout_p" onClick={props.authenticateHandler}>Logout</p>
                   </div>
                    :
                    null
                    }
                   </div>
                   
                    :               
                <Link style={{ textDecoration: 'none' }} to="/signin">
                    <li onClick={props.signInHandler}>SIGN IN</li> 
                </Link>
}
                </ul>
            </nav>
        )
    }

export default Nav;