import React,{Component} from 'react';
import { Grid, CardContent, Typography} from '@material-ui/core';
import '../CSS/Card.css';
import {withRouter} from 'react-router-dom';
class Card extends Component {

     postHandler = (e) => {
        this.props.history.push(`/sports/${this.props.data[e].fields.title}`);
    }

    render(){
        if(this.props.data.length>1){
        return(
         
        <div className="container">  
        
        <Grid container spacing={2} justify="center" className="grid_parent">
        {this.props.data.map((elem,index) =>
         <Grid item xs={12} md={3} className="grid_child" onClick={() => this.postHandler(index)}>
         
            <CardContent >
            <Typography variant="h5" component="h2">
                <p className="grid_title" key={index}>{elem.fields.title}</p>
            </Typography>
            <Typography color="textSecondary" key={index}>
                <p className="tags" key={index}>{elem.fields.description}</p>
                </Typography>
            <Typography color="textSecondary" key={index}>
            <div className="div_image">
            <img src={elem.fields.featuredImage.fields.file.url} className="img_content"key={index} height="100%" width="100%" alt="Be Happy" />
            </div>
            </Typography>
            
            <Typography variant="body2"component="p" key={index}>
                {elem.fields.name}
            </Typography>
            </CardContent>
         </Grid>
        )}
         </Grid>
         </div>
        );
        }
        else{
            return(
                <h1>Loading....</h1>
            )
        }
    }
}
export default withRouter(Card);
