import React from 'react';
import Header from '../components/Header';
import UnderHeader from './underHeader';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import Mobile1 from '../images/Mobile_ phones images/mobile2.1.webp'
import Mobile2 from '../images/Mobile_ phones images/mobile1.1.jpg'
import Mobile3 from '../images/Mobile_ phones images/mobile3.1.png'
import Mobile4 from '../images/Mobile_ phones images/mobile4.1.png'
import Mobile5 from '../images/Mobile_ phones images/mobile5.1.png'
import Mobile6 from '../images/Mobile_ phones images/mobile6.1.png'
import Mobile7 from '../images/Mobile_ phones images/mobile7.1.png'
import Mobile8 from '../images/Mobile_ phones images/mobile8.1.png'
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';


class Mobilephones extends React.Component{
    render(){
        return(
          <div>
            <Header/>
            <UnderHeader/>
            <div className="container-sm">
                 <Link  style={{marginLeft:30}} className="homelink" to='/'>Home / Mobile </Link>
                 <h4 className="Filter_Headings" style={{marginLeft:-40}}>Mobile Phones</h4>
            </div>
            <div className="Mobilephones">

                <div className="Filters">

                    <h4>Filters</h4>
                    <hr style={{width:350}} />
                    <h5>CATEGORIES</h5>
                    <p className="fiterCategaries" >All categories</p>
                    <h6>Mobile</h6>
                    <p className="filter_peoperties"><small>Tablets (34)</small></p>
                    <p className="filter_peoperties"><small>Accessories (445)</small></p>
                    <p className="filter_peoperties"><small>Mobile Phones(18620)</small></p>

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




                < Link className="link" to='/Mobile1'>
                <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm border-dark  " style={{width: '18rem'}}>
           <img src= {Mobile1} className="card-img-top Containerimage mt-2 border-dark " alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs ">RS 29,999</h3>
              <small> <p className="address">G-11, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">15sep</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/Mobile2'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Mobile2} className="card-img-top Containerimage mt-2" alt="vivo Mobile image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 34,999</h3>
              <small> <p className="address">G-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">30sep</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/Mobile3'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Mobile3} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 50,000</h3>
              <small> <p className="address">G-20, karachi, Karachi Defence Territory</p> </small>
              <h6 className="date">30Aug</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/Mobile4'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Mobile4} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 20,000</h3>
              <small> <p className="address">A-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">03Jan</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Mobile5'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Mobile5} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 23,000</h3>
              <small> <p className="address">H-10, Multan,Mulatn Capital Territory</p> </small>
              <h6 className="date">10sep</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

             
            < Link className="link" to='/Mobile6'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Mobile6} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 30,000</h3>
              <small> <p className="address">I-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">08Oct</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Mobile7'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Mobile7} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 15,000</h3>
              <small> <p className="address">N-09, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">09sep</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/Mobile8'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Mobile8} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 18,000</h3>
              <small> <p className="address">H-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">15sep</h6>
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
export default Mobilephones;