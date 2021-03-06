import React from 'react';

class Connexion extends React.Component {
    goToChat = (event) => {
        event.preventDefault(); //On demande de ne pas raffraichir la page quand le navigateur le demande
        console.log(this.pseudoInput.value)
    };

    render() {
        return (
            <div className="connexionBox" onSubmit={e => this.goToChat(e)}>
                <form className="connexion">
                    <input type="text" placeholder="Pseudo" required ref= {input => {this.pseudoInput = input}}/>
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
}

export default Connexion;