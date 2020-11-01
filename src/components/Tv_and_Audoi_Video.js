import React from 'react';
import Header from '../components/Header';
import UnderHeader from '../components/underHeader';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import Tv1 from '../images/Tv_Audio_Video images/tv1.1.jpg'
import Tv2 from '../images/Tv_Audio_Video images/tv2.1.jpg'
import Tv3 from '../images/Tv_Audio_Video images/tv3.1.jpg'
import Tv4 from '../images/Tv_Audio_Video images/tv4.1.jpg'
import Tv5 from '../images/Tv_Audio_Video images/tv5.1.png'
import Tv6 from '../images/Tv_Audio_Video images/tv6.1.png'
import Tv7 from '../images/Tv_Audio_Video images/tv7.1.jpg'
import Tv8 from '../images/Tv_Audio_Video images/tv8.1.jpg'

import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';


class TvAndAudoiVideo extends React.Component{
    render(){
        return(
          <div>
            <Header/>
            <UnderHeader/>
            <div className="container-sm">
                 <Link  style={{marginLeft:30}} className="homelink" to='/'>Home / Tv and Audio Video </Link>
                 <h4 className="Filter_Headings" style={{marginLeft:-40}}>Tv and Audio Video</h4>
            </div>
            <div className="Mobilephones">

                <div className="Filters">

                




                    <h4>Filters</h4>
                    <hr style={{width:350}} />
                    <h5>CATEGORIES</h5>
                    <p className="fiterCategaries" >All categories</p>
                    <p className="filter_peoperties"><small>Tv/LED/LCD (15939)</small></p>
                    <p className="filter_peoperties"><small>Speakers (5435)</small></p>
                    <p className="filter_peoperties"><small>HandFrees/Headphones (3859)</small></p>
                    <p className="filter_peoperties"><small>Other Items(679)</small></p>

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

                   <hr style={{width:350}}  />
                    <h5>CONDITION</h5>
                   <input style={{width:35}} className="checkbox "/> USED (9886)
                   <br/>
                   <input style={{width:35}} className="checkbox "/> NEW (6047)
                 
                   
                        
                </div>


                <div style={{marginLeft:20}} className="MobileContainers">




                < Link className="link" to='/Tv1'>
                <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm border-dark  " style={{width: '18rem'}}>
           <img src= {Tv1} className="card-img-top Containerimage mt-2 border-dark " alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs ">Rs 55,000</h3>
              <small> <p className="address">Bahria Town, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">15july</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/Tv2'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tv2} className="card-img-top Containerimage mt-2" alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 45,000</h3>
              <small> <p className="address">A-40, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">01 Dec</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/Tv3'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tv3} className="card-img-top Containerimage mt-2" alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 5,000</h3>
              <small> <p className="address">G-20, karachi, Karachi Defence Territory</p> </small>
              <h6 className="date">30Nov</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/Tv4'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tv4} className="card-img-top Containerimage mt-2" alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3  className=" Rs">RS 6,000</h3>
              <small> <p className="address">A-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">03Jan</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Tv5'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tv5} className="card-img-top Containerimage mt-2" alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 4,000</h3>
              <small> <p className="address">H-10, Multan,Mulatn Capital Territory</p> </small>
              <h6 className="date">10sep</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

             
            < Link className="link" to='/Tv6'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tv6} className="card-img-top Containerimage mt-2" alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 1500</h3>
              <small> <p className="address">I-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">08Oct</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Tv7'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tv7} className="card-img-top Containerimage mt-2" alt="Image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS xxxxx</h3>
              <small> <p className="address">Main peco road Akber chowk Townshop karachi</p> </small>
              <h6 className="date">09April</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Tv8'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Tv8} className="card-img-top Containerimage mt-2" alt="Image" />
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
export default TvAndAudoiVideo;