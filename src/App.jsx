import React from 'react';
import {Context} from "./components/Wrapper";

import './App.css';

import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

class App extends React.Component{
    static contextType = Context;

    render() {
        return (
            <div className="App">
                <h1>
                    <FormattedMessage
                        id="app.header"
                        defaultMessage="Automatic translation"
                        description="Main Application header"
                    />
                </h1>
                <h2>
                    <FormattedMessage
                        id="app.text"
                        defaultMessage="Hello, welcome {user}"
                        description="Welcome message"
                        values={{ user: "John Doe" }}/>
                </h2>
                <a href="https://www.positronx.io" target="_blank" rel="noopener noreferrer">
                    <FormattedMessage
                        id="app.link"
                        defaultMessage="Go to link"
                        description="Check website"/>
                </a>
                <br/>
                <select value = {this.context.locale} onChange={this.context.selectLanguage}>
                    <option value= 'en'>English</option>
                    <option value= 'fr'>French</option>
                    <option value= 'ar'>Arabic</option>
                    <option value= 'es'>Spanish</option>
                </select>
            </div>
        );
    }
}

export default App;
