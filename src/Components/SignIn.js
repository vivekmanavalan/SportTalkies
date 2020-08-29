import React, {Component} from 'react';
import './CSS/SignIn.css';
import Login from './Images/Signin.png';
import {withRouter} from 'react-router-dom';
class SignIn extends Component { 

    state = {
        username:'',
        password:'',
    }

    handleChange = (e) => {
        let name=e.target.name;
        let value= e.target.value;
        this.setState({
            [name]:value,
        });
    } 

    validateHandler = (e) => {
        if(this.state.username==="admin" && this.state.password==="qwe") {
        this.props.history.push('/home');
        this.props.authenticateHandler();
        }
        else{
            alert("Incorrect username and password");
            e.preventDefault();
            this.setState({
                username:'',
                password:'',
            });
        }
    }

    render() {
    
        return(
            <div className="parent_div">
               <div className="signIn_main">
                <h1 className="form_h1">SIGN IN</h1>
                <form className="signIn_form" onSubmit={this.validateHandler}>
                   <div className="form_div1">
                   <input type="text" className="form_input" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                   </div>
                   <div className="form_div2">
                   <input type="password" className="form_input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                   </div>
                   <div className="div_button">
                    <input type="submit"  className="form_button"  value="LOGIN" />
                    </div>
                </form>
                </div>
                <div className="image_div">
                    <img src={Login} width="500px" height="400px" alt="LOGIN" />
                </div>
            </div>

        )
    }
}
export default withRouter(SignIn);