import React, { Component } from 'react';
import axios from 'axios';

class PostDetails extends Component{
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  //retriew data of specific form based on recipe name
  componentDidMount(){
    const id =this.props.match.params.id;

    axios.get(`/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
    render(){
      const {topic,description, ingredients} = this.state.post;
      return(
        <div style={{marginTop:'20px'}}>
          <h1>{topic}</h1>
          <hr/>
          <div className='container'>
          <dl className="row" style={{width:"100%"}}>
            <div class='col-6'>
            <dt className="col-sm-3">Description</dt>
            <dd className="col-sm-9">{description}</dd>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <dt className="col-sm-3">Ingredients</dt>
            <dd className="col-sm-9">{ingredients}</dd>
            </div>
            <div class='col-6'>
            <img src="https://cdn.dribbble.com/users/2243442/screenshots/11362056/cooking-at-home.gif" style={{width:"90%"}}/>
          </div>
          </dl>
        
          </div>
          
         
          
        
        

        
         
       
         </div>
        
        
      )
    }
  }
  export default PostDetails;
