import React, {Component} from 'react';
import Card from './Card';

class Home extends Component {

    render(){
        return(
            <div>
                {this.props.data ?
                <Card  data={this.props.data} />
                :
                <h1>Loading....</h1>
                }

            </div>
        );
    }
    
}
export default Home;