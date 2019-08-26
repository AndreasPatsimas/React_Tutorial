// App.js will be my main component, the meeting of the other components
import React, {Component} from 'react';
import Contact from "./components/Contact"
import './App.css';

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
      <div className="App">
        <h1>The App Component</h1>
        {/* {itBe} */}
        {<Contact/>}
      </div>
    );
  }
}

export default App;
