import React, { Component } from 'react';
import axios from 'axios';

export default class EditPost extends Component{

//initializing using constructor to null values
  constructor(props){
    super(props);
    this.state={
      topic:"",
      description:"",
      ingredients:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{

    e.preventDefault();
    const id = this.props.match.params.id;

    const {topic,description,ingredients} = this.state;

    const data ={
      topic:topic,
      description:description,
      ingredients:ingredients
    }

    console.log(data)

    //updating the relevant data by retrieving existing data
    axios.put(`/post/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Post updated Successfully")
        this.setState(
          {
            topic:"",
            description:"",
            ingredients:""
          }
        )
      }
    })
  }
  
  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
         
          topic:res.data.post.topic,
          description:res.data.post.description,
          ingredients:res.data.post.ingredients

        });

        console.log(this.state.post);
      }
    })

  }

  render() {
    return (
      //designing form for updating
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Edit Recipe</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Recipe name</label>
              <input type="text"
              className="form-control"
              name="topic"
              placeholder="Enter Topic"
              value={this.state.topic}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Description</label>
              <input type="text"
              className="form-control"
              name="description"
              placeholder="Enter Desciption"
              value={this.state.description}
              onChange={this.handleInputChange}/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>ingredients</label>
              <input type="text"
              className="form-control"
              name="ingredients"
              placeholder="Enter ingredients"
              value={this.state.ingredients}
              onChange={this.handleInputChange}/>
            </div>

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update
                          
              </button>
          
          
          </form>
          
        </div>
    )
   }
}
