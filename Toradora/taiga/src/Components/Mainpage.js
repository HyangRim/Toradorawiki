import React, {Component} from 'react'
import "../CSS/Mainpage.scss"
import MarkdownRenderer from './MarkdownRenderer';
import ReactMarkdown from 'react-markdown';

class Mainpage extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:null,
        };
    }
    componentDidMount(){
        fetch('http://localhost:5000')
          .then(res=>res.json())
          .then(res=>{
              console.log(res['title']);
              this.setState({data: res['title']});
              console.log(this.state.data);
          });
    }
    render(){
        return(
            <div class="page">
                <main class="page_main">
                    <div class="page-header"></div>
                    <div id="content" class="page-content"></div>
                    <ReactMarkdown children={this.state.data}></ReactMarkdown>
                </main>
            </div>
        );
    }
}

export default Mainpage;