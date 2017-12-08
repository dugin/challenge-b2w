import React from 'react';
import {render} from 'react-snapshot';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {injectGlobal} from 'styled-components'

injectGlobal`
    body {
      font-family: sans-serif;
      margin:0;
      display:flex;
      flex-direction: column;
      min-height:100vh;
    }
  `;

render(
    <App/>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./App', () => {
        render(
            <App/>,
            document.getElementById('root')
        );
    })
}

registerServiceWorker();
