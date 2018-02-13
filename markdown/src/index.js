import React from 'react';
import { render } from 'react-dom';
//CSS
import './style/css/bootstrap.min.css';
import './index.css';
//JS importé
import {sampleText} from './sampleText';
//Bibliothèque Marked.js
import marked from 'marked';

class App extends React.Component {

    state = {
        text:sampleText
    };

    editText=(event) => {
        const text = event.target.value;
        this.setState({ text });
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('text', nextState.text);
    }

    renderText = (text) => {
        const renderText = marked(text, {sanitize: true});
        return { __html: renderText }
    };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea className="form-control" value={this.state.text} id="" cols="30" rows="35" onChange={(e) => this.editText(e)}>

                        </textarea>
                    </div>
                    <div className="col-sm-6">
                        <div dangerouslySetInnerHTML={this.renderText(this.state.text)}></div>
                    </div>
                </div>
            </div>
        )
    }
}

render(
  <App/>,
  document.getElementById('root')
);