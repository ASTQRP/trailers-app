import React,{ Component  } from "react";
import './App.css';
const axios = require('axios').default; 

class App extends Component{
  getVideos(){
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
         .then(response => console.log(response.data))
  }
  render(){
  return(<h1>{this.getVideos()}</h1>)
  }
}

export default App;
