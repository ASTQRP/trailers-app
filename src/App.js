import React,{ Component  } from "react";
import { Button } from 'reactstrap';
const axios = require('axios').default; 

class App extends Component{
  getVideos(){
   console.log('tango hambre');
  }
  render(){
  return(<Button color="primary">CLik</Button>)
  }
}

export default App;
