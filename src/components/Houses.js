import React from 'react';
import Header from '../components/Header';
import UnderHeader from './underHeader';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import House1 from '../images/Houses images/house1.1.png'
import House2 from '../images/Houses images/house2.1.png'
import House3 from '../images/Houses images/house3.1.png'
import House4 from '../images/Houses images/house4.1.jpg'
import House5 from '../images/Houses images/house5.1.jpg'
import House6 from '../images/Houses images/house6.1.jpg'
import House7 from '../images/Houses images/house7.1.jpg'
import House8 from '../images/Houses images/house8.1.jpg'
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';


class Houses extends React.Component{
    render(){
        return(
          <div>
            <Header/>
            <UnderHeader/>
            <div className="container-sm">
                 <Link  style={{marginLeft:30}} className="homelink" to='/'>Home / Houses </Link>
                 <h4 className="Filter_Headings" style={{marginLeft:-40}}>Houses/Hotels</h4>
            </div>
            <div className="Mobilephones">

                <div className="Filters">

                




                    <h4>Filters</h4>
                    <hr style={{width:350}} />
                    <h5>CATEGORIES</h5>
                    <p className="fiterCategaries" >All categories</p>
                    <p className="filter_peoperties"><small>Houses (15939)</small></p>
                    <p className="filter_peoperties"><small>Apartments & Flats (5435)</small></p>
                    <p className="filter_peoperties"><small>Shops - Offices - Commercial Space (3859)</small></p>
                    <p className="filter_peoperties"><small>Portions & Floors (679)</small></p>

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
                    <h5>BEDROOMS</h5>
                   <span className="price"> 
                   <input placeholder="Min" className="priceinput"/>
                   <input placeholder="Max" className="priceinput"/>
                    <ArrowForwardIosSharpIcon className="arrowbutton"/> 
                   </span>


                   <hr style={{width:350}}  />
                    <h5>AREA UNIT</h5>
                   <input style={{width:35}} className="checkbox rounded-circle"/>  Kanal
                   <br/>
                   <input style={{width:35}} className="checkbox rounded-circle"/> Marla
                   <br/>
                   <input style={{width:35}} className="checkbox rounded-circle"/> Square Feet
                   <br/>
                   <input style={{width:35}} className="checkbox rounded-circle"/> Square Meter
                   <br/>
                   <input style={{width:35}} className="checkbox rounded-circle"/> Square Yards
                   

                   <hr style={{width:350}} />
                    <h5>AREA</h5>
                   <span className="price"> 
                   <input placeholder="Min" className="priceinput"/>
                   <input placeholder="Max" className="priceinput"/>
                    <ArrowForwardIosSharpIcon className="arrowbutton"/> 
                   </span>

                  
                   <hr style={{width:350}}  />
                    <h5>FURNISHED</h5>
                   <input style={{width:35}} className="checkbox rounded-circle"/> No (9886)
                   <br/>
                   <input style={{width:35}} className="checkbox rounded-circle"/> Yes (6047)
                 
                   <hr style={{width:350}} />
                    <h5>BATHROOMS</h5>
                   <span className="price"> 
                   <input placeholder="Min" className="priceinput"/>
                   <input placeholder="Max" className="priceinput"/>
                    <ArrowForwardIosSharpIcon className="arrowbutton"/> 
                   </span>
                        
                </div>


                <div style={{marginLeft:20}} className="MobileContainers">




                < Link className="link" to='/House1'>
                <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm border-dark  " style={{width: '18rem'}}>
           <img src= {House1} className="card-img-top Containerimage mt-2 border-dark " alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:-10}} className=" Rs ">Rs 50,000,000</h3>
              <small> <p className="address">Bahria Town, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">15july</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/House2'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {House2} className="card-img-top Containerimage mt-2" alt="vivo Mobile image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:-10}} className=" Rs">RS 45,000,000</h3>
              <small> <p className="address">A-40, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">01 Dec</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/House3'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {House3} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:-10}} className=" Rs">RS 55,000,000</h3>
              <small> <p className="address">G-20, karachi, Karachi Defence Territory</p> </small>
              <h6 className="date">30Nov</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/House4'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {House4} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:-10}} className=" Rs">RS 65,000,000</h3>
              <small> <p className="address">A-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">03Jan</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/House5'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {House5} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:-10}} className=" Rs">RS 60,000,000</h3>
              <small> <p className="address">H-10, Multan,Mulatn Capital Territory</p> </small>
              <h6 className="date">10sep</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

             
            < Link className="link" to='/House6'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {House6} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:-10}} className=" Rs">RS 58,000,000</h3>
              <small> <p className="address">I-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">08Oct</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/House7'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {House7} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:-10}} className=" Rs">RS 28,000,000</h3>
              <small> <p className="address">Main peco road near Akber chowk Township karachi</p> </small>
              <h6 className="date">09April</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/House8'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {House8} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 style={{marginLeft:-10}} className=" Rs">RS 80,000,000</h3>
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
export default Houses;