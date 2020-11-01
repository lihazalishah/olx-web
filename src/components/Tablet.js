import React from 'react';
import Header from '../components/Header';
import UnderHeader from './underHeader';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import Tablet1 from '../images/tablet images/tablet1.1.jpg'
import Tablet2 from '../images/tablet images/tablet2.1.jpg'
import Tablet3 from '../images/tablet images/tablet3.1.jpg'
import Tablet4 from '../images/tablet images/tablet4.1.jpg'
import Tablet5 from '../images/tablet images/tablet5.1.jpg'
import Tablet6 from '../images/tablet images/tablet6.1.jpg'
import Tablet7 from '../images/tablet images/tablet7.1.jpg'
import Tablet8 from '../images/tablet images/tablet8.1.png'

import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';


class Tablet extends React.Component{
    render(){
        return(
          <div>
            <Header/>
            <UnderHeader/>
            <div className="container-sm">
                 <Link  style={{marginLeft:30}} className="homelink" to='/'>Home / Tablet </Link>
                 <h4 className="Filter_Headings" style={{marginLeft:-40}}>Tablet</h4>
            </div>
            <div className="Mobilephones">

                <div className="Filters">

                


                <h4>Filters</h4>
                    <hr style={{width:350}} />
                    <h5>CATEGORIES</h5>
                    <p className="fiterCategaries" >All categories</p>
                    <h6>Tablet</h6>
                    <p className="filter_peoperties"><small>Nokia tab (34)</small></p>
                    <p className="filter_peoperties"><small>iPhone tab (445)</small></p>
                    <p className="filter_peoperties"><small>Samsung tab (18620)</small></p>
                    <p className="filter_peoperties"><small>Others tabs (3695)</small></p>

                    <hr style={{width:350}} />
                    <h5>LOCATION</h5>
                    <h6>Pakistan</h6>
                    <p className="filter_peoperties"><small> sindh (34)</small></p>
                    <p className="filter_peoperties"><small>punjab (445)</small></p>
                    <p className="filter_peoperties"><small>KPK(18620)</small></p>
                    <p className="filter_peoperties"><small>Balochistan(18620)</small></p>
                    <Link className="filter_peoperties">view more</Link>

                    <hr style={{width:350}} />
                    <h5>PRICE</h5>
                   <span className="price"> 
                   <input placeholder="Min" className="priceinput"/>
                   <input placeholder="Max" className="priceinput"/>
                    <ArrowForwardIosSharpIcon className="arrowbutton"/> 
                   </span>

                   <hr style={{width:350}} />
                    <h5>CONDITION</h5>
                   <input className="checkbox"/> USED 
                   <br/>
                   <input className="checkbox"/> NEW
                   
                        
                </div>


                <div style={{marginLeft:20}} className="MobileContainers">




                < Link className="link" to='/Tablet1'>
                <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm border-dark  " style={{width: '18rem'}}>
           <img src= {Tablet1} className="card-img-top Containerimage mt-2 border-dark " alt="Image" />
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs ">Rs 8,000</h3>
              <small> <p className="address">SHOP-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">15july</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/Tablet2'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tablet2} className="card-img-top Containerimage mt-2" alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 12,000</h3>
              <small> <p className="address">SHOP-A-40, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">01 Dec</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/Tablet3'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tablet3} className="card-img-top Containerimage mt-2" alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 25,000</h3>
              <small> <p className="address">SHOP-G-20, karachi, Karachi Defence Territory</p> </small>
              <h6 className="date">30Nov</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/Tablet4'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tablet4} className="card-img-top Containerimage mt-2" alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3  className=" Rs">RS 30,000</h3>
              <small> <p className="address">SHOP-A-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">03Jan</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Tablet5'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tablet5} className="card-img-top Containerimage mt-2" alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 40,000</h3>
              <small> <p className="address">SHOP-H-10, Multan,Mulatn Capital Territory</p> </small>
              <h6 className="date">10sep</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

             
            < Link className="link" to='/Tablet6'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tablet6} className="card-img-top Containerimage mt-2" alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 11,500</h3>
              <small> <p className="address">SHOP-I-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">08Oct</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Tablet7'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tablet7} className="card-img-top Containerimage mt-2" alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 15,000</h3>
              <small> <p className="address">Main peco road Akber chowk Townshop karachi</p> </small>
              <h6 className="date">09April</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Tablet8'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tablet8} className="card-img-top Containerimage mt-2" alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3  className=" Rs">RS 8,000</h3>
              <small> <p className="address">SHOP-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">02Mar</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>





                </div>

            </div>
             
             <div ><button className="LoadMore">Load More</button></div>

            <Footer/>
            </div>

        )
    }
}
export default Tablet;