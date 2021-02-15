import React, {useState} from 'react';
import {createIntl, RawIntlProvider} from 'react-intl';

const French = require('../translations/fr.json');
const Arabic = require('../translations/ar.json');
const English = require('../translations/en.json');
const Spanish = require('../translations/es.json');

export const Context = React.createContext(undefined);

const local = navigator.language;

let lang;
if (local.substring(0, 2) === 'en' ) {
    lang = English;
} else if (local.substring(0, 2) === 'es' ) {
    lang = English;
} else if (local.substring(0, 2) === 'fr') {
    lang = French;
} else {
    lang = Arabic;
}


const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);
    const intl = createIntl({
        locale,
        messages: messages
    });

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale.substring(0, 2) === 'en' ) {
            setMessages(English);
        } else if (newLocale.substring(0, 2) === 'es' ) {
            setMessages(Spanish);
        }
        else {
            if (newLocale.substring(0, 2) === 'fr') {
                setMessages(French);
            } else {
                setMessages(Arabic);
            }
        }
    }

    return (
        <Context.Provider value={{locale, selectLanguage, intl}}>
            <RawIntlProvider value={intl} >
                {props.children}
            </RawIntlProvider>
        </Context.Provider>
    );
}

export default Wrapper;
