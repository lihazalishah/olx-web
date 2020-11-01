import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import UnderHeader from '../underHeader';
import Bike11 from '../../images/bikes images/bike1.1.png';
import Bike12 from '../../images/bikes images/bike1.2.png';
import Bike13 from '../../images/bikes images/bike1.3.jpg';

import { Link } from "react-router-dom";


import CallSharpIcon from '@material-ui/icons/CallSharp';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';





class Bike1 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <UnderHeader />
        
        <div className="container-sm">
          <Link className="homelink" to='/'>Home /<Link className="homelink" to="/MoterCycle"> bikes </Link> </Link>
        </div>

        <div className="flux_div_land">


          <div className="card onclick_div mb-3 w-60">

            <div id="carouselExampleSlidesOnly" className="carousel slide container-sm" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <img type="wave"  style={{ height: "350px" }} src={Bike11} className="d-block mt-2 w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img style={{ height: "350px" }} src={Bike12} className="d-block mt-2 w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img style={{ height: "350px" }} src={Bike13} className="d-block mt-2 w-100" alt="..." />
                </div>
              </div>
            </div>




            <div style={{ borderLeftColor: "black" }, { borderLeft: "1px" }} className="card-body">
              <h5 className="card-title">Detail</h5>
              <p className="card-text">Body Type :	ATV		</p>
              <p className="card-text">Color : Red</p>
              <p className="card-text">Condition : New</p>
              <p className="card-text"><small className="text-muted">
                <hr />
                <h5 className="card-title">Bike features</h5>
                <ul>
                  <li >Anti Theft</li>
                  <li >Lock Disc   Brake</li>
                  <li >  Led Light</li>
                  <li > Wind Shield</li>
                  
                

                </ul>
              </small></p>

            </div>

            
 

          </div>


          <div className="sec_child_Main_div">
          <div style={{marginTop:"150em"}}  className="card side_land_div border-dark ml-4 mt-5  mb-2" style={{maxWidth: '27rem'}}>
           <div className="card-body text-dark">
          <h1 className="detail card-title">PKR 4.4lac  <ShareOutlinedIcon style={{fontSize:30},{margin:20}}/><FavoriteBorderOutlinedIcon style={{fontSize:30}}/></h1>
          <p className="card-text">Bike </p>
          <p className="card-text"><small>Main peco road near Akber chowk Township Lahore</small></p>

        </div>
          </div>
           
          <div className="card side_land_div border-dark ml-4 mt-4  mb-2" style={{maxWidth: '27rem'}}>
           <div className="card-body text-dark">
          <h4 className="detail  card-title">Seller description</h4>
          <h5 className="card-title"><AccountCircleOutlinedIcon style={{fontSize:60}} />Sami687</h5>
          <button type="button" className="btn btn-secondary ml-1 btn-lg btn-block">Chat with Seller</button>
             <a  style={{margin:70}}> < CallSharpIcon style={{marginLeft:10}}/> ** *** ****<a className="phone">show number</a> </a>
      
        </div>
          </div>
          

          <div  className="card side_land_div border-dark ml-4 mt-4  mb-2" style={{maxWidth: '27rem'}}>
           <div className="card-body text-dark">
          <h4 className="detail  card-title">Post in</h4>
           <ifram src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.172012199603!2d39.82408886425223!3d21.422482879597794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b74c28d467%3A0xb2f543a618225767!2sKaaba!5e0!3m2!1sen!2s!4v1586761757784!5m2!1sen!2s">google map</ifram>

        </div>
          </div>

          </div>




        </div>

        <Footer/>
      </div>
    )
  }
}
export default Bike1;