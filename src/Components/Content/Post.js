import React, {Component} from 'react';
import { client }  from './client';
import '../CSS/Post.css';
import marked from 'marked';

class Post extends Component {

    //Setting data from props
    state = {
        data:this.props.data,
        index: this.props.index,
    }

    async componentDidMount (){
        const data= await client.getEntries();
        console.log("Post data",data);
        //below line makes sure when link is shared we get the right index using the title from the match.param.title
        let index=data.items.findIndex(obj => obj.fields.title===this.props.match.params.title);
        console.log("post index", index);
        this.setState({
            data:data.items,
            index,
        });
      }

    render(){
        if(this.state.data.length>1){
            //below line converts the content into html content.
            let description = marked(this.state.data[this.state.index].fields.body);
        return(
            <div className="main_div">
               { this.state.data ? 
               <div> 
                <header><h1>{this.props.match.params.title}</h1></header>
                <section>
                    <article>
                    {this.state.data[this.state.index].fields.title}
                    </article>
                    {/* below line makes sure that the html content is converted into proper paragraph */}
                    <article dangerouslySetInnerHTML={{__html: description}}/>
                </section>
                </div>
                :
                null
                }
            </div>
        )
        }
        else{
            return(
                <h2>Loading....</h2>
            )
        }
    }
}

export default Post;