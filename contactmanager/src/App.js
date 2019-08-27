// App.js will be my main component, the meeting of the other components
import React, {Component} from 'react';
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import './App.css';
import Header from "./components/layout/Header";
import {Provider} from './context';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  
  render(){
    //mesa sto render ki eksw apo to return grafw kanonika javascript
    
    // let itBe;
    // const name = "Andreas";
    // const showName = true;
    // if(showName){
    //   itBe = (
    //     <div>
    //       <h4>{name}</h4>
    //       <h5>teers</h5>
    //     </div>
    //     );
    // }
    // else{
    //   itBe = null;
    // }

    return (
      // mesa sto return epistrefw jsx, to jsx einai to output mou, paragei sthn ousia html
      <Provider>
        <div className="App">
          <Header branding = "Contact Manager"/>
          <div className="container">
            <AddContact/>
            <Contacts/>
          </div>
          {/* {itBe} */}
          
        </div>
      </Provider>
    );
  }
}

export default App;
