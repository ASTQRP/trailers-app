import React,{ Component  } from "react";
import { Button} from 'reactstrap';
import NavbarComponent from './Components/NavbarComponent'
const axios = require('axios').default; 

class App extends Component{
  getVideos(){
   console.log('tango hambre');
  }
  render(){
  return(
  <div>
    <NavbarComponent></NavbarComponent>
    <h1>Pronto empezaremos a programar!</h1>
      <Button color='primary'>CLik</Button>
  </div>
  )
  }
}

export default App;
