import React from 'react';
import Header from '../components/Header';
import LandANDplots from './Land_and_Plots'
import UnderHeader from './underHeader';
import Footer from '../components/Footer';

class Home extends React.Component{
    render(){
        return(
            <div>
            <Header/>
            <UnderHeader/>
            <LandANDplots/>
            <Footer/>
            </div>
        )
    }
}
export default Home;