import React, {Component} from 'react'
import Header from './Header';
import Mainpage from './Mainpage';

class WikiPage extends Component{
    render(){
        return(
            <div className="WikiaPage">
                <div className="Headergra">
                    <Header></Header>
                    <Mainpage></Mainpage>
                </div>
            </div>
        );
    }   
}
export default WikiPage;