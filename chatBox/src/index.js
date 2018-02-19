import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Connexion extends React.Component{
    render(){
        return(
            <div className="connectionBox">
                <form className="connexion">
                    <input type="text" placeholder="Pseudo" required/>
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Connexion/>, document.getElementById('root'));