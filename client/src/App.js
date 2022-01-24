import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';
import HomePage from './components/HomePage';
import Footer from './components/footer';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
       <NavBar/>
      <div className="container">
       
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/list" exact component={Home}></Route>
        <Route path="/add" component={CreatePost}></Route>
        <Route path="/edit/:id" component={EditPost}></Route>
        <Route path="/post/:id" component={PostDetails}></Route>
        <Route path="/post/:id" component={PostDetails}></Route>


      </div>
      <div style={{paddingTop:'100px',width:'100%'}}>
      <Footer></Footer>
      </div>
      </BrowserRouter>
      
    )
  }
}
export default App;

