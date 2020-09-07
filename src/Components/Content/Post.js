import React, {Component} from 'react';


class Post extends Component {
    render(){
        console.log("post",this.props);
        return(
            <div>
                <h1>Post Detail</h1>
                <p> Hello</p>
            </div>
        )
    }
}

export default Post;