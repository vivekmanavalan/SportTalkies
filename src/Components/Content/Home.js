import React, {Component} from 'react';
import { client }  from './client';
import Card from './Card';

class Home extends Component {

    state={
        items:[],
        index:null
    }

    async componentDidMount (){
        const data= await client.getEntries();
        console.log("data", data.items);
        this.setState({
            items:data.items
        });
      }

    render(){
        return(
            <div>
                {this.state.items ?
                <Card  data={this.state.items} />
                :
                <h1>Loading....</h1>
                }

            </div>
        );
    }
    
}
export default Home;