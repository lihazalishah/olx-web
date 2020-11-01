import React from 'react';
import Header from '../components/Header';
import UnderHeader from './underHeader';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import Bike1 from '../images/bikes images/bike1.1.png'
import Bike2 from '../images/bikes images/bike2.1.png'
import Bike3 from '../images/bikes images/bike3.1.png'
import Bike4 from '../images/bikes images/bike4.1.png'
import Bike5 from '../images/bikes images/bike5.1.jpg'
import Bike6 from '../images/bikes images/bike6.1.jpg'
import Bike7 from '../images/bikes images/bike7.1.jpg'
import Bike8 from '../images/bikes images/bike8.1.jpg'
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';


class MoterCycle extends React.Component{
    render(){
        return(
          <div>
            <Header/>
            <UnderHeader/>
            <div className="container-sm">
                 <Link  style={{marginLeft:30}} className="homelink" to='/'>Home / MoterCycle </Link>
                 <h4 className="Filter_Headings" style={{marginLeft:-40}}>MoterCycles/Bikes</h4>
            </div>
            <div className="Mobilephones">

                <div className="Filters">

                    <h4>Filters</h4>
                    <hr style={{width:350}} />
                    <h5>CATEGORIES</h5>
                    <p className="fiterCategaries" >All categories</p>
                    <h6>Bikes</h6>
                    <p className="filter_peoperties"><small>Motorcycles (21825)</small></p>
                    <p className="filter_peoperties"><small>Spare Parts (4715)</small></p>
                    <p className="filter_peoperties"><small>Bicycles (5233)</small></p>
                    <p className="filter_peoperties"><small>Scooters (239)</small></p>
                    {/* <p className="filter_peoperties"><small>Bicycles (5233)</small></p> */}

                    <hr style={{width:350}} />
                    <h5>LOCATION</h5>
                    <h6>Pakistan</h6>
                    <p className="filter_peoperties"><small> sindh (34)</small></p>
                    <p className="filter_peoperties"><small>punjab (445)</small></p>
                    <p className="filter_peoperties"><small>KPK(18620)</small></p>
                    <p className="filter_peoperties"><small>Balochistan(18620)</small></p>
                    <Link className="filter_peoperties">view more</Link>

                    <hr style={{width:350}} />
                    <h5>MAKE</h5>                     
                    <p className="filter_peoperties"><small>Honda (12264)</small></p>
                    <p className="filter_peoperties"><small>Other Brands (1965)</small></p>
                    <p className="filter_peoperties"><small>Yamaha (1661)</small></p>
                    <p className="filter_peoperties"><small>Suzuki (1238)</small></p>
                    <p className="filter_peoperties"><small>United (912)</small></p>
                    <Link className="filter_peoperties">view more</Link>

                    <hr style={{width:350}} />
                    <h5>PRICE</h5>
                   <span className="price"> 
                   <input placeholder="Min" className="priceinput"/>
                   <input placeholder="Max" className="priceinput"/>
                    <ArrowForwardIosSharpIcon className="arrowbutton"/> 
                   </span>

                   <hr style={{width:350}} />
                    <h5>YEAR</h5>
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




                < Link className="link" to='/Bike1'>
                <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm border-dark  " style={{width: '18rem'}}>
           <img src= {Bike1} className="card-img-top Containerimage mt-2 border-dark " alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs ">PKR 4.4lac</h3>
              <small> <p className="address">Main peco road near Akber chowk Township Lahore</p> </small>
              <h6 className="date">15july</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/Bike2'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Bike2} className="card-img-top Containerimage mt-2" alt="vivo Mobile image" />
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 82,500</h3>
              <small> <p className="address">A-40, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">01 Dec</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/Bike3'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Bike3} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 5.3lac</h3>
              <small> <p className="address">G-20, karachi, Karachi Defence Territory</p> </small>
              <h6 className="date">30Nov</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/Bike4'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Bike4} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 2.3lac</h3>
              <small> <p className="address">A-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">03Jan</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Bike5'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Bike5} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 5lac</h3>
              <small> <p className="address">H-10, Multan,Mulatn Capital Territory</p> </small>
              <h6 className="date">10sep</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

             
            < Link className="link" to='/Bike6'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Bike6} className="card-img-top Containerimage mt-2" alt="..." />
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 30,000</h3>
              <small> <p className="address">I-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">08Oct</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Bike7'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Bike7} className="card-img-top Containerimage mt-2" alt="..." />
           
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 28,000</h3>
              <small> <p className="address">Main peco road near Akber chowk Township karachi</p> </small>
              <h6 className="date">09April</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Bike8'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Bike8} className="card-img-top Containerimage mt-2" alt="..." />
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 18,000</h3>
              <small> <p className="address">H-15, Islamabad, Islamabad Capital Territory</p> </small>
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
export default MoterCycle;