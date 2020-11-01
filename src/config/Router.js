import React from 'react';
import Home from '../components/Home';
import Login from '../components/login';

import {BrowserRouter as Router,Route } from "react-router-dom";
import Mobilephones from '../components/Mobilepnones';
import MoterCycle from '../components/Motercycle';
import Cars from '../components/Cars';
import Houses from '../components/Houses';
import Tv from '../components/Tv_and_Audoi_Video';
import Tablet from '../components/Tablet';

import Land1 from '../components/landchild/land1';
import Land2 from '../components/landchild/land2';
import Land3 from '../components/landchild/land3';
import Land4 from '../components/landchild/land4';
import Land5 from '../components/landchild/land5';
import Land6 from '../components/landchild/land6';
import Land7 from '../components/landchild/land7';
import Land8 from '../components/landchild/land8';

import Mobile1 from '../components/Mobile_Phones/Mobile1';
import Mobile2 from '../components/Mobile_Phones/Mobile2';
import Mobile3 from '../components/Mobile_Phones/Mobile3';
import Mobile4 from '../components/Mobile_Phones/Mobile4';
import Mobile5 from '../components/Mobile_Phones/Mobile5';
import Mobile6 from '../components/Mobile_Phones/Mobile6';
import Mobile7 from '../components/Mobile_Phones/Mobile7';
import Mobile8 from '../components/Mobile_Phones/Mobile8';

import Bike1 from '../components/bikes/Bike1';
import Bike2 from '../components/bikes/Bike2';
import Bike3 from '../components/bikes/Bike3';
import Bike4 from '../components/bikes/Bike4';
import Bike5 from '../components/bikes/Bike5';
import Bike6 from '../components/bikes/Bike6';
import Bike7 from '../components/bikes/Bike7';
import Bike8 from '../components/bikes/Bike8';

import Car1 from '../components/cars child/car1';
import Car2 from '../components/cars child/car2';
import Car3 from '../components/cars child/car3';
import Car4 from '../components/cars child/car4';
import Car5 from '../components/cars child/car5';
import Car6 from '../components/cars child/car6';
import Car7 from '../components/cars child/car7';
import Car8 from '../components/cars child/car8';

import House1 from '../components/Houses child/house1';
import House2 from '../components/Houses child/house2';
import House3 from '../components/Houses child/house3';
import House4 from '../components/Houses child/house4';
import House5 from '../components/Houses child/house5';
import House6 from '../components/Houses child/house6';
import House7 from '../components/Houses child/house7';
import House8 from '../components/Houses child/house8';

import Tv1 from '../components/Tv and Audio video child/tv1';
import Tv2 from '../components/Tv and Audio video child/tv2';
import Tv3 from '../components/Tv and Audio video child/tv3';
import Tv4 from '../components/Tv and Audio video child/tv4';
import Tv5 from '../components/Tv and Audio video child/tv5';
import Tv6 from '../components/Tv and Audio video child/tv6';
import Tv7 from '../components/Tv and Audio video child/tv7';
import Tv8 from '../components/Tv and Audio video child/tv8';

import Tablet1 from '../components/Tablet child/tablet1';
import Tablet2 from '../components/Tablet child/tablet2';
import Tablet3 from '../components/Tablet child/tablet3';
import Tablet4 from '../components/Tablet child/tablet4';
import Tablet5 from '../components/Tablet child/tablet5';
import Tablet6 from '../components/Tablet child/tablet6';
import Tablet7 from '../components/Tablet child/tablet7';
import Tablet8 from '../components/Tablet child/tablet8';





class RouterApp extends React.Component{
 render(){
     return(
        <Router>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/Land1' component={Land1}/>
            <Route exact path='/Land2' component={Land2}/>
            <Route exact path='/Land3' component={Land3}/>
            <Route exact path='/Land4' component={Land4}/>
            <Route exact path='/Land5' component={Land5}/>
            <Route exact path='/Land6' component={Land6}/>
            <Route exact path='/Land7' component={Land7}/>
            <Route exact path='/Land8' component={Land8}/>

            <Route exact path='/MobilePhones' component={Mobilephones}/>
            <Route exact path='/Mobile1' component={Mobile1}/>
            <Route exact path='/Mobile2' component={Mobile2}/>
            <Route exact path='/Mobile3' component={Mobile3}/>
            <Route exact path='/Mobile4' component={Mobile4}/>
            <Route exact path='/Mobile5' component={Mobile5}/>
            <Route exact path='/Mobile6' component={Mobile6}/>
            <Route exact path='/Mobile7' component={Mobile7}/>
            <Route exact path='/Mobile8' component={Mobile8}/>

            <Route exact path='/MoterCycle' component={MoterCycle}/>
            <Route exact path='/Bike1' component={Bike1}/>
            <Route exact path='/Bike2' component={Bike2}/>
            <Route exact path='/Bike3' component={Bike3}/>
            <Route exact path='/Bike4' component={Bike4}/>
            <Route exact path='/Bike5' component={Bike5}/>
            <Route exact path='/Bike6' component={Bike6}/>
            <Route exact path='/Bike7' component={Bike7}/>
            <Route exact path='/Bike8' component={Bike8}/>
            
                         <Route exact path='/Cars' component={Cars}/>
            <Route exact path='/car1' component={Car1}/>
            <Route exact path='/car2' component={Car2}/>
            <Route exact path='/car3' component={Car3}/>
            <Route exact path='/car4' component={Car4}/>
            <Route exact path='/car5' component={Car5}/>
            <Route exact path='/car6' component={Car6}/>
            <Route exact path='/car7' component={Car7}/>
            <Route exact path='/car8' component={Car8}/>

                       <Route exact path='/Houses' component={Houses}/>
            <Route exact path='/House1' component={House1}/>
            <Route exact path='/House2' component={House2}/>
            <Route exact path='/House3' component={House3}/>
            <Route exact path='/House4' component={House4}/>
            <Route exact path='/House5' component={House5}/>
            <Route exact path='/House6' component={House6}/>
            <Route exact path='/House7' component={House7}/>
            <Route exact path='/House8' component={House8}/>

                               <Route exact path='/Tv' component={Tv}/>
            <Route exact path='/Tv1' component={Tv1}/>
            <Route exact path='/Tv2' component={Tv2}/>
            <Route exact path='/Tv3' component={Tv3}/>
            <Route exact path='/Tv4' component={Tv4}/>
            <Route exact path='/Tv5' component={Tv5}/>
            <Route exact path='/Tv6' component={Tv6}/>
            <Route exact path='/Tv7' component={Tv7}/>
            <Route exact path='/Tv8' component={Tv8}/>

                            <Route exact path='/Tablet' component={Tablet}/>
            <Route exact path='/Tablet1' component={Tablet1}/>
            <Route exact path='/Tablet2' component={Tablet2}/>
            <Route exact path='/Tablet3' component={Tablet3}/>
            <Route exact path='/Tablet4' component={Tablet4}/>
            <Route exact path='/Tablet5' component={Tablet5}/>
            <Route exact path='/Tablet6' component={Tablet6}/>
            <Route exact path='/Tablet7' component={Tablet7}/>
            <Route exact path='/Tablet8' component={Tablet8}/>
                               
    


           
        </Router>
     )
 }
}
export default RouterApp;