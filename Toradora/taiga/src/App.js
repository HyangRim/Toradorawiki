//import './CSS/custom.css'
import './CSS/Header.scss'
import WikiPage from './Components/WikiPage';
import './CSS/WikiaPage.scss'
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title:'dsads'
    };
  }
  /*componentDidMount(){
    fetch('http://localhost:5000')
      .then(res=>res.json())
      .then(data=> this.setState({title:data}));
  }*/
  render(){
    return(
      <div class="house">
        <WikiPage></WikiPage>
      </div>
    );
  }
}

export default App;
