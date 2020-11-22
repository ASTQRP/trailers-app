import React,{ Component  } from "react";
import './App.css';
const axios = require('axios').default; 

class App extends Component{
  getVideos(){
   console.log('PIKILAO');
  }
  render(){
  return(<h1>{this.getVideos()}</h1>)
  }
}

export default App;
