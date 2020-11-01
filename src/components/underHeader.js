import React from 'react';
import {Link } from "react-router-dom";
import OOpoImage from '../images/ADS images/ooppo.png';
import vihecal from '../images/ADS images/vihecal.png';
import Cars from '../images/ADS images/carserv.jpg';
import Phone from '../images/ADS images/phone1.png';
import Electronic1 from '../images/ADS images/electronic1.png';
import Lcd from '../images/ADS images/lcd.png';
import House from '../images/ADS images/house1.png';
import Cycle from '../images/ADS images/cycle.png';


class UnderHeader extends React.Component{
    render(){

        return(
          <div className="mainUnderDiv" style={{width:"200%"}}>

         <div style={{backgroundColor:"white"}} className="card Activities text-center">
         <div className="card-header strolldiv">
          <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item dropdown">
          <a style={{fontWeight:"bold"}} className="nav-link underHeader  dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">All Categaries</a>
          <div className="dropdown-menu">
           {/* <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
           <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a> */}
         </div>
       </li>
      
       <li className="nav-item">
          <Link to="/MobilePhones" style={{textDecoration:"none"}}> <a className="nav-link underHeader ml-4 " href="#">Mobile Phone</a> </Link>
         </li>
         <li className="nav-item">
         <Link to="/Cars" style={{textDecoration:"none"}}> <a className="nav-link underHeader " href="#">Cars</a></Link>
        </li>
      
         <li className="nav-item">
         <Link to="/MoterCycle" style={{textDecoration:"none"}}><a className="nav-link underHeader " href="#">Motorcycles</a></Link>
         </li>
         <li className="nav-item">
         <Link to="/Houses" style={{textDecoration:"none"}}> <a className="nav-link underHeader " href="#">Houses</a></Link>
         </li>
         <li className="nav-item">
         <Link to="/Tv" style={{textDecoration:"none"}}><a className="nav-link underHeader " href="#">TV - Video - Audio</a></Link>
         </li>
         <li className="nav-item">
         <Link to="/Tablet" style={{textDecoration:"none"}}><a className="nav-link underHeader " href="#">Tablet</a></Link>
         </li>
         <li className="nav-item">
         <Link to="/" style={{textDecoration:"none"}}>  <a className="nav-link underHeader " href="#">Land and Plots</a>  </Link>
        </li>
        
          </ul>
        </div>
        <div className="card-body">
        
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={OOpoImage} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{height:"350px"}} src={vihecal} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{height:"350px"}} src={Cars} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{height:"350px"}} src={Phone} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{height:"350px"}} src={Electronic1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{height:"350px"}} src={Lcd} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{height:"350px"}} src={House} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{height:"350px"}} src={Cycle} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>



        </div>
      </div>

          </div>

        )
    }
}
export default UnderHeader;
