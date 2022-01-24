import React, { Component } from 'react';
import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    //retriving all entered information 
    axios.get("/posts").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
  }

  onDelete = (id) => {
    //implementation of method deletion by specific id
    axios.delete(`/post/delete/${id}`).then((res) => {
      alert("delete successfully");
      this.retrievePosts();
    })
  }

  //implementation of searching function, searching done by including uppercases and lowercases
  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.topic.toLowerCase().includes(searchKey) ||
      post.description.toLowerCase().includes(searchKey) ||
      post.ingredients.toLowerCase().includes(searchKey)

    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("posts").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  }
  render() {
    return (

      <div className="container">
        <h> Order Form </h>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="search"
            namr="searchQuery"
            onChange={this.handleSearchArea}>

          </input>

        </div>
        <table class="table">
          <thead>
            <tr>
              {/* defining tabel headings */}
              <th scope="col">#ID</th>
              <th scope="col">Recipe Name</th>
              <th scope="col">Dsescription</th>
              <th scope="col">Ingredients</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {
              //auto incrementing id
              this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={`/post/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.topic}
                    </a>
                  </td>
                  <td>{posts.description}</td>
                  <td>{posts.ingredients}</td>
                  <td>

                    {/* button for update */}
                    <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    {/* button for deletion */}
                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                      <i className="fas fa-edit"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
          <br/>
          <br/>
          
          <button className="ntn btn-success"><a href="/add" style={{ textDecoration: 'none', color: 'white' }}>Add new Recipe</a></button>
        </table>

      </div>
    )
  }
}
export default Home;
