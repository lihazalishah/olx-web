import React from 'react';
import Header from './Header';
import UnderHeader from './underHeader';
import Footer from './Footer';
import {Link} from "react-router-dom";
import Car1 from '../images/cars images/car1.1.png'
import Car2 from '../images/cars images/car2.1.webp'
import Car3 from '../images/cars images/car3.1.webp'
import Car4 from '../images/cars images/car4.1.webp'
import Car5 from '../images/cars images/car5.1.webp'
import Car6 from '../images/cars images/car6.1.webp'
import Car7 from '../images/cars images/car7.1.png'
import Car8 from '../images/cars images/car8.1.png'
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';


class Cars extends React.Component{
    render(){
        return(
          <div>
            <Header/>
            <UnderHeader/>
            <div className="container-sm">
                 <Link  style={{marginLeft:30}} className="homelink" to='/'>Home / Cars </Link>
                 <h4 className="Filter_Headings" style={{marginLeft:-40}}>Cars</h4>
            </div>
            <div className="Mobilephones">

                <div className="Filters">
                    <h4>Filters</h4>
                    <hr style={{width:350}} />
                    <h5>CATEGORIES</h5>
                    <p className="fiterCategaries" >All categories</p>
                    <h6>Vehicles</h6>
                    <p className="filter_peoperties"><small>Cars (59415)</small></p>
                    <p className="filter_peoperties"><small>Cars on Installments (9924)</small></p>
                    <p className="filter_peoperties"><small>Cars Accessories (11553)</small></p>
                    <p className="filter_peoperties"><small>Spare Parts (9217)</small></p>
                    <p className="filter_peoperties"><small>Buses, Vans & Trucks (5553)</small></p>
                    <p className="filter_peoperties"><small>Rickshaw & Chingchi (2034)</small></p>
                    <p className="filter_peoperties"><small>Other Vehicles (8391)</small></p>
                    <p className="filter_peoperties"><small>Boats (294)</small></p>
                    <p className="filter_peoperties"><small>Tractors & Trailers (1531)</small></p>

                    <hr style={{width:350}} />
                    <h5>LOCATION</h5>
                    <h6>Pakistan</h6>
                    <p className="filter_peoperties"><small> sindh (34)</small></p>
                    <p className="filter_peoperties"><small>punjab (445)</small></p>
                    <p className="filter_peoperties"><small>KPK(18620)</small></p>
                    <p className="filter_peoperties"><small>Balochistan(18620)</small></p>
                    <Link className="filter_peoperties">view more</Link>
                   
                    <hr style={{width:350}} />
                    <h5>MAKE AND MODEL</h5>                     
                    <p className="filter_peoperties"><small>Honda (12264)</small></p>
                    <p className="filter_peoperties"><small> Suzuki (26362)</small></p>
                    <p className="filter_peoperties"><small>Toyota (14511)</small></p>
                    <p className="filter_peoperties"><small>Suzuki (1238)</small></p>
                    <p className="filter_peoperties"><small>Daihatsu (3786)</small></p>
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
                    <h5>REGISTERED IN</h5>                     
                    <input className="checkbox"/> Lahore (21443)
                   <br/>
                   <input className="checkbox"/> Karachi (19130)
                   <br/>
                   <input className="checkbox"/> Islamabad (8246)
                   <br/>
                   <input className="checkbox"/> Unregistered (1659)
                   <br/>
                   <input className="checkbox"/> Multan (1467)
                   <br/>
                    <Link style={{marginLeft:"0px"}} className="filter_peoperties">view more</Link>

                    <hr style={{width:350}} />
                    <h5>FUEL</h5>                     
                    <input className="checkbox"/> Petrol (46635)
                   <br/>
                   <input className="checkbox"/> CNG (8779)
                   <br/>
                   <input className="checkbox"/> Diesel (1552)
                   <br/>
                   <input className="checkbox"/> Hybrid (2412)
                   <br/>


                   <hr style={{width:350}} />
                    <h5>KMS DRIVEN</h5>
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




                < Link className="link" to='/car1'>
                <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm border-dark  " style={{width: '18rem'}}>
           <img src= {Car1} className="card-img-top Containerimage mt-2 border-dark " alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs ">PKR 14.4lac</h3>
              <small> <p className="address">Main peco road near Akber chowk Township Lahore</p> </small>
              <h6 className="date">15july</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/car2'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car2} className="card-img-top Containerimage mt-2" alt="vivo Mobile image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 82.8lac</h3>
              <small> <p className="address">A-40, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">01 Dec</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/car3'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car3} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 50.3lac</h3>
              <small> <p className="address">G-20, karachi, Karachi Defence Territory</p> </small>
              <h6 className="date">30Nov</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/car4'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car4} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 20.3lac</h3>
              <small> <p className="address">A-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">03Jan</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/car5'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car5} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 25.7lac</h3>
              <small> <p className="address">H-10, Multan,Mulatn Capital Territory</p> </small>
              <h6 className="date">10sep</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

             
            < Link className="link" to='/car6'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car6} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 30lac</h3>
              <small> <p className="address">I-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">08Oct</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/car7'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car7} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 28lac</h3>
              <small> <p className="address">Main peco road near Akber chowk Township karachi</p> </small>
              <h6 className="date">09April</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/car8'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car8} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 18lac</h3>
              <small> <p className="address">H-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">02Mar</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>
                 

           
               

            < Link className="link" to='/car1'>
                <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm border-dark  " style={{width: '18rem'}}>
           <img src= {Car1} className="card-img-top Containerimage mt-2 border-dark " alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs ">PKR 14.4lac</h3>
              <small> <p className="address">Main peco road near Akber chowk Township Lahore</p> </small>
              <h6 className="date">15july</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/car2'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car2} className="card-img-top Containerimage mt-2" alt="vivo Mobile image" />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 82.8lac</h3>
              <small> <p className="address">A-40, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">01 Dec</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/car3'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car3} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 50.3lac</h3>
              <small> <p className="address">G-20, karachi, Karachi Defence Territory</p> </small>
              <h6 className="date">30Nov</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

            < Link className="link" to='/car4'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car4} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 20.3lac</h3>
              <small> <p className="address">A-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">03Jan</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/car5'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car5} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 25.7lac</h3>
              <small> <p className="address">H-10, Multan,Mulatn Capital Territory</p> </small>
              <h6 className="date">10sep</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>

             
            < Link className="link" to='/car6'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car6} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 30lac</h3>
              <small> <p className="address">I-15, Islamabad, Islamabad Capital Territory</p> </small>
              <h6 className="date">08Oct</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/car7'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car7} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">PKR 28lac</h3>
              <small> <p className="address">Main peco road near Akber chowk Township karachi</p> </small>
              <h6 className="date">09April</h6>
          </p>
          </div>
           </div>
            </div>
            </Link>


            < Link className="link" to='/car8'>
            <div style={{zIndex:0}}  className="container-sm Land border border-secondary sm-2 md-2">
            <div  className="card container-sm " style={{width: '18rem'}}>
           <img src= {Car8} className="card-img-top Containerimage mt-2" alt="..." />
           <div><p className="Feature">FEATURED</p></div>
           <div className="card-body">
          <p className="card-text Rs">
              <h3 className=" Rs">RS 18lac</h3>
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
export default Cars;