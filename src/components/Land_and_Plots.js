import React from 'react';
import Land1 from '../images/land_plots images/land1.1.jpg'
import Land2 from '../images/land_plots images/land2.2.jpeg'
import Land3 from '../images/land_plots images/land3.1.jpg'
import Land4 from '../images/land_plots images/land4.1.jpg'
import Land5 from '../images/land_plots images/land5.1.png'
import Land6 from '../images/land_plots images/land6.1.jpg'
import Land7 from '../images/land_plots images/land7.1.jpg'
import Land8 from '../images/land_plots images/land8.1.jpg'
import {Link} from "react-router-dom";


class LandANDplots extends React.Component{
    render(){
        return(
           <div className="container-sm land_plots">

            <h4 className="mt-5" >More on Land & Plots</h4>
            < Link className="link" to='/Land1'>
            <div style={{zIndex:0}}  className="container-sm Land sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src={Land1}className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 100,78,000</h3>
              <small> <p className="address">G-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">30sep</h6>
          </p>
          </div>
           </div>
            </div>
            </Link> 


            < Link className="link" to='/Land2'>
            <div className="container-sm Land sm-2 md-2">
            <div className="card container-sm " style={{width: '18rem'}}>
           <img src= {Land2} className="card-img-top Containerimage mt-2" alt="land image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:"-10px"}} className=" Rs">RS 500,00,000</h3>
              <small> <p style={{marginLeft:"-10px"}} className="address">G-20, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">28oct</h6>
          </p>
          </div>
           </div>
            </div>
            </Link> 


            < Link className="link" to='/Land3'>
            <div className="container-sm Land sm-2 md-2">
            <div className="card container-sm " style={{width: '18rem'}}>
           <img src= {Land3} className="card-img-top Containerimage mt-2" alt="land image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:"-10px"}} className=" Rs">RS 900,00,000</h3>
              <small> <p style={{marginLeft:"-10px"}} className="address">H-10, karachi, Karachi Defance City of light</p> </small>
              <h6 className="date">06jan</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Land4'>
            <div className="container-sm Land sm-2 md-2">
            <div className="card container-sm " style={{width: '18rem'}}>
           <img src= {Land4} className="card-img-top Containerimage mt-2" alt="land image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:"-10px"}} className=" Rs">RS 850,85,850</h3>
              <small> <p style={{marginLeft:"-10px"}} className="address">D H A, Lahore, Green city of pakistan.</p> </small>
              <h6 className="date">25Aug</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>
              

            < Link className="link" to='/Land5'>
            <div className="container-sm Land sm-2 md-2">
            <div className="card container-sm " style={{width: '18rem'}}>
           <img src= {Land5} className="card-img-top Containerimage mt-2" alt="land image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:"-10px"}} className=" Rs">RS 750,10,000</h3>
              <small> <p style={{marginLeft:"-10px"}} className="address">Punjab , Punjab province of  pakistan K-23 ABC</p> </small>
              <h6 className="date">10feb</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Land6'>
            <div className="container-sm Land sm-2 md-2">
            <div className="card container-sm " style={{width: '18rem'}}>
           <img src= {Land6} className="card-img-top Containerimage mt-2" alt="land image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:"-10px"}} className=" Rs">RS 600,50,000</h3>
              <small> <p style={{marginLeft:"-10px"}} className="address">F-15, sindh, Sindh province of pakistan </p> </small>
              <h6 className="date">30Nov</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>
              

            < Link className="link" to='/Land7'>
            <div className="container-sm Land sm-2 md-2">
            <div className="card container-sm " style={{width: '18rem'}}>
           <img src= {Land7} className="card-img-top Containerimage mt-2" alt="land image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:"-10px"}} className=" Rs">RS 80,00,000</h3>
              <small> <p style={{marginLeft:"-10px"}} className="address">1 BHK Apartment For Sale in Godrej Garden City Ahmedabad</p> </small>
              <h6 className="date">01sep</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Land8'>
            <div className="container-sm Land sm-2 md-2">
            <div className="card container-sm " style={{width: '18rem'}}>
           <img src= {Land8} className="card-img-top Containerimage mt-2" alt="land image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:"-10px"}} className=" Rs">RS 766,78,900</h3>
              <small> <p style={{marginLeft:"-10px"}} className="address">A-15, Multan, Multan Capital Territory</p> </small>
              <h6 className="date">31Mar</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>
           
           
        </div>

       

        )
    }

}
export default LandANDplots;