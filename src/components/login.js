import React from 'react';
import Header from './Header'
import UnderHeader from './underHeader';
import { BrowserRouter as Router,Link } from "react-router-dom";
// import {Switch} from "react-router-dom";


class Login extends React.Component{
    render(){
        return(
            <div>
            <Header/>
            <UnderHeader/>
           
            <Link to="/"> gOTO Home</Link>
           
            </div>
        )
    }
}
export default Login;