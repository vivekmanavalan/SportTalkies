import React, {Component} from 'react';
import '../CSS/Post.css';
import marked from 'marked';

class Post extends Component {

    render(){
        console.log("post",this.props);
        let description = marked(this.props.data[this.props.index].fields.body);
        return(
            <div className="main_div">
               { this.props.data ? 
               <div> 
                <header><h1>{this.props.match.params.title}</h1></header>
                <section>
                    <article>
                    {this.props.data[this.props.index].fields.title}
                    </article>
                    <article dangerouslySetInnerHTML={{__html: description}}/>
                </section>
                </div>
                :
                null
                }
            </div>
        )
    }
}

export default Post;