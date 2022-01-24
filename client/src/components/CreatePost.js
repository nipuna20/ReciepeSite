import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert'

export default class CreatePost extends Component {

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

    const {topic,description,ingredients} = this.state;

    const data ={
      topic:topic,
      description:description,
      ingredients:ingredients
    }

    console.log(data)

    //validation for recipe name
    if(topic.length<2){
      swal("Enter valid recipe name", "error")
    }else{

      //save the entered data in db
    axios.post("/post/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            topic:"",
            description:"",
            ingredients:""
          }
        )
        swal("Recipe added successfully", "success");
      }
    })
  }

  }

  render() {
    return (

      //designing form to get user inputs
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Add New Recipe</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Recipe Name</label>
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
              <label style={{marginBottom:'5px'}}>Ingredients</label>
              <input type="text"
              className="form-control"
              name="ingredients"
              placeholder="ingredients"
              value={this.state.ingredients}
              onChange={this.handleInputChange}/>
            </div>


          
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
          
          
          </form>
          
        </div>
    )
  }
}