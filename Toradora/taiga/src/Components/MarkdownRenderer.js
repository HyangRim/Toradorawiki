import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

var text = null;

class MarkdownRenderer extends Component{
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
              text = res['title'];
        });
    };

    render(){
        return(
            <ReactMarkdown>{text}</ReactMarkdown>
        );
    };
}

export default MarkdownRenderer;