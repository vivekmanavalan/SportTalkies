import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { client }  from './Components/Content/client';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Nav/Footer';
import SignIn from './Components/SignIn';
import CreatePost from './Components/Content/CreatePost';
import Home from './Components/Content/Home';
import Post from './Components/Content/Post';
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      issignIn: false,
      isAuthenticated:false,
      items:[],
      index:null,
    }
  }

async componentDidMount (){
  const data= await client.getEntries();
  console.log("data", data.items);
  this.setState({
      items:data.items
  });
}

  signInHandler = () => {
      this.setState({
        issignIn:true,
      });
  }

  authenticateHandler = (e) => {
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
      <section>
      <Switch>
        <Route path="/create" component={CreatePost}>
        </Route>
        <Route path="/signin">
          <SignIn authenticateHandler={this.authenticateHandler}/>
        </Route>
        <Route path="/" exact>
          <Home data={this.state.items} />
        </Route>
        <Route path="/sports/:title" 
          render={(props)=> <Post {...props} data={this.state.items} 
          index={this.state.items.findIndex(obj => obj.fields.title===props.match.params.title)}/>}>

        </Route>
      </Switch>
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
    </Router>
  );
  }
}

export default App;
