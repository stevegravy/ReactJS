import React from 'react';//J'importe React dans le dossier react dans la
import {render} from 'react-dom';
import citations from './citations';
import './index.css';

class App extends React.Component{//Je crée mon component App
    state = {
        // citation: 'Sir, sir, on en a gros!',//On peut écrire en dur si on veur que ce soit la même expression qui s'affiche quand on actualise la page
        // auteur: 'Steve'
    };
    componentWillMount(){
        this.genererCitation();
    }
    genererCitation = event => {
      //On transforme les citations en Array
        const keyArray= Object.keys(citations)/*On crée une constante (variable qui ne peut pas bouger) qui reprend les clés "citations" de l'objet*/
      //une citation au hasard
        const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
       if (this.state.citation === citations[randomKey].citation){// si la citation du state = à la citation qui arrive en random
           this.genererCitation();//on relance la fonction pour générer une citation
           return;
       }
        this.setState(citations[randomKey]); //On rempli le state, on lui passe citation avec la clé randomKey
    };

    render(){
        return(
            <div>
                <p>
                    {this.state.citation}{/*dans le component, je vais chercher le state, dans lequel je vais dans citation,etc...*/}
                    <span>- {this.state.auteur}</span>{/*Pareil que ci-dessus mais dans "auteur"*/}
                </p>
                <button onClick={e => this.genererCitation(e)}> Une autre citation </button>{/* event= au moment ou on click, on envoie une fonction this(à l'intérieur du component App).(la fonction qui s'appelle:)genererCitation*/}
            </div>
        );
    }
}

render(
  <App />,
    document.getElementById('root')
);
