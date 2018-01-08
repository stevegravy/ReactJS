import React from 'react';
import {render} from 'react-dom';
import citations from './citations';
import './index.css';

class App extends React.Component{
    state = {
        citations
    };
    genererCitation = e => {
      //Ontransforme les citations en Array
        const keyArray= Object.keys(citations)
    };

    render(){
        console.log(citations);
        return(
            <div>
                <p>
                    {this.state.citations.citation1.citation}
                    Ma citation
                    <span>- {this.state.citations.citation1.auteur}</span>
                </p>
                <button onClick={e => this.genererCitation(e)}> </button>
            </div>
        );
    }
}

render(
  <App />,
    document.getElementById('root')
);
