import React, { Component } from 'react';
import './video.css';
import img1 from '../img/img1.jpg';
import img4 from '../img/img4.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img6 from '../img/img6.jpg'
import img7 from '../img/img7.jpg'
import img8 from '../img/img8.jpg'
import img9 from '../img/img9.jpg'
import img10 from '../img/img10.jpg'
import './card.css';




export default class HomePage  extends Component {
  render() {
    return (

       

      <div>
    {/* <div className='homeView' style={{backdropFilter:'blur(10px )'}}> */}
         {/* <video src={ ('https://player.vimeo.com/external/476754529.sd.mp4?s=e565f0e0800ee33e7a1b0e7b62d4cd8dfdf548ce&profile_id=165&oauth2_token_id=57447761')}   autoPlay loop muted /> */}

    
        <marquee direction="left"><h1 class="display-3"><img src="https://cdn.dribbble.com/users/3743368/screenshots/12391929/media/9ccee50b431079df3c4b71c3129c84dd.gif" style={{width:'120px'}}/>Happiness Is Homemade...</h1></marquee><div class="card-group"  >

       
          
            <div className="imag">         
           <img src="https://i.gifer.com/73U5.gif"  style={{marginLeft:"70px"}} />
           </div>
           <br></br>
           <br/>

           <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" >
            <div className="card p-0 overflow-hidden h-100 shadow">
                

              
                <div className="card-body text-center"  >
                    <h3 className="card-title">RECIPES</h3>
                    <br/>
                    
                    <img src={img4} class="rounded-circle" alt="Cinque Terre" style={{width:'120px'}}></img>
                    <br/>
                    <br/>
                    <br/>
                    
                       <h5 className="card-title">Home made yummy foods with love</h5>
                    <p className="card-text">{}</p>
                   
                        <img src="https://cdn.dribbble.com/users/2556713/screenshots/7569532/media/266e0452b1ce6ebebee6d3d8871d6ddd.gif" class="rounded-circle" alt="Cinque Terre" style={{width:'320px'}}></img>

                </div>
            </div>

        </div>
        
{/*            
           entering recipes into card views */}
        
                 <div  className="col-11 col-md-6 col-lg-3 mx-0 mb-4 "  style={{marginTop:"50px"}}>
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={img1} className="card-img-top img-fluid" style={{height: '400px'}}/>
                <div className="card-body text-center">
                    <h5 className="card-title">Mushroom Pizza </h5>
                    <h5 className="card-title">Make your favourite mushroom pizza at home</h5>
                    <p className="card-text">{}</p>
                    <button className="btn btn-success" ><a href="/list" style={{ textDecoration: 'none', color: 'white' }}>
                    View more </a></button>

                </div>
            </div>

        </div>
        

        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4"  style={{marginTop:"50px"}}>
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={img2} className="card-img-top img-fluid" style={{height: '400px'}}/>
                <div className="card-body text-center">
                    <h5 className="card-title">Strawberry waffles </h5>
                    <h5 className="card-title">Try this!! soo yummyyy.. Only for strawberry lovers...</h5>
                    <p className="card-text">{}</p>
                    <button className="btn btn-success" ><a href="/list" style={{ textDecoration: 'none', color: 'white' }}>
                    View more </a></button>

                </div>
            </div>

        </div>

        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4"  style={{marginTop:"50px"}}>
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={img3} className="card-img-top img-fluid" style={{height: '400px'}}/>
                <div className="card-body text-center">
                    <h5 className="card-title">Roast Chicken </h5>
                    <h5 className="card-title">Altime favourite Chicken recipe at home!!</h5>
                    <p className="card-text">{}</p>
                    <button className="btn btn-success" ><a href="/list" style={{ textDecoration: 'none', color: 'white' }}>
                    View more </a></button>

                </div>
            </div>

        </div>

        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{marginTop:"50px"}}>
            <div className="card p-0 overflow-hidden h-100 shadow" >
                <img src={img6} className="card-img-top img-fluid" style={{height: '400px'}} />
                <div className="card-body text-center">
                    <h5 className="card-title">Vegetable Stir Fry</h5>
                    <h5 className="card-title">Eat more to stay healthy!!</h5>
                    <p className="card-text">{}</p>
                    <button className="btn btn-success" ><a href="/list" style={{ textDecoration: 'none', color: 'white' }}>
                    View more </a></button>

                </div>
            </div>

        </div>

        <br/>

        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4"  style={{marginTop:"50px"}}>
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={img7} className="card-img-top img-fluid" style={{height: '400px'}}/>
                <div className="card-body text-center">
                    <h5 className="card-title">Watalappam </h5>
                    <h5 className="card-title">Try this!! soo yummyyy..</h5>
                    <p className="card-text">{}</p>
                    <button className="btn btn-success" ><a href="/list" style={{ textDecoration: 'none', color: 'white' }}>
                    View more </a></button>

                </div>
            </div>

        </div>

        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4"  style={{marginTop:"50px"}}>
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={img8} className="card-img-top img-fluid" style={{height: '400px'}}/>
                <div className="card-body text-center">
                    <h5 className="card-title">Kanje</h5>
                    <h5 className="card-title">Sri Lanka’s kanjee can be made with chicken, seafood or vegetables, and sits in a comfortable spot between curry and soup.</h5>
                    <p className="card-text">{}</p>
                    <button className="btn btn-success" ><a href="/list" style={{ textDecoration: 'none', color: 'white' }}>
                    View more </a></button>

                </div>
            </div>

        </div>

        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4"  style={{marginTop:"50px"}}>
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={img9} className="card-img-top img-fluid" style={{height: '400px'}}/>
                <div className="card-body text-center">
                    <h5 className="card-title">Fish patties </h5>
                    <h5 className="card-title">Try this!! soo yummyyy.. Only for those who like spicy...</h5>
                    <p className="card-text">{}</p>
                    <button className="btn btn-success" ><a href="/list" style={{ textDecoration: 'none', color: 'white' }}>
                    View more </a></button>

                </div>
            </div>

        </div>

        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4"  style={{marginTop:"50px"}}>
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={img10} className="card-img-top img-fluid" style={{height: '400px'}}/>
                <div className="card-body text-center">
                    <h5 className="card-title">Sri Lankan egg curry </h5>
                    <h5 className="card-title">Try this!! </h5>
                    <p className="card-text">{}</p>
                    <button className="btn btn-success" ><a href="/list" style={{ textDecoration: 'none', color: 'white' }}>
                    View more </a></button>

                </div>
            </div>

        </div>


        


  
        
        

         
         
                
        </div>


  
        
        
        
        



        </div>

        

        
  
    )
    
    
  }
  
}
  


