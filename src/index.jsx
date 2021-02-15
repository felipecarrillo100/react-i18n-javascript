import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import locale_en from "./translations/en.json";
import locale_nl from "./translations/nl.json";
import locale_fr from "./translations/fr.json";
import locale_es from "./translations/es.json";
import Wrapper from "./components/Wrapper";

const data = {
    'nl': locale_nl,
    'en': locale_en,
    'fr': locale_fr,
    'es': locale_es
};

// const language = navigator.language.split(/[-_]/)[0];
const language = "es".split(/[-_]/)[0];
/*
ReactDOM.render(
  <React.StrictMode>
      <IntlProvider locale='en' messages={data[language]}>
          <App/>
      </IntlProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render(
    <React.StrictMode>
        <Wrapper>
            <App/>
        </Wrapper>,
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
