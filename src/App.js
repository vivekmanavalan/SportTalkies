import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Nav/Footer';
import SignIn from './Components/SignIn';
import CreatePost from './Components/Content/CreatePost';
import Home from './Components/Content/Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      issignIn: false,
      isAuthenticated:false,
    }
  }

  signInHandler = () => {
      this.setState({
        issignIn:true,
      });
  }

  authenticateHandler = (e) => {
    console.log("called");
    this.setState({
      isAuthenticated:!this.state.isAuthenticated,
    });
  }

  render(){
  return (
    <Router>
    <div className="main_app" >
      <header>
        <Nav signInHandler={this.signInHandler} isAuthenticated={this.state.isAuthenticated} authenticateHandler={this.authenticateHandler}/>
      </header>
      <Switch>
        <Route path="/create" component={CreatePost}>
        </Route>
        <Route path="/signin">
        <SignIn authenticateHandler={this.authenticateHandler}/>
        </Route>
        <Route path="/home" component={Home} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </div>
    </Router>
  );
  }
}

export default App;
