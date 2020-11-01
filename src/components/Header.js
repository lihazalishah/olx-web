
import React from 'react';
import Logo from '../images/olx-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";





class Header extends React.Component{
    render(){
        return(
            <div className="Header bg-light">
              
              <div>
               <img className="logo" src={Logo} alt="olx logo" width="50" height="40"/>
              </div>
              <div>
              <input  value="Location"  className="location dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" href="#">Karachi</Link>
                    <Link className="dropdown-item" href="#">Islamabad</Link>
                    <Link className="dropdown-item" href="#">Lahore</Link>
                    <Link className="dropdown-item" href="#">Peshawer</Link>
                  </div>
              </div>

              <div className="search_div" >
                <input value="Search" className="search_input" /> <SearchIcon className="search_icon"/>
              </div>

              <span className="login_Sell_span">
              <Link className="login" to="/login" >Login</Link>
              <button type="button" className="sell">+SELL</button>
              </span>

           </div>
 
        )
    }
}

export default Header;
  