import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import AppleIcon from '@material-ui/icons/Apple';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';


class Footer extends React.Component{
    render(){
        return(
            <div className="footer">


          <div className="card footer_div  mt-5 ml-0 w-100 mb-3 bg-light" style={{maxWidth: '100rem'}}>
         <div className="Footer_categaries">
           <div className="card-body footer_li text-success w-100">
          <h5 className="card-title categaries_heading">POPULAR CATEGARIES</h5>
          <p class="card-text margin_footer_text">Cars</p>
          <p class="card-text margin_footer_text">Flats for rent</p>
          <p class="card-text margin_footer_text">Jobs</p>
          <p class="card-text margin_footer_text">Mobile Phones</p>
         
          </div>
          <div className="card-body footer_li text-success w-100">
          <h5 className="card-title categaries_heading">TRENDING SEARCHES</h5>
          <p class="card-text margin_footer_text">Bikes</p>
          <p class="card-text margin_footer_text">Watches</p>
          <p class="card-text margin_footer_text">Books</p>
          <p class="card-text margin_footer_text">Dogs</p>
         
          </div>
          <div className="card-body footer_li text-success w-100">
          <h5 className="card-title categaries_heading">ABOUT US</h5>
          <p class="card-text margin_footer_text">About OLX Group</p>
          <p class="card-text margin_footer_text">OLX Blog</p>
          <p class="card-text margin_footer_text">Contact Us</p>
          <p class="card-text margin_footer_text">OLX for Businesses</p>
         
          </div>
           
          <div className="card-body footer_li text-success w-100">
          <h5 className="card-title categaries_heading">OLX</h5>
          <p class="card-text margin_footer_text">Help</p>
          <p class="card-text margin_footer_text">Sitemap</p>
          <p class="card-text margin_footer_text">Legal & Privacy information</p>
          
         
          </div>

          <div className="card-body footer_li text-success w-100">
          <h5 style={{marginLeft:0}} className="card-title categaries_heading ">FOLLOW US</h5>
           <span className="footer_icon" style={{marginLeft:0},{cursor:"pointer"},{color:"rgb(133, 148, 124);"}}><FacebookIcon/> <TwitterIcon/> <YouTubeIcon/> <InstagramIcon/></span>
           <br/>
           <br/>
           <br/>
           <span  ><button className="footer_button" ><AppleIcon/> App store</button> <button className="footer_button"><ShopTwoIcon/> Google play</button></span>
         
          </div>

          </div>

           <div className="card-footer footer_div  w-100"><span style={{fontWeight:"bold"}}> Other Countries </span>  India - South Africa - Indonesia<span style={{marginLeft:"700px"}}> <span style={{fontWeight:"bold"}}><span style={{color:"rgb(7, 4, 53)"}}>f </span>  Free Classifieds in Pakistan</span> . © 2006-2020 OLX</span></div>
         </div>

            </div>
        )
    }
}
export default Footer;