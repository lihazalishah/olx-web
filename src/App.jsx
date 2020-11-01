import React from 'react';
import './App.css';
import RouterApp from './config/Router';
import Login from './components/login';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)




class App extends React.Component{
  render(){
    return(
      <div>
        
     <RouterApp/>
     
     </div>
    )
  }
}

export default App;
